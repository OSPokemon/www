ospokemon.loader = {
  objects: {},
};

ospokemon.loader.Load = function(name, cb) {
  var object = ospokemon.loader.objects[name];

  if (!object || !object.template)
    ospokemon.loader.LoadTemplate(name)
    .done(cb)
    .fail(cb)

  if (!object || !object.script)
    ospokemon.loader.LoadScript(name)
    .done(cb)
    .fail(cb)
}

ospokemon.loader.LoadTemplate = function(name) {
  ospokemon.loader.objects[name] = ospokemon.loader.objects[name] || {};

  var html_path = 'template/' + name + '.html';
  return $.get(html_path).done(function(data) {
    console.log('load template completed: ' + name)
    ospokemon.loader.objects[name].template = data
  })
  .fail(function() {
    console.log(arguments)
  })
}

ospokemon.loader.LoadScript = function(name) {
  ospokemon.loader.objects[name] = ospokemon.loader.objects[name] || {};

  var js_path = 'template/' + name + '.js';
  return $.get(js_path).done(function(data) {
    console.log('load script completed: ' + name)
    ospokemon.loader.objects[name].script = eval(data)
  })
  .fail(function() {
    console.log(arguments)
  })
}

ospokemon.loader.Build = function(name, arg1, arg2, arg3) {
  object = ospokemon.loader.objects[name]

  if (!object) {
    return null;
  }

  var instance = {};
  if (object.template) {
    instance = $(object.template)[0];
  }

  if (object.script) {
    object.script.call(instance, arg1, arg2, arg3)
  }

  return instance
}