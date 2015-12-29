(function(actionbar) {
  console.log("ospokemon-action-bar-button");

  this.actionbar = actionbar;

  this.update = function(ability) {
    this.data = ability;
    $('.name', this)[0].innerHTML = this.data.Name;
    $('.cooldown', this)[0].innerHTML = this.data.Cooldown + 's';
    $('.hotkey', this)[0].innerHTML = this.data.Hotkey;
  }

  this.click = function(e) {
    if (this.data.TargetType == 1) {
      ospokemon.ui.TargetControl(this.data.Hotkey);
    }
    else if (this.data.TargetType == 2) {
      ospokemon.ui.HoverControl(this.data.Hotkey);
    }
    else {
      var message = {
        entity: ospokemon.ui.active,
        ability: this.data.Hotkey,
        target: 0
      }
      ospokemon.connection.send(JSON.stringify(message));
    }
  }

  $(this).click(this.click)
})