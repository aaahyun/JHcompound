var HAMBURGER = document.querySelector('#hamburger');
var MENU = document.querySelector('.menu');
var CLOSS_BTN = document.querySelector('.close-btn');

HAMBURGER.addEventListener('click', function() {
    MENU.classList.remove('hidden');
    CLOSS_BTN.classList.remove('hidden')
});

CLOSS_BTN.addEventListener('click', function() {
    MENU.classList.add('hidden');
    CLOSS_BTN.classList.add('hidden');
});
