/*This gets the year only*/
document.querySelector("#currentyear").textContent = new Date().getFullYear();
/* This display the last modification*/
document.querySelector("#lastModified").textContent = document.lastModified;


const hamburgerElement = document.querySelector("#hamburgerButton");
const navElement = document.querySelector(".nav-menu");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})