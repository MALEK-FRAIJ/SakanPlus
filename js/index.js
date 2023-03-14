function myFunction() {
    const x = document.querySelector(".dropdown-content");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
  }


let menu =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-list');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');


}