ospokemon.connection = new WebSocket('ws://' + window.location.host + '/websocket.go');
ospokemon.connection.onmessage = function (e) {
  var update = JSON.parse(e.data);
  ospokemon.control = update.control;
  ospokemon.entities = update.world;

  ospokemon.ui.unitbar.update();
  ospokemon.ui.camera.update();
  ospokemon.ui.actionbar.update();
};