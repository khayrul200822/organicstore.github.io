document.addEventListener('DOMContentLoaded', function() {
    var thirdButton = document.querySelector('.third-button');
    var animatedIcon = document.querySelector('.nav_animated_icon');

    thirdButton.addEventListener('click', function() {
        animatedIcon.classList.toggle('open');
    });
});