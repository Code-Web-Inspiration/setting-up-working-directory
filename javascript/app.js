"use strict";


// JAVASCRIP FILE

const navBar = document.querySelector('#header-nav-bar')
const navbarHeight = navBar.offsetHeight
const menuButton = document.querySelector('#menu-button')

const handleScrollY = function () {
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
}

function navbarStiky() {
    navBar.classList.toggle('stiky', window.scrollY && handleScrollY() > navbarHeight)
}

window.onload = () => {}