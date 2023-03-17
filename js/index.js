function myFunction() {
  const x = document.querySelector(".dropdown-content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-list');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');


}


function updateTime() {
  var now = new Date();
  var time = now.toLocaleTimeString();
  document.getElementById('time').innerHTML = time;
}
setInterval(updateTime, 1000);


// Get the button
var btn = document.getElementById("scroll-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
btn.onclick = function() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*  */

