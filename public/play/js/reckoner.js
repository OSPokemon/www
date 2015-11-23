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

    if (searching[name] == 0) Reckoner.sweep(name);
  }

  Reckoner.search = function(name) {
    if (searching[name] !== undefined) return;

    searching[name] = 3;

    var js_path = Reckoner.buildJsPath(name);
    $.getScript(js_path)
    .done(function() {
      searching[name]--;
      if (searching[name] == 0) Reckoner.sweep(name);
    })
    .fail(function() {
      searching[name] -= 2;
      if (searching[name] == 0) Reckoner.sweep(name);
    });

    var html_path = Reckoner.buildHtmlPath(name);
    var link = $('<link id="' + name + '-template" src="' + html_path + '"></link>');
    $('head').append(link);
    link.load(html_path, function() {
      searching[name]--
      if (searching[name] == 0) Reckoner.sweep(name);
    });
  }

  Reckoner.buildJsPath = function(name) {
    return Reckoner.js_root + name + '.js';
  }

  Reckoner.buildHtmlPath = function(name) {
    return Reckoner.html_root + name + '.html';
  }

  Reckoner.build = function(name, config) {
    if (searching[name] != 0) return;

    var view = Reckoner.constructView(name);
    if (!view) return;
    Reckoner.embedController(view, name, config);

    return view;
  }

  Reckoner.constructView = function(name) {
    var template = $("#"+name+"-template").children()[0];
    if (!template) return;
    return template.cloneNode(true);
  }

  Reckoner.embedController = function(node, name, config) {
    constructors[name].apply(node, [config]);
  }

  Reckoner.sweep = function(name) {
    var nodes = $(name);

    for (var i=0; i<nodes.length; i++) {
      var node = nodes[i];
      var view = Reckoner.constructView(name);

      if (view) {
        applyAttributes(node, view);
        node.parentNode.replaceChild(view, node);
      }
      else {
        view = node;
      }

      Reckoner.embedController(view, name);
    }

    Reckoner.reckon();
  }

  Reckoner.reckon = function() {
    var unresolved = $(':unresolved');

    for (var i=0; i<unresolved.length; i++) {
      Reckoner.search(unresolved[i].nodeName.toLowerCase())
    }
  }

  function applyAttributes(src, dst) {
    for (var i=0; i<src.attributes.length; i++) {
      var attributeNode = src.attributes[i];
      dst.setAttribute(attributeNode.nodeName, attributeNode.nodeValue)
    }
  }
});