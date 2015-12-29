(function(unitBar) {
  this.unitBar = unitBar;

  var me = this;
  $(this).click(function() {
    me.unitBar.click(me);
  });

  this.update = function(val) {
    this.data = val;
    $(this).children('.name')[0].innerHTML = this.data.Name;
  }
})