/* Toggle nav on scroll/click */
navContainer = document.querySelector(".nav-container");
navLinks = document.querySelectorAll(".nav-container .nav-link");
navHeight = document.querySelector(".nav-container").clientHeight;
navToggle = document.getElementById("toggle-btn");
navOpened = false;

// onScrollNav = function() {  
//   if (window.pageYOffset > navHeight) {
//     // navContainer.style.transition = "padding .5s ease";
//     // navContainer.style.padding = "1% 5%";    
//     navContainer.style.backgroundColor = "rgba(14, 41, 60, .8)";
//   }
//   else {
//     // navContainer.style.padding = "2% 5%";
//     navContainer.style.opacity = "1";
//     navContainer.style.backgroundColor = "rgb(14, 41, 60)";
//   }  
// }

onClickNav = function() {  
  if(!navOpened) {   
    navLinks.forEach(navLink => {
      navLink.style.position = "relative"; 
      navLink.style.opacity = 1;     
      navLink.style.transition = "opacity .25s ease";
    });
    navToggle.innerHTML = "<i class='fas fa-angle-right'></i>";
  }
  else {
    navLinks.forEach(navLink => {
      navLink.style.position = "absolute";
      navLink.style.opacity = 0; 
      navLink.style.transition = "opacity 0s ease"; 
    });    
    navToggle.innerHTML = "<i class='fas fa-bars'></i>";
  }
  navOpened = !navOpened
}

// window.addEventListener("scroll", onScrollNav);
navToggle.addEventListener("click", onClickNav)

/* Scroll to anchor */
anchors = document.querySelectorAll(".anchor");
anchors.forEach(anchor => {
  anchor.style.display = "inline-block";
  anchor.style.position = "relative";
  anchor.style.top = `-${navHeight + 30}px`;
});
