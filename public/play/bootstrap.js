$(function() {
  ospokemon = {
    world: {}
  };

  $.getScript('loader.js')
  .done(function() {
    $.getScript('ui.js')
    $.getScript('connection.js');
    $.getScript('keyboard.js');
    $.getScript('mouse.js');
  });
});
