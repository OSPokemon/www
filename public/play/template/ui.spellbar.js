(function() {
  ospokemon.ui.actionbar = this;
  console.log('ospokemon-action-bar');

  ospokemon.loader.Load('ospokemon-action-bar-button');
  
  this.update = function() {
    var portrait = "";
    var abilities = [];

    if (ospokemon.ui.active) {
      portrait = "url("+ospokemon.entities[ospokemon.ui.active].Portrait + ")";

      for (var i=0; i<ospokemon.control[ospokemon.ui.active].Abilities.length; i++) {
        var val = ospokemon.control[ospokemon.ui.active].Abilities[i];
        abilities.push(val);
      }
    }
    else {
      portrait = "";
    }

    $('.navbar-brand', this).css("content", portrait)

    var navbar = $('.navbar-nav', this);

    for (var i=0; i<abilities.length; i++) {
      if (i >= navbar.children().length) {
        var newChild = ospokemon.loader.Build('ospokemon-action-bar-button', this);
        navbar.append(newChild);
      }

      navbar.children()[i].update(abilities[i]);
    }

    while (navbar.children().length > abilities.length) {
      navbar[0].removeChild(navbar.children().last()[0])
    }

    navbar.children().children('a').removeClass("targeting");

    navbar.children().each(function (index, el) {
      if ((ospokemon.ui.hover && ospokemon.ui.hover.hotkey == el.data.Hotkey)
         || (ospokemon.ui.target == el.data.Hotkey)) {
        $('a', el).addClass("targeting");
      }
    });
  }
})