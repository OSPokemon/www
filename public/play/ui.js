ospokemon.ui = {};

ospokemon.loader.Load('ui.camera', function() {
  var loader = ospokemon.loader.objects['ui.camera']

  if (!loader.script || !loader.template) {
    return
  }

  var camera = ospokemon.loader.Build('ui.camera')
  $('body').append(camera)
})

ospokemon.loader.Load('ui.unitbar', function() {
  var loader = ospokemon.loader.objects['ui.unitbar']

  if (!loader.script || !loader.template) {
    return
  }

  var unitbar = ospokemon.loader.Build('ui.unitbar')
  $('body').append(unitbar)
})

ospokemon.loader.Load('ui.spellbar', function() {
  var loader = ospokemon.loader.objects['ui.spellbar']

  if (!loader.script || !loader.template) {
    return
  }

  var spellbar = ospokemon.loader.Build('ui.spellbar')
  $('body').append(spellbar)
})