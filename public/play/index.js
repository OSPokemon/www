ospokemon = {
  ui: {},
  entities: {},
  control: {}
};

$(function() {
  Reckoner.html_root = Reckoner.js_root = "template/";
  Reckoner.reckon();

  // incoming messages
  ospokemon.connection = new WebSocket('ws://' + window.location.host + '/connect');
  ospokemon.connection.onmessage = function (e) {
    var update = JSON.parse(e.data);
    ospokemon.control = update.control;
    ospokemon.entities = update.world;

    ospokemon.ui.unitbar.update();
    ospokemon.ui.camera.update();
    ospokemon.ui.actionbar.update();
  };

  // mouse control
  var rclick = false, rdrag = false;
  $(document)
  .mousedown(function(e) {
    if (e.button == 2) {
      rclick = {x:e.clientX,y:e.clientY}
    }
  })
  .mouseup(function(e) {
    if (e.button == 2) {
      if (rclick && ospokemon.ui.active) {
        rclick.x -= ospokemon.entities[ospokemon.ui.active].Physics.Width/2;
        rclick.x -= ospokemon.ui.camera.offset.x;
        rclick.y -= ospokemon.entities[ospokemon.ui.active].Physics.Height/2;
        rclick.y -= ospokemon.ui.camera.offset.y;

        var message = {
          entity: ospokemon.ui.active,
          walk: rclick
        };

        ospokemon.connection.send(JSON.stringify(message));
      }
      rclick = rdrag = false;
    }
    else {
      // todo dispatch targeter ability
    }
  })
  .mousemove(function(e) {
    if (rclick) {
      rdrag = rclick;
      rclick = false;
    }

    if (rdrag) {
      diff = {x: e.clientX - rdrag.x, y: e.clientY - rdrag.y};
      ospokemon.ui.camera.drag(diff);
      rdrag.x = e.clientX;
      rdrag.y = e.clientY;
    }
  });

  // keyboard control
  $(document)
  .keypress(function(e) {
    var code = e.which;

    if (code > 47 && code < 58) {
      var index;

      if (code == 48) {
        index = 10;
      }
      else {
        index = code - 49;
      }

      var unitbarbuttons = $('.navbar-nav', ospokemon.ui.unitbar).children();
      if (index < unitbarbuttons.length) unitbarbuttons[index].click();
    }
  });
});
