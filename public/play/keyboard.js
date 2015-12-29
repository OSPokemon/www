$(document)
.keypress(function(e) {
  // TODO check about typing in chat box or something

  var code = e.which;

  if (code > 47 && code < 58) {
    var index;

    if (code == 48) {
      index = 10;
    }
    else {
      index = code - 49;
    }

    var unitbarbuttons = $('.navbar-nav', ospokemon.ui.unitbar).children();
    if (index < unitbarbuttons.length) unitbarbuttons[index].click();
  }
  else if (code > 96 && code < 123) {
    var hotkey = String.fromCharCode(e.keyCode)

    $('body .ospokemon-action-bar-button').each(function(index, el) {
      if (el.data.Hotkey == hotkey) {
        el.click()
      }
    });
  }
})