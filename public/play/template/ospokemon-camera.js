Reckoner.provide('ospokemon-camera', function() {
  ospokemon.ui.camera = this;
  this.entities = {};
  this.offset = {x:0, y:0};

  Reckoner.search('ospokemon-entity');

  this.addEntity = function(e) {
    $('.viewport', this)[0].appendChild(e);
  };

  this.removeEntity = function(e) {
    $('.viewport', this).remove(e); // ?
  };

  this.update = function() {
    var oldentities = this.entities;
    this.entities = {};

    for (var k in ospokemon.entities) {
      var v = ospokemon.entities[k];

      if (oldentities[k]) {
        this.entities[k] = oldentities[k];
        delete oldentities[k];
      }
      else {
        this.entities[k] = Reckoner.build('ospokemon-entity', v);
        if (this.entities[k]) this.addEntity(this.entities[k])
      }
    }
    for (var k in oldentities) {
      var e = oldentities[k];
      this.removeEntity(e);
    }

    for (var k in ospokemon.entities) {
      var v = ospokemon.entities[k];
      this.entities[k].update(v);

      if (k === ospokemon.ui.active+'') {
        $(this.entities[k]).addClass('active');
      }
      else {
        $(this.entities[k]).removeClass('active');
      }
    }
  };

  this.drag = function(diff) {
    this.offset.x += diff.x;
    this.offset.y += diff.y;

    $('.viewport', this).css("top", this.offset.y);
    $('.viewport', this).css("left", this.offset.x);
  };
});