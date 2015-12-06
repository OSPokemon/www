ospokemon = {
  ui: {},
  entities: {},
  control: {}
};

$(function() {
  Reckoner.html_root = Reckoner.js_root = "template/";
  Reckoner.reckon();

  var rclick = false, rdrag = false;
  Reckoner.loadView('ospokemon-targeting');

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

  ospokemon.ui.HoverControl = function(hotkey) {
    if (!ospokemon.ui.hover) {
      ospokemon.ui.hover = Reckoner.constructView('ospokemon-targeting');
      ospokemon.ui.camera.appendChild(ospokemon.ui.hover);
    }
    ospokemon.ui.hover.hotkey = hotkey;
  };

  ospokemon.ui.TargetControl = function(hotkey) {
    if (!ospokemon.ui.target) {
      $(ospokemon.ui.camera).addClass("targeting");
    }
    ospokemon.ui.target= hotkey;
  }

  // mouse control
  $(document)
  .mousedown(function(e) {
    if (e.button == 2 && !ospokemon.ui.hover && !ospokemon.ui.target) {
      rclick = {x:e.clientX,y:e.clientY}
    }
  })
  .mouseup(function(e) {
    if (ospokemon.ui.hover) {
      if (e.button == 0) {
        var point = {};
        point.left = $(ospokemon.ui.camera).css("left");
        point.top = $(ospokemon.ui.camera).css("top");
        ospokemon.ui.camera.removeChild(ospokemon.ui.hover);
        ospokemon.ui.hover = false;

        point.left = point.left - ospokemon.ui.camera.offset.x;
        point.top = point.top - ospokemon.ui.camera.offset.y;

        var message = {
          entity: ospokemon.ui.active,
          ability: ospokemon.ui.hover.hotkey,
          target: point
        }

        ospokemon.connection.send(JSON.stringify(message));
      }

      ospokemon.ui.camera.removeChild(ospokemon.ui.hover);
    }
    else if (ospokemon.ui.target) {
      var el = e.target;

      while (!el.data && el != ospokemon.ui.camera) {
        el = el.parentNode;
      }

      if (el.data && e.button == 0) {
        var entityId = el.data.Id;

        var message = {
          entity: ospokemon.ui.active,
          ability: ospokemon.ui.target,
          target: entityId
        };

        ospokemon.connection.send(JSON.stringify(message));
      }

      $(ospokemon.ui.camera).removeClass('targeting');
    }
    else if (e.button == 2 && rclick && ospokemon.ui.active) {
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

    ospokemon.ui.hover = ospokemon.ui.target = rclick = rdrag = false;
  })
  .mousemove(function(e) {
    if (ospokemon.ui.hover) {
      $(ospokemon.ui.hover).css({
        "left": e.clientX ,
        "top": e.clientY
      });
    }

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
    // TODO check about typing in chat box or something

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
    else if (code > 96 && code < 123) {
      var hotkey = String.fromCharCode(e.keyCode)

      $('body .ospokemon-action-bar-button').each(function(index, el) {
        if (el.data.Hotkey == hotkey) {
          el.click()
        }
      });
    }
  });
});
