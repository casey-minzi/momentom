const weather = document.querySelector('.js-weather');

const COORDS = 'coords';
const API_KEY = 'd659975cd487bfeaa275546a8bfd1923';

function saveCoords(coords) {
    localStorage.setItem(COORDS, JSON.stringify(coords));
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(json => {
            const temp = Math.round(json.main.temp);
            const place = json.name;
            const country = json.sys.country;
            weather.innerText = `${temp}℃ @ ${place}, ${country}`;
        });
}

function handleGeoSuccess(position) {
    const { latitude, longitude } = position.coords;
    const coordsObj = { latitude, longitude };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Location not allowed');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadWeather() {
    const loadedCoords = JSON.parse(localStorage.getItem(COORDS));
    loadedCoords ?
        getWeather(loadedCoords.latitude, loadedCoords.longitude) :
        askForCoords();
}

function init() {
    loadWeather();
}

init();