// TOP MENU SEARCH METHOD
var searchEl = document.querySelector('.search');
var searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
})

var menuOpenBtn = document.querySelector('#menu-open-btn');
var sideBarEl = document.querySelector('.menu-bar');
var menuCloseBtn = document.querySelector('#menu-close-btn');
var topMenuEl = document.querySelector('#top-menu');

menuOpenBtn.addEventListener('click', function() {
    sideBarEl.classList.add('focused');
    topMenuEl.classList.add('focused');
})

menuCloseBtn.addEventListener('click', function() {
    sideBarEl.classList.remove('focused');
    topMenuEl.classList.remove('focused');
})