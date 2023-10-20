
//get element
const search_bar_icon = document.getElementById("search_icon");
const mobile_search_bar = document.querySelector(".mobile_search");
const desktop_search_icon = document.getElementById("desktop_search_icon");
const desktop_close_icon = document.getElementById("dstp_close_btn");
const desktop_search_bar = document.querySelector(".dstp_search_bar");
const product_item = document.getElementById("product_item");
const product_item_message = document.querySelector(".product_msg");
const product_group = document.querySelectorAll(".p_group");
const product_title = document.querySelectorAll(".p_title");
const single_slider_box = document.querySelector(".single_slider");


 //text moving with mouse 
// single_slider_box.addEventListener("mouseover", () => {
//   document.addEventListener("mousemove", parallax);
// })


// function parallax (e) {
//   product_title.forEach(function(move) {
   
//     let x = e.clientX *.2
//     let y = e.clientY *.2
//     if(x < 100 && y < 100){
//         move.style.transform = `translate(${x}px, ${y}px)`;
//     }else{
//       move.style.transform = `translate(0px, 0px)`;
//     }
 
  
    
//   })
// }







//desktop search bar toggle function
function toggleSearchBar(displayValue, opacityValue) {
  desktop_search_bar.style.display = displayValue;
  desktop_search_bar.style.opacity = opacityValue;
}
desktop_search_bar.addEventListener('scroll', function(event) {
  event.preventDefault();
});
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
    mobile_search_bar.style.visibility = "hidden";
  } else {
    mobile_search_bar.style.display = "unset";
    setTimeout(() => {
      mobile_search_bar.style.visibility = "visible";
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

// product section button script here
let previousButton = product_group[0]; // Set the first button as default active

previousButton.style.color = "#88B813"; // Set the default color

for (let i = 0; i < 5; i++) {
  product_group[i].addEventListener("click", () => {
    // Reset color of previous button
    if (previousButton !== product_group[i]) {
      previousButton.style.color = "";
    }

    // Set color of current button
    product_group[i].style.color = "#88B813";

    // Update previous button reference
    previousButton = product_group[i];

  });
}

//****************owl carousel script**********
 //owl carousel script
 $(document).ready(function () {

  $(".owl-carousel").owlCarousel({

      slideSpeed: 300,
      paginationSpeed: 400,
      items: 1,
      dots: false,
      nav:true,
      loop: true, 
       itemsDesktop: false,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false,// Enable loop mode
    // autoplay: true, // Enable auto play
    // autoplayTimeout: 3000, // Set the time interval (1 second in this case)
    // autoplayHoverPause: true,
    // animateOut: "fadeOut",
    // animateIn: "fadeIn",
  
   
   
     
    
  });

});




//Mixitup plugin call
var mixer = mixitup('.product_slider');







