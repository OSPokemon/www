ospokemon.mouse = {}

console.log('mouse')

$(document)
.mousedown(function(e) {
  if (e.button == 2 && !ospokemon.ui.hover && !ospokemon.ui.target) {
    ospokemon.mouse.rclick = {x:e.clientX,y:e.clientY}
  }
})
.mouseup(function(e) {
  if (ospokemon.ui.aimability) {
    if (e.button == 0) {
      var point = {
        x: e.clientX - ospokemon.ui.camera.offset.x - ospokemon.entities[ospokemon.ui.active].Physics.Shape.Width/2,
        y: e.clientY - ospokemon.ui.camera.offset.y - ospokemon.entities[ospokemon.ui.active].Physics.Shape.Height/2
      };

      var message = {
        entity: ospokemon.ui.active,
        ability: ospokemon.ui.aimability,
        target: point
      }

      ospokemon.connection.send(JSON.stringify(message));
      ospokemon.ui.HoverControl(false)
    }
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
  else if (e.button == 2 && ospokemon.mouse.rclick && ospokemon.ui.active) {
    ospokemon.mouse.rclick.x -= ospokemon.entities[ospokemon.ui.active].Physics.Shape.Width/2;
    ospokemon.mouse.rclick.x -= ospokemon.ui.camera.offset.x;
    ospokemon.mouse.rclick.y -= ospokemon.entities[ospokemon.ui.active].Physics.Shape.Height/2;
    ospokemon.mouse.rclick.y -= ospokemon.ui.camera.offset.y;

    var message = {
      entity: ospokemon.ui.active,
      walk: ospokemon.mouse.rclick
    };

    ospokemon.connection.send(JSON.stringify(message));
  }

  if (ospokemon.ui.aimability) {
    ospokemon.ui.HoverControl(false)
  }
  ospokemon.ui.target = ospokemon.mouse.rclick = ospokemon.mouse.rdrag = false;
})
.mousemove(function(e) {
  if (ospokemon.ui.hover) {
    $(ospokemon.ui.hover).css({
      "left": e.clientX ,
      "top": e.clientY
    });
  }

  if (ospokemon.mouse.rclick) {
    ospokemon.mouse.rdrag = ospokemon.mouse.rclick;
    ospokemon.mouse.rclick = false;
  }

  if (ospokemon.mouse.rdrag) {
    diff = {x: e.clientX - ospokemon.mouse.rdrag.x, y: e.clientY - ospokemon.mouse.rdrag.y};
    ospokemon.ui.camera.drag(diff);
    ospokemon.mouse.rdrag.x = e.clientX;
    ospokemon.mouse.rdrag.y = e.clientY;
  }
})