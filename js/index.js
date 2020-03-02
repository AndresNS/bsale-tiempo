"use strict";

obtenerClima("Santiago");

function obtenerClima(ciudad) {

    const apikey = "1bf02ff4c54a03d62349710de59d9fe1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&lang=es`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (content) {
            console.log(content);
        });
}