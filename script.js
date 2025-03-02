const apiKey = "ee63b89f6ecbc38546d506d8f497a1a5"; // O'zingizning API kalitingizni bu yerga kiriting
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status === 404) {
        alert("City not found!");
        return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "% <br><span>Humidity</span>";
    document.getElementById("wind-speed").innerHTML = data.wind.speed + " km/h <br><span>Wind Speed</span>";

    // Ob-havo ikonlarini almashtirish
    const weatherMain = data.weather[0].main;
    if (weatherMain === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    } else if (weatherMain === "Clear") {
        weatherIcon.src = "./images/clear.png";
    } else if (weatherMain === "Rain") {
        weatherIcon.src = "./images/rain.png";
    } else if (weatherMain === "Snow") {
        weatherIcon.src = "./images/snow.png";
    } else if (weatherMain === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    } else if (weatherMain === "Mist") {
        weatherIcon.src = "./images/mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});



