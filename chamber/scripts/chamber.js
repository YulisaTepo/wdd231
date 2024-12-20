//fetch data from the json file 
//async or await funtion
const hamburgerElement = document.querySelector("#hamburgerButton");
const navElement = document.querySelector(".nav-menu");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
})

const url = "data/members.json"
const section = document.querySelector(".grid");

//GRID AND LIST BUTTON 
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");

});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");

});


async function getDirectory(url) {
    const response = await fetch(url);
    const data = await response.json();
    /*     catch(error)
     */
    displayDirectory(data.business);

}
getDirectory(url)

const displayDirectory = (business) => {
    business.forEach(busines => {
        let box = document.createElement("section");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let link = document.createElement("a");
        
        img.setAttribute("src", busines.image);
        img.setAttribute("alt", "{busines.name} image");
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "250px");
        img.setAttribute("height", "180px");
        name.textContent = busines.name;
        address.textContent = busines.address;
        phone.textContent = busines.phone_num;
        link.href = busines.website_url;
        link.textContent = "Visite Web Site";
        link.target = "_blank";


        box.appendChild(img);
        box.appendChild(name);
        box.appendChild(address);
        box.appendChild(phone);
        box.appendChild(link);
        section.appendChild(box);

    });
}
