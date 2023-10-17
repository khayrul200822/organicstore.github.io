
//get element
const search_bar_icon = document.getElementById("search_icon");
const mobile_search_bar = document.querySelector(".mobile_search");
const desktop_search_icon = document.getElementById("desktop_search_icon");
const desktop_close_icon = document.getElementById("dstp_close_btn");


//toggle search bar for desktop screen script

desktop_search_icon.addEventListener("click", () => {
  
})







//toggle search bar for mobile screen script
let isMobileSearchVisible = false;

search_bar_icon.addEventListener("click", () => {
  if (isMobileSearchVisible) {
    mobile_search_bar.style.transform = "translate(0px, 30%)";
    mobile_search_bar.style.opacity = "0";
  } else {
    mobile_search_bar.style.display = "unset";
    setTimeout(() => {
       mobile_search_bar.style.transform = "translate(0px, 0px)";
    mobile_search_bar.style.opacity = "1";
    }, 0);
   
  }
  
  isMobileSearchVisible = !isMobileSearchVisible;
});





document.addEventListener('DOMContentLoaded', function() {
    var thirdButton = document.querySelector('.third-button');
    var animatedIcon = document.querySelector('.nav_animated_icon');

    thirdButton.addEventListener('click', function() {
        animatedIcon.classList.toggle('open');
    });
});




