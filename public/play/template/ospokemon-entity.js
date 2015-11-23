Reckoner.provide('ospokemon-entity', function() {
  console.log("ospokemon-entity");
  
  this.update = function(data) {
    this.data = data;

    $(this).css({
      top: this.data.Physics.Y,
      left: this.data.Physics.X,
      height: this.data.Physics.Height + "px",
      width: this.data.Physics.Width + "px",
      content: "url(animation/" + this.data.Graphic + ")"
    });
  }
});