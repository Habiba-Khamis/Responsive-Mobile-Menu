// Grab DOM elements
const menuButton = document.getElementById("menu-btn");
const closeButton = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu-container");

// Add event listeners
menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

// Functions 
function openMenu() {
    mobileMenu.classList.add("is-open");
    menuButton.style.display = "none";
}

function closeMenu() {
    mobileMenu.classList.remove("is-open");
    menuButton.style.display = "flex";
}