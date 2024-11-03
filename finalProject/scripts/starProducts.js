const productsUrl = "data/products.json"

async function fecthStarProducts() {
    try {
        const response = await fetch(productsUrl);
        if (response.ok) {
            const productsData = await response.json();
            console.log(productsData.products);

            createProducts(productsData.products);

        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
fecthStarProducts();

const container = document.querySelector(".outstandingProducts")

function createProducts(products) {
    // List of product names to filter
    const desiredProducts = ["Scarves", "Havaianas Slide", "Sun Hat Women"];

    // Filter the products to get only the desired ones
    const filteredProducts = products.filter(product =>
        desiredProducts.includes(product.name)
    ).slice(0, 3); // Get only the first 3 matching products

    filteredProducts.forEach(product => {
        const itemCard = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("h2");

        image.setAttribute("src", product.image);
        image.setAttribute("alt", product.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "250px");
        image.setAttribute("height", "180px");
        title.textContent = product.name;

        itemCard.appendChild(image);
        itemCard.appendChild(title);
        container.appendChild(itemCard);
    });
}





//baaad
/* function selectProducts(productsArray) {
    const starProducts = productsArray.filter(product => product.name === "Havaianas Slide" || product.name === "Sun Hat Women" || product.name === "Scarves")
    return starProducts;
}

function displayProducts(data) {

    const starSelected = selectProducts(data);
    starSelected.forEach(product => {
        createProducts(product);
    });
}
 */