Reckoner.provide('ospokemon-action-bar-button', function(actionbar) {
  this.actionbar = actionbar;
  
  this.update = function(ability) {
    this.data = ability;
    $(this).children('.name')[0].innerHTML = this.data.Name;
  }
});