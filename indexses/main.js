function showDropdown() {
    document.getElementById("dropdown-options").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var mac = document.getElementsByClassName("dropdown-content");
      for (var m = 0; i < mac.length; i++) {
        var open = mac[m];
        if (open.classList.contains('show')) {
          open.classList.remove('show');
        }
      }
    }
  }
  

  
  function   SecondFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtl')) {
      var mac = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < mac.length; i++) {
        var open = mac[i];
        if (open.classList.contains('show')) {
          open.classList.remove('');
        }
      }
    }
  }

  // Get the button and dropdown content elements
const dropdownBtn = document.querySelector('.dropdown-btn');
const Content = document.querySelector('.dropdown-content');

// Add a click event listener to the button
dropdownBtn.addEventListener('click', function() {
  // Toggle the "show" class on the dropdown content element
  Content.classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    Content.classList.remove('show');
  }
});

