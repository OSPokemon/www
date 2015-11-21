Reckoner.provide('ospokemon-unit-bar', function() {
  ospokemon.ui.unitbar = this;

  console.log("ospokemon-unit-bar");

  this.update = function() {
    var navbar = $($(this).find('.navbar-nav')[0]);
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

  var currentActiveButton;
  this.click = function(button) {
    if (currentActiveButton == button) {
      currentActiveButton = null;
    }
    else if (currentActiveButton) {
      $(currentActiveButton).removeClass('active');
      currentActiveButton = button;
    }
    else {
      currentActiveButton = button;
    }
  }
});