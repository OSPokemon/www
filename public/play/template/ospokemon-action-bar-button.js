Reckoner.provide('ospokemon-action-bar-button', function(actionbar) {
  console.log("ospokemon-action-bar-button");

  this.actionbar = actionbar;

  this.update = function(ability) {
    this.data = ability;
    $('.name', this)[0].innerHTML = this.data.Name;
    $('.cooldown', this)[0].innerHTML = this.data.Cooldown + 's';
    $('.hotkey', this)[0].innerHTML = this.data.Hotkey;
    this.hotkey = this.data.Hotkey;
  }

  this.click = function(e) {
    ospokemon.ui.HoverControl(this.hotkey);
  }

  $(this).click(this.click)
});