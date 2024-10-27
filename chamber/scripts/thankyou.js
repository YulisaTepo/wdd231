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