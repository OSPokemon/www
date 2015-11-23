console.log("ospokemon-unit-bar");
Reckoner.provide('ospokemon-unit-bar', function() {
  ospokemon.ui.unitbar = this;

  Reckoner.search('ospokemon-unit-bar-button');

  this.update = function() {
    var navbar = $(this).find('.navbar-nav');
    var navbarChildren = navbar.children();
    var navCounter = 0;

    for (var key in ospokemon.control) {
      var val = ospokemon.control[key];

      if (navCounter >= navbarChildren.length) {
        var newChild = Reckoner.build('ospokemon-unit-bar-button', this);
        navbar.append(newChild);
        navbarChildren = navbar.children();
      }

      if (navbarChildren[navCounter]) {
        navbarChildren[navCounter].update(val)
      }
      navCounter++;
    }
  }

  this.click = function(button) {
    $('.navbar-nav', this).children().removeClass('active');

    if (ospokemon.ui.active === button.data.Id) {
      ospokemon.ui.active = false;
    }
    else {
      ospokemon.ui.active = button.data.Id;
      $(button).addClass('active');
    }
  }
});