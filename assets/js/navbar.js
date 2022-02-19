$(document).ready(() => {

    const navbar = $(".navbar-container");
    const navbarCloseBtn = $(".res-navbar-close-btn");
    const navbarHamburgerBtn = $(".hamburger-btn");

    navbarHamburgerBtn.click(() => {
        navbar.css("right", "0");
    });

    navbarCloseBtn.click(() => {
        navbar.css("right", "-500px");
    })


})