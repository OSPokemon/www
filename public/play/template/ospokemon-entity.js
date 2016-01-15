(function() {
  console.log("ospokemon-entity");
  
  this.update = function(data) {
    this.data = data;

    $(this).css({
      top: this.data.Shape.Anchor.Y,
      left: this.data.Shape.Anchor.X,
      height: this.data.Shape.Height + "px",
      width: this.data.Shape.Width + "px"
    });

    $('.action-name', this)[0].innerHTML = this.data.Name;
    $('.graphic', this).css({content: "url(/image/" + this.data.Graphic + ")"});

    if (this.data.Action) {
      $('.action-graphic', this).css({content: "url(/image/" + this.data.Action.Graphic + ")"});
      $('.action-name', this)[0].innerHTML = this.data.Action.Name;
      $('.action-completion', this).css({width: this.data.Action.Completion + "%"});
    }
    else {
      $('.action-castbar', this).css({display: "none"})
    }
  }
});