let editor = document.body.getElementsByClassName('editor');
let laptop = document.body.getElementsByClassName('laptop');
let menu = document.getElementById("menu-button");
let navOpen = false;
let hamMenu = document.getElementsByClassName("ham-menu");

console.log(hamMenu);

function openNav(){
    navOpen = !navOpen;
    if (navOpen === true){
        menu.src = "./images/icon-close.svg";
        hamMenu[0].style.transform = "scaleY(1)";
    }
    else{
        hamMenu[0].style.transform = "scaleY(0)";
        menu.src = "./images/icon-hamburger.svg";
    }
    console.log(navOpen);
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        editor[0].src = "./images/illustration-editor-desktop.svg";
        laptop[0].src = "./images/illustration-laptop-desktop.svg";
    } else {
        editor[0].src = "./images/illustration-editor-mobile.svg";
        laptop[0].src = "./images/illustration-laptop-mobile.svg";
    }
  }
  
var x = window.matchMedia("(min-width: 1000px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes

menu.addEventListener("click", () => openNav());