const hamburgerMenuButton = document.querySelector("#hamburger-icon");
const closeMenuButton = document.querySelector("#close-menu__icon");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

const navHome = document.querySelector("#link-home");
const navAbout = document.querySelector("#link-about");
const navSkills = document.querySelector("#link-skills");
const navPortfolio = document.querySelector("#link-portfolio");
const navContact = document.querySelector("#link-contact");

const introSection = document.querySelector("#intro");
const aboutSection = document.querySelector("#about");
const skillsSection = document.querySelector("#skills");
const portfolioSection = document.querySelector("#portfolio");
const contactSection = document.querySelector("#contact");

const headerHeight = header.offsetHeight;

hamburgerMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu)
window.addEventListener("scroll", handleNavOnScroll);


// Toggle Navigation
function openMenu() {
    nav.classList.add("display-nav");
    hamburgerMenuButton.style.opacity = 0;
};

function closeMenu() {
    nav.classList.remove("display-nav");
    hamburgerMenuButton.style.opacity = 1;
};


// Nav on Scroll
function handleNavOnScroll() {
    if (scrollY <= aboutSection.offsetTop - headerHeight) {
        navHome.classList.add("active");
    } else {
        navHome.classList.remove("active");
    };

    if (scrollY < aboutSection.offsetTop - headerHeight || scrollY > aboutSection.offsetTop + aboutSection.offsetHeight - headerHeight) {
        navAbout.classList.remove("active");
    } else if (scrollY >= aboutSection.offsetTop - headerHeight)  {
        navAbout.classList.add("active");
    };

    if (scrollY < skillsSection.offsetTop - headerHeight || scrollY > skillsSection.offsetTop + skillsSection.offsetHeight - headerHeight) {
        navSkills.classList.remove("active");
    } else if ( scrollY >= skillsSection.offsetTop - headerHeight) {
        navSkills.classList.add("active");
    };

    if (scrollY < portfolioSection.offsetTop - headerHeight || scrollY > portfolioSection.offsetTop + portfolioSection.offsetHeight - headerHeight) {
        navPortfolio.classList.remove("active");
    } else if ( scrollY >= portfolioSection.offsetTop - headerHeight) {
        navPortfolio.classList.add("active");
    };

    if (scrollY < contactSection.offsetTop - headerHeight || scrollY > contactSection.offsetTop + contactSection.offsetHeight - headerHeight) {
        navContact.classList.remove("active");
    } else if ( scrollY >= contactSection.offsetTop - headerHeight) {
        navContact.classList.add("active");
    };
};
