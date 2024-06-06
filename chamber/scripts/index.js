const currentWeather = document.querySelector('#current-weather');
const forecast = document.querySelector('#forecast');

const apiKey = "be422bc81b3d81be22564640615930d7";
const latitude = "-2.02";
const longitude = "-79.89";

const url_current_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
const url_forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


async function getCurrentWeather() {
    try {
        const response = await fetch(url_current_weather);
        const data = await response.json();

        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        weatherIcon.setAttribute("alt", "Current weather icon");

        currentWeather.innerHTML = `
            <h3>Current Weather</h3>
            <img id=${iconsrc} alt="Current weather icon">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(url_forecast);
        const data = await response.json();
        forecast.innerHTML = `
            <h3>Three-Day Forecast</h3>
            <p>Day 1: ${data.list[0].main.temp}°C</p>
            <p>Day 2: ${data.list[1].main.temp}°C</p>
            <p>Day 3: ${data.list[2].main.temp}°C</p>
        `;
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

getCurrentWeather();
getForecast();






