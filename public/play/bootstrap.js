$(function() {
  ospokemon = {
    world: {}
  };

  $.getScript('/js/loader.js')
  .done(function() {
    $.getScript('ui.js')
    $.getScript('connection.js');
    $.getScript('keyboard.js');
    $.getScript('mouse.js');
  });
});
