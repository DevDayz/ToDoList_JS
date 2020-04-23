const API_KEYS = "27fb6a66ff053d492de1d90bb283f970";
const COORDS = "coords";

const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}
  `)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp}'c ${place}`;
    });
}
function saveCoords(coordObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordObj));
}
function handleGeoSucess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant handle geo location");
}
function askCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}
function init() {
  loadCoords();
}

init();
