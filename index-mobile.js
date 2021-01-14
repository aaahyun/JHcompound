var HAMBURGER = document.querySelector('#hamburger');
var MENU = document.querySelector('.menu');
var CLOSS_BTN = document.querySelector('.close-btn');

HAMBURGER.addEventListener('click', function() {
    MENU.classList.remove('push-out');
    CLOSS_BTN.classList.remove('hidden')
});

CLOSS_BTN.addEventListener('click', function() {
    MENU.classList.add('push-out');
    CLOSS_BTN.classList.add('hidden');
});
