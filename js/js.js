window.addEventListener('scroll', function() {
    
    let offset = window.pageYOffset;

    document.querySelector('.parallax').style.backgroundPositionY = -offset * 0.064 + 'px';
    
});





document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('nav');

    // Function to check if the navbar should have background color
    function toggleNavbarBg() {
        if (window.scrollY > document.getElementById('me').offsetTop - navbar.offsetHeight) {
            navbar.classList.add('nav');
        } else {
            navbar.classList.remove('nav');
        }
    }

    // Call toggleNavbarBg on page load and scroll events
    toggleNavbarBg();
    window.addEventListener('scroll', toggleNavbarBg);
});





document.addEventListener("DOMContentLoaded", function() {
    var imageSelectors = document.querySelectorAll('.slider_nav a');
    var slider = document.querySelector('.slider');
    var images = document.querySelectorAll('.slider img');

    // Calculate the width of each slide
    var slideWidth = images[0].offsetWidth;

    // Iterate through each image selector and add click event listener
    imageSelectors.forEach(function(selector, index) {
        selector.addEventListener('click', function(event) {
            // Prevent default anchor link behavior
            event.preventDefault();

            // Get the index of the clicked image
            var targetIndex = index;

            // Calculate the scroll position to the target image
            var scrollPosition = targetIndex * slideWidth;

            // Smooth scroll to the target position
            slider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
});
