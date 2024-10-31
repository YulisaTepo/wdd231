const town = document.querySelector("#town");
const description = document.querySelector("#description");
const tempt = document.querySelector("#temperature");
/* const high = document.querySelector("#high");
const low = document.querySelector("#low"); */
const humidity = document.querySelector("#humidity");
const graphic = document.querySelector("#graphic");

const key = "e28c6f0f5f364a6b3930d128c08bccb1";
const lat = "-33.42874554214993";
const long = "-70.64412211028502";

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;

/* Enlace para el forecast */
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`
const time = new Date();
const day = time.getDay();

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

async function fecthWeather() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
fecthWeather();
function displayResults(data) {
    town.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    tempt.innerHTML = `${parseFloat(data.main.temp).toFixed(0)}°C`;
    const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    graphic.setAttribute("src", iconSRC);
    graphic.setAttribute("alr", data.weather[0].description);
    graphic.setAttribute("width", "100")
    graphic.setAttribute("hight", "100")
    humidity.innerHTML = `Humidity: ${data.main.humidity}&deg`;

}

async function fecthForecast() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const dataForecast = await response.json();

            displayForecast(dataForecast);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
fecthForecast();

/* Función en flecha */
const displayForecast = (dataForecast) => {
    const weatherForecast = document.querySelector("#holderForecast");
    weatherForecast.innerHTML = "";
    weatherForecast.innerHTML = `
        <p id="day-1">${week[(day + 1) % 7]}: <span id="temp-1"></span></p>
        <p id="day-2">${week[(day + 2) % 7]}: <span id="temp-2"></span></p>
        <p id="day-3">${week[(day + 3) % 7]}: <span id="temp-3"></span></p> 
    `;
    const forecastTemperature = dataForecast.list.slice(0, 3);

    forecastTemperature.forEach((dailyData, index) => {
        document.getElementById(`temp-${index + 1}`).textContent = `${parseFloat(dailyData.main.temp).toFixed(0)}°C`;
    });
}

// spotlights

const businessUrl = "data/members.json"
const businesHolder = document.querySelector(".displayBusiness");

async function fecthBusiness() {
    try {
        const response = await fetch(businessUrl);
        if (response.ok) {
            const businessData = await response.json();
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
    businesCard.appendChild(membership);
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

//Date.js
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


//Last visit
const sidebar = document.getElementById('sideBar');

    // Get the last visit date from localStorage
    const lastVisit = localStorage.getItem('lastVisit');

    // Check if this is the first visit
    if (!lastVisit) {
      // First visit, display welcome message
      sidebar.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      // Calculate the time difference in milliseconds
      const currentTime = Date.now();
      const timeDifference = currentTime - parseInt(lastVisit, 10);
      
      // Convert time difference to days
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (daysDifference < 1) {
        sidebar.textContent = "Back so soon! Awesome!";
      } else {
        const dayText = daysDifference === 1 ? "day" : "days";
        sidebar.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
      }
    }

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', Date.now());


