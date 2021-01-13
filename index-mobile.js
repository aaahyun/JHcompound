var HAMBURGER = document.querySelector('#hamburger');
var MENU = document.querySelector('.menu');
var CLOSS_BTN = document.querySelector('.close-btn');

HAMBURGER.addEventListener('click', function() {
    MENU.classList.toggle('hidden');
    CLOSS_BTN.classList.toggle('hidden-btn');
};

