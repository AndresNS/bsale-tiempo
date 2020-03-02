"use strict";

const btn = document.getElementById("consultar");
const ciudadInput = document.getElementById("ciudad");

btn.addEventListener("click", function(event){
    let ciudad = ciudadInput.value;
    obtenerClima(ciudad);
});

function obtenerClima(ciudad) {

    const apikey = "1bf02ff4c54a03d62349710de59d9fe1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&lang=es`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (content) {
            console.log(content);

            const icon = document.getElementById("hi");
            icon.src = `http://openweathermap.org/img/wn/${content.weather[0].icon}@2x.png`;
        });
}