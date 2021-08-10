/* Toggle nav on scroll/click */
navContainer = document.querySelector(".nav-container");
navLinks = document.querySelector(".nav-container .nav-links")
navHeight = document.querySelector(".nav-container").clientHeight;

onScrollNav = function() {  
  if (window.pageYOffset >= navHeight) {
    navContainer.style.transition = "padding .5s ease";
    navContainer.style.padding = "1% 5%";    
  }
  else {
    navContainer.style.padding = "2% 5%";
  }  
}

onClickNav = function() {

}

window.addEventListener("scroll", onScrollNav);

