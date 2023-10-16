document.addEventListener('DOMContentLoaded', function() {
    var thirdButton = document.querySelector('.third-button');
    var animatedIcon = document.querySelector('.nav_animated_icon');
    console.log(thirdButton)

    thirdButton.addEventListener('click', function() {
        animatedIcon.classList.toggle('open');
    });
});