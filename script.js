const apiKey = "01a6e420ca9aa48f496994a03afb52d0"; // Replace with your API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `🌡️ ${data.main.temp}°C`;
        description.textContent = `☁️ ${data.weather[0].description}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherInfo.classList.remove("hidden");
    } catch (error) {
        alert(error.message);
    }
}
