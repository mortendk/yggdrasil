(function() {
  window.onload = function() {
    var body = document.body;
    var wrapper = document.getElementsByClassName('singularityhelper')[0];
    body.onkeypress = function(e) {
      if (e.keyCode == 103 || e.charCode == 103) {
        var dev = wrapper.getAttribute('data-development-grid');
        if (dev === null || dev == 'hide') {
          wrapper.setAttribute('data-development-grid', 'show');
        }
        else {
          wrapper.setAttribute('data-development-grid', 'hide');
        }
      }
    }
  }
})();
