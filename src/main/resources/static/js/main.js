// TOP MENU SEARCH METHOD
var searchEl = document.querySelector('.search');
var searchInputEl = searchEl.querySelector('input');
var middleBoxEl = document.querySelector('#middle-box');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    middleBoxEl.classList.add('search-focused');
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    middleBoxEl.classList.remove('search-focused');
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

// POP UP LOGIN PAGE
var loginBtn = document.querySelector('#login');
var popupPageEl = document.querySelector('#popup');
var closeLoginPageBtn = document.querySelector('.close-login-page-btn');

loginBtn.addEventListener('click', function() {
    popupPageEl.classList.add('popped');
    closeLoginPageBtn.classList.add('popped');
})

closeLoginPageBtn.addEventListener('click', function() {
    popupPageEl.classList.remove('popped');
    closeLoginPageBtn.classList.remove('popped');
})

