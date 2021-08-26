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

// OPEN & CLOSE SIDE MENU BAR
var menuOpenBtn = document.querySelector('#menu-open-btn');
var sideBarEl = document.querySelector('.menu-bar');
var menuCloseBtn = document.querySelector('#menu-close-btn');
var topMenuEl = document.querySelector('#top-menu');
var visualEl = document.querySelector('#visual');
var secondBoxEl = document.querySelector('#second-box');

menuOpenBtn.addEventListener('click', function() {
        sideBarEl.classList.add('focused');
        topMenuEl.classList.add('focused');
        visualEl.classList.add('side-menu-open');
        secondBoxEl.classList.add('side-menu-open');
})

menuCloseBtn.addEventListener('click', function() {
    sideBarEl.classList.remove('focused');
    topMenuEl.classList.remove('focused');
    visualEl.classList.remove('side-menu-open');
    secondBoxEl.classList.remove('side-menu-open');
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

// visual HIDDEN Btn

var visualEl = document.querySelector('#visual');
var visualHiddenBtn = document.querySelector('#visual-hidden-btn');

visualHiddenBtn.addEventListener('click', function() {
    visualEl.classList.add('close-visual');
    secondBoxEl.classList.add('close-visual');
})

// recent posts slide hidden

var recentPostsEl = document.querySelector('#recent-posts');

window.addEventListener('scroll', _.throttle(function() {

    if (window.scrollY < 250 && !secondBoxEl.classList.contains('close-visual')) {
        gsap.to(recentPostsEl, .6, {
            opacity: 0,
            display: 'none',
            left: '-150px'
        })
    } else {
        gsap.to(recentPostsEl, .6, {
            opacity: 1,
            display: 'block',
            left: '0'
        })
    }
}, 300));


// BOARD TITLE CLICK OPEN CONTENT

var boardTitleEl = document.querySelector('#board-title');
var boardContentEl = document.querySelector('#board-content')

boardTitleEl.addEventListener('click', function() {
    gsap.to(boardContentEl, 0, {
        display: 'flex'
    })
})


