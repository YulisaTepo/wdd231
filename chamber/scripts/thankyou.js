function displayFormData() {
    const form = document.querySelector('#userForm');
    const displayDiv = document.querySelector('.formInfo');

    // Initialize an empty array to hold the required field data
    const requiredData = [];

    // Loop through form elements
    for (let element of form.elements) {
        // Check if the field is required and has a value
        if (element.required && element.value) {
            requiredData.push(`${element.name}: ${element.value}`);
        }
    }

    // Display the form data
    displayDiv.innerHTML = `<h3>Submitted Data:</h3><p>${requiredData.join('<br>')}</p>`;
}

const hamburgerElement = document.querySelector("#hamburgerButton");
const navElement = document.querySelector(".nav-menu");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
})

/*This gets the year only*/
document.querySelector("#currentyear").textContent = new Date().getFullYear();
/* This display the last modification*/
document.querySelector("#lastModified").textContent = document.lastModified;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})