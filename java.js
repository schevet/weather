$(document).ready(function () {
    // console.log($("#searchTermLabel").val());

    $(".search").on("click", function (event) {

        event.preventDefault()

        //  alert("clicked");
        var authKey = "&appid=b2fd13cdd07e8064f83f4e3c1f55ea30";

        var currentWeather = "api.openweathermap.org/data/2.5/weather?q=";
        var forecast = "api.openweathermap.org/data/2.5/forecast?q=";

        var city = $("#citySearch").val();

        for (var i = 0; i < city.length; i++) {
            if (city.charAt(i) === " ") {
                var city = city.replace(" ", "%20");
            };
        };

        currentWeather += city;
        currentWeather += authKey;

        forecast += city;
        forecast += authKey;

        console.log("temperature: ", currentWeather.main);
        console.log("humidity: ", currentWeather);
        console.log("windspeed: ", currentWeather.wind);
        console.log(forecast);

        // ajax for current weather
        $.ajax({
            url: currentWeather,
            method: "GET"
        }).then(function (url) {
            console.log(url);
        });

        $.ajax({
            url: forecast,
            method: "GET"
        }).then(function (url) {
            console.log(url);
        });
    });
});