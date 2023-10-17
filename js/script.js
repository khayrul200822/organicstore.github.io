
//get element
const search_bar_icon = document.getElementById("search_icon");
const mobile_search_bar = document.querySelector(".mobile_search");
const desktop_search_icon = document.getElementById("desktop_search_icon");
const desktop_close_icon = document.getElementById("dstp_close_btn");
const desktop_search_bar = document.querySelector(".dstp_search_bar");
const product_item = document.getElementById("product_item");
const product_item_message = document.querySelector(".product_msg");


//desktop search bar toggle function
function toggleSearchBar(displayValue, opacityValue) {
  desktop_search_bar.style.display = displayValue;
  desktop_search_bar.style.opacity = opacityValue;
}

desktop_search_icon.addEventListener("click", () => {
  toggleSearchBar("flex", "1");
});

desktop_close_icon.addEventListener("click", () => {
  toggleSearchBar("none", "0");
});





//product item message function here
let product_item_visible = false;


product_item.addEventListener("mouseover", () => {
  if (product_item_visible) {
    product_item_message.style.transform = "translate(0px, 30%)";
    product_item_message.style.opacity = "0";
   
  } else {
    product_item_message.style.transition = "transform 0.3s, opacity 0.3s"; // Add a transition property
    product_item_message.style.transform = "translate(0px, 0px)";
    product_item_message.style.opacity = "1";
    product_item_message.style.display = "unset";
  }

  product_item_visible = !product_item_visible;
})

product_item.addEventListener("mouseout", () => {
  if (product_item_visible) {
    product_item_message.style.transition = "transform 0.3s, opacity 0.3s"; // Add a transition property
    product_item_message.style.transform = "translate(0px, 30%)";
    product_item_message.style.opacity = "0";
  }
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




// mobile animated menubar icon
document.addEventListener('DOMContentLoaded', function() {
    var thirdButton = document.querySelector('.third-button');
    var animatedIcon = document.querySelector('.nav_animated_icon');

    thirdButton.addEventListener('click', function() {
        animatedIcon.classList.toggle('open');
    });
});



//****************owl carousel script**********
 //owl carousel script
 $(document).ready(function () {

  $("#owl_slider").owlCarousel({

      slideSpeed: 300,
      paginationSpeed: 400,
      items: 1,
      itemsDesktop: false,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false

  });

});



