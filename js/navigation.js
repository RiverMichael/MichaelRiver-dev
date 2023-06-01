const hamburgerMenuButton = document.querySelector("#hamburger-icon");
const closeMenuButton = document.querySelector("#close-menu__icon");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

hamburgerMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu)
window.addEventListener("scroll", handleScroll);


// Toggle Navigation
function openMenu() {
    nav.classList.add("display-nav");
    hamburgerMenuButton.style.opacity = 0;
};

function closeMenu() {
    nav.classList.remove("display-nav");
    hamburgerMenuButton.style.opacity = 1;
};


// Header on Scroll
function handleScroll() {
    if (scrollY > 100) {
        header.style.opacity = 0.9;
    } else {
        header.style.opacity = 1;
    }
};
