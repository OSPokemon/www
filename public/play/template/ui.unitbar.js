(function() {
  ospokemon.ui.unitbar = this;

  ospokemon.loader.Load('ospokemon-unit-bar-button');

  this.update = function() {
    var navbar = $('.navbar-nav', this);
    var navCounter = 0;

    for (var key in ospokemon.control) {
      var val = ospokemon.control[key];

      if (val == null) {
        continue;
      }

      if (navCounter >= navbar.children().length) {
        var newChild = ospokemon.loader.Build('ospokemon-unit-bar-button', this);
        navbar.append(newChild);
      }

      if (navbar.children()[navCounter]) {
        navbar.children()[navCounter].update(val)
      }

      navCounter++;
    }

    while (navbar.children().length > navCounter) {
      navbar[0].removeChild(navbar.children().last()[0])
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
})