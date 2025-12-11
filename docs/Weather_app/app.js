  const apiKey = `e39948133ecbfbcbe37a8d59ce38cd6a`;
const cityInput = document.getElementById('city');
const weatherInfo = document.querySelector('.weather-info');

cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = cityInput.value.trim();
    if (city) getWeatherData(city);
  }
});

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayWeatherData(data))
    .catch(err => {
      weatherInfo.innerHTML = `<p>City not found or API error.</p>`;
      console.error(err);
    });
}

function displayWeatherData(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  const { description } = data.weather[0];

  weatherInfo.innerHTML = `
    <h2 id="city-name">${name}</h2>
    <p id="temperature">Temperature: ${temp}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${speed} m/s</p>
    <p>Description: ${description}</p>
  `;
}

let def = getWeatherData('Mumbai');
displayWeatherData(def);