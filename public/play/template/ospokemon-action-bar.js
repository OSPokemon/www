Reckoner.provide('ospokemon-action-bar', function() {
  ospokemon.ui.actionbar = this;
  console.log('ospokemon-action-bar');

  Reckoner.search('ospokemon-action-bar-button');
  
  this.update = function() {
    var portrait = "";
    var abilities = [];

    if (ospokemon.ui.active) {
      portrait = "url(animation/"+ospokemon.entities[ospokemon.ui.active].Portrait + ")";

      for (var i=0; i<ospokemon.control[ospokemon.ui.active].Controls.Abilities.length; i++) {
        var val = ospokemon.control[ospokemon.ui.active].Controls.Abilities[i];
        abilities.push(val);
      }
    }
    else {
      portrait = "";
    }

    $('.navbar-brand', this).css("content", portrait)

    var navbar = $('.navbar-nav', this);
    var navbarchildren = navbar.children();

    for (var i=0; i<abilities.length; i++) {
      if (i >= navbarchildren.length) {
        var newChild = Reckoner.build('ospokemon-action-bar-button', this);
        navbar.append(newChild);
        navbarchildren = navbar.children();
      }

      navbarchildren[i].update(abilities[i]);
    }

    while (navbar.children().length > abilities.length) {
      navbar[0].removeChild(navbar.children().last()[0])
    }
  }
});