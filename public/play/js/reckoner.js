$(function() {
  Reckoner = {
    html_root: "html/",
    js_root: "js/"
  };
  var constructors = {};
  var searching = {};

  $.expr[':'].unresolved = function(obj) {
    return obj.nodeName.match(/.*-.*/g)
  }

  Reckoner.provide = function(name, constructor) {
    if (constructors[name]) return;

    constructors[name] = constructor;
    searching[name]--;

    if (searching[name] == 0) {
      Reckoner.sweep(name);
    }
  }

  Reckoner.search = function(name) {
    if (constructors[name]) return;

    searching[name] = 3;

    $.getScript(Reckoner.js_root + name + ".js")
    .done(function() {
      searching[name]--
      if (searching[name] == 0) Reckoner.sweep(name);
    })
    .fail(function() {
      searching[name] -= 2
      if (searching[name] == 0) Reckoner.sweep(name);
    });

    var link = $('<link id="' + name + '-template" src="' + Reckoner.html_root + name + '.html"></link>');
    link.id = name+"-template";
    $('head').append(link);
    link.load(Reckoner.html_root + name + ".html", function() {
      searching[name]--
      if (searching[name] == 0) Reckoner.sweep(name);
    });
  }

  Reckoner.build = function(name, config) {
    if (searching[name] != 0) {
      Reckoner.search(name);
      return;
    }

    var template = $("#"+name+"-template").children()[0];
    var view = template.cloneNode(true);
    applyAttributes(config, view);
    constructors[name].apply(view, [config])

    return view;
  }

  Reckoner.sweep = function(name) {
    var nodes = $(name);
    for (var i=0; i<nodes.length; i++) {
      var node = nodes[i];
      var view = Reckoner.build(name);
      var attributes = transformAttributesMap(node.attributes);
      applyAttributes(attributes, view);
      node.parentNode.replaceChild(view, node);
    }

    Reckoner.reckon();
  }

  Reckoner.reckon = function() {
    var unresolved = $(':unresolved');

    for (var i=0; i<unresolved.length; i++) {
      Reckoner.search(unresolved[i].nodeName.toLowerCase())
    }
  }

  function transformAttributesMap(src) {
    var map = {};
    for (var key in src) {
      var node = src[key];
      if (node.nodeName) map[node.nodeName] = node.nodeValue
    }
    return map;
  }

  function applyAttributes(map, node) {
    for (var key in map) {
      node.setAttribute(key, map[key]);
    }
  }
});