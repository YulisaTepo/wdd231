const businessUrl = "data/members.json"
const businesHolder = document.querySelector(".displayBusiness");

async function fecthBusiness() {
    try {
        const response = await fetch(businessUrl);
        if (response.ok) {
            const businessData = await response.json();
            console.log(businessData.business);

            //ESTA FUNCTION AUN NO FUNCION
            displayBusiness(businessData.business);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
fecthBusiness();

function createBusiness(busines) {
    const businesCard = document.createElement("div");
    const title = document.createElement("h2");
    const image = document.createElement("img");
    const phone = document.createElement("p");
    const address = document.createElement("p");
    const website = document.createElement("a");
    const membership = document.createElement("p");

    image.setAttribute("src", busines.image);
    image.setAttribute("alt", "{busines.name} image");
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "250px");
    image.setAttribute("height", "180px");
    title.textContent = busines.name;
    address.textContent = busines.address;
    phone.textContent = busines.phone_num;
    website.href = busines.website_url;
    website.textContent = "Visite Web Site";
    website.target = "_blank";
    membership.textContent = `Membership Level: ${busines.membership_level}`;


    businesCard.appendChild(image);
    businesCard.appendChild(title);
    businesCard.appendChild(address);
    businesCard.appendChild(phone);
    businesCard.appendChild(website);
    businesHolder.appendChild(businesCard);
    console.log(busines);
}

function selectBusines(businessArray) {
    const goodMembership = businessArray.filter(busines => busines.membership_level === "Gold" || busines.membership_level === "Silver")
    const randomBusines = goodMembership.sort(() => 0.5 - Math.random());
    return randomBusines.slice(0, 3);
}

function displayBusiness(businessData) {

    const randomSelected = selectBusines(businessData);
    randomSelected.forEach(busines => {
        createBusiness(busines);
    });
}