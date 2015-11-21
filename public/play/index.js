ospokemon = {
  ui: {},
  entities: {},
  control: {}
};

$(function() {
  Reckoner.html_root = Reckoner.js_root = "template/";
  Reckoner.reckon();

  ospokemon.connection = new WebSocket('ws://' + window.location.host + '/connect');

  ospokemon.connection.onmessage = function (e) {
    var update = JSON.parse(e.data);
    ospokemon.control = update.control;
    ospokemon.entities = update.entities;

    ospokemon.ui.unitbar.update();
  };
});
