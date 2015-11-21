$(function() {
  if (window.location.search == '?invalid') {
    $("#invalidLogin").slideDown('slow', function() {
      window.setTimeout(function() {
        $("#invalidLogin").slideUp('slow', function() {
          $("#invalidLogin").alert('close');
        });
      }, 2000);
    });
  }
});
