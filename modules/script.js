const weatherInfoElement = document.getElementById('weatherInfo');
const locationInputElement = document.getElementById('locationInput');

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88676267acbf625addc2fd78c7960a55&units=metric`);
        const weatherData = await response.json();

        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        const weatherInfo = `City: ${cityName}<br>Temperature: ${temperature}°C<br>Description: ${description}`;
        weatherInfoElement.innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoElement.innerHTML = 'Error fetching weather data. Please try again.';
    }
}

function updateWeather() {
    const location = locationInputElement.value;
    if (location) {
        getWeather(location);
    } else {
        weatherInfoElement.innerHTML = 'Please enter a location.';
    }
}

