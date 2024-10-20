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
            /* console.log(data); */

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
    /* high.innerHTML = 0;
    low.innerHTML = 0; */
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
    //weatherForecast.appendChild(dataForecast);
    const forecastTemperature = dataForecast.list.slice(0, 3);

    forecastTemperature.forEach((dailyData, index) => {
        document.getElementById(`temp-${index+1}`).textContent = `${parseFloat(dailyData.main.temp).toFixed(0)}°C`;
    });
}



