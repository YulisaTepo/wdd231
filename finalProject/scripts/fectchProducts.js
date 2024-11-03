const productsUrl = "data/products.json"
const productsSection = document.querySelector(".productsGrid");

async function fecthProducts() {
    try {
        const response = await fetch(productsUrl);
        if (response.ok) {
            const productsData = await response.json();
            console.log(productsData.products);

            createItems(productsData.products);

        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
fecthProducts();


// Function to create items and modals
function createItems(data) {
    const container = document.querySelector(".productsGrid");
    container.innerHTML = ""; //Clear
    data.forEach(item => {
        // Create item element
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="100" height="100" loading="lazy">

        <h2>${item.name}</h2>

        <button id="openModal${item.id}" class="open-modal-btn">View Details</button>
      `;

        // Append item to container
        container.appendChild(itemElement);

        // Create modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.id = `modal${item.id}`;
        modal.innerHTML = `
        <div class="modal-content">
          <span class="close" id="closeModal${item.id}">&times;</span>
          <h2>${item.name}</h2>
          <p>CLP $${item.unit_cost}</p>
          <p>According to season: <strong>${(item.type).toUpperCase()}</strong></p>

        </div>
      `;

        // Append modal to container
        document.body.appendChild(modal);

        // Event listeners for opening and closing modal
        document.getElementById(`openModal${item.id}`).addEventListener("click", () => {
            modal.style.display = "block";
        });

        document.getElementById(`closeModal${item.id}`).addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close modal if user clicks outside modal content
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
}




