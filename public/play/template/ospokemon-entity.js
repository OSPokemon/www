Reckoner.provide('ospokemon-entity', function() {
  
  this.update = function(data) {
    this.data = data;

    $(this).css("top", this.data.Physics.Y);
    $(this).css("left", this.data.Physics.X);
    $(this).css("height", this.data.Physics.Height + "px");
    $(this).css("width", this.data.Physics.Width + "px");
  }
});