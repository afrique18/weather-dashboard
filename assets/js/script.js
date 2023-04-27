console.log("hello")
var key = "e825520c7596bf10aa063083888a38d5"

var inputEl = document.querySelector(".input");
var searchBtn = document.querySelector(".search-btn");
var citiesListEl = document.querySelector(".cities-list");

var cityName = localStorage.getItem("cityNameStored");
var urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid= + cityName + '&units=imperial'+ e825520c7596bf10aa063083888a38d5";
var urlForecast = "http://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=1&appid= + cityName + '&units=imperial'+ e825520c7596bf10aa063083888a38d5";

function recordCityData(params) {
    localStorage.setItem("cityNameStored", inputEl.value);
}

for (var i = 0; i < localStorage.length; i++) {
    $(".cities-list").append("<p>" + localStorage.getitem(localStorage.Key(i)) + "</p>");
    
}

$.ajax  ({
    URL: weather,
    method: "GET"
})

.then(function(response){
    $(".city").html("<h2>" + response.name + "</h2>");
    $(".weather-icon").html("img src='# + response.weather[0].icon + .png'>");
    $(".wind").text("Wind speed: "+ response.wind.speed + "MPH");
    $(".weather-icon").html("img src='# + response.weather[0].icon + .png'>");
    $(".weather-icon").html("img src='# + response.weather[0].icon + .png'>");




})