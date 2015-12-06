Reckoner.provide('ospokemon-entity', function() {
  console.log("ospokemon-entity");
  
  this.update = function(data) {
    this.data = data;

    $(this).css({
      top: this.data.Physics.Y,
      left: this.data.Physics.X,
      height: this.data.Physics.Height + "px",
      width: this.data.Physics.Width + "px"
    });

    $('.graphic', this).css({content: "url(animation/" + this.data.Graphic + ")"});

    if (this.data.Action) {
      $('.action-graphic', this).css({content: "url(animation/" + this.data.Action.Graphic + ")"});
      $('.action-name', this)[0].innerHTML = this.data.Action.Name;
      $('.action-completion', this).css({width: this.data.Action.Completion + "%"});
      $('.action-plate', this).css({display:"initial"})
    }
    else {
      $('.action-plate', this).css({display:"none"});
    }
  }
});