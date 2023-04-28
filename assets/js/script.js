console.log("hello")
// api key
var key = "e825520c7596bf10aa063083888a38d5"

var inputEl = document.querySelector(".input");
var searchBtn = document.querySelector(".search-btn");
var citiesListEl = document.querySelector(".cities-list");


var cityName = localStorage.getItem("cityNameStored");
var urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid= + cityName + '&units=imperial'+ e825520c7596bf10aa063083888a38d5";
var urlForecast = "http://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=1&appid= + cityName + '&units=imperial'+ e825520c7596bf10aa063083888a38d5";

// sets input value in local storage
function recordCityData() {
    localStorage.setItem("cityNameStored", inputEl.value);
}

//append search input from local storage to cities list
for (var i = 0; i < localStorage.length; i++) {
    $(".cities-list").append("<p>" + localStorage.getitem(localStorage.Key(i)) + "</p>");
    
}

$.ajax  ({
    URL: weather,
    method: "GET"
})

    .then(function(response){
        // adds weather infomation to webpage
        $(".city").html("<h2>" + response.name + "</h2>");
        $(".weather-icon").html("img src='https://openweather.org/img/w/" + response.weather[0].icon +  ".png' >");
        $(".wind").text("Wind speed: "+ response.wind.speed + "MPH");
        $(".weather-icon").html("img src='# + response.weather[0].icon + .png'>");
        $(".temperature-icon").html("img src='# + response.weather[0].icon + .png'>");

        var lat = response.coord.lat;
        var lon = response.coord.lon
        var queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "e825520c7596bf10aa063083888a38d5"

})

    .then(function(response){
        var dayOne = moment(response.list[0].dt_txt).format("ddd, MM D");
        
        //adds day one - day five data to webpage
        $("day-one-temperature").text("Temp: " +response.list [0].main.temp + " F");
        $(".day-one-date").html("<h6>" + dayOne + "</h6>");
        $(".day-one-icon").html("<img src= #")
        $(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");
    

    var daytwo = moment(response.list[8].dt_txt).format("ddd, MM D");

        $("day-two-temperature").text("Temp: " +response.list [8].main.temp + " F");
        $(".day-two-date").html("<h6>" + dayOne + "</h6>");
        $(".day-two-icon").html("<img src= #")
        $(".day-two-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

        var dayThree = moment(response.list[16].dt_txt).format("ddd, MM D");

        $("day-one-temperature").text("Temp: " +response.list [16].main.temp + " F");
        $(".day-three-date").html("<h6>" + dayOne + "</h6>");
        $(".day-three-icon").html("<img src= #")
        $(".day-three-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

        var dayFour = moment(response.list[24].dt_txt).format("ddd, MM D");

        $("day-four-temperature").text("Temp: " +response.list [24].main.temp + " F");
        $(".day-four-date").html("<h6>" + dayOne + "</h6>");
        $(".day-four-icon").html("<img src= #")
        $(".day-four-humidity").text("Humidity: " + response.list[24].main.humidity + "%");

        var dayFive = moment(response.list[32].dt_txt).format("ddd, MM D");

        $("day-one-temperature").text("Temp: " +response.list [32].main.temp + " F");
        $(".day-one-date").html("<h6>" + dayOne + "</h6>");
        $(".day-one-icon").html("<img src= #")
        $(".day-one-humidity").text("Humidity: " + response.list[32].main.humidity + "%");

})



