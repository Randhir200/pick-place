'use strict';

const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', function () {
    navLinks.classList.toggle('active')
})