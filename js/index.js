"use strict";

const btn = document.getElementById("btn-search");
const cityInput = document.getElementById("city-input");

window.onload = function () {
    getWeather("santiago");
    generateWindows();
};

btn.addEventListener("click", function (event) {
    let city = cityInput.value;
    getWeather(city);
});


/* FUNCTIONS */

function getWeather(city) {

    const apikey = "1bf02ff4c54a03d62349710de59d9fe1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=es`;

    const datetime = document.getElementById("datetime");
    const cityName = document.getElementById("city-name");
    const icon = document.getElementById("weather-icon");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("weather-desc");

    fetch(url)
        .then(response => {
            return response.json();

        })
        .then(content => {
            datetime.textContent = formatDate(new Date());
            cityName.textContent = content.name;
            icon.src = `http://openweathermap.org/img/wn/${content.weather[0].icon}@2x.png`;
            temperature.innerHTML = KtoC(content.main.temp) + "<span class='degrees'>°</span>";
            description.textContent = content.weather[0].description;
        }).catch(e => {
            console.error(e);
            alert("La ciudad ingresada no es válida. Intente nuevamente.");

            datetime.textContent = "Ingrese un nombre de ciudad válido por favor.";
            cityName.textContent = "";
            icon.src = "";
            temperature.textContent = "";
            description.textContent = "";

        });
}

function KtoC(temp) {
    return Math.round(temp - 273.15);
}

function formatDate(date) {
    let days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    let dayNumber = date.getDate();
    let dayName = days[date.getDay() - 1];
    let month = months[date.getMonth()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${dayName} ${dayNumber} de ${month}, ${hours}:${minutes}`;
}

function generateWindows() {
    let buildings = document.getElementsByClassName("city-bg__building");
    for (let building of buildings) {
        for (let i = 0; i < 100; i++) {
            building.innerHTML += "&#x25A0; ";
        }
    }
}