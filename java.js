$(document).ready(function () {
    // console.log($("#searchTermLabel").val());

    $(".search").on("click", function (event) {
        event.preventDefault()
        //  alert("clicked");
        var authKey = "&appid=b2fd13cdd07e8064f83f4e3c1f55ea30";
        var currentWeather = "api.openweathermap.org/data/2.5/weather?q=";


        var city = $("#citySearch").val();

        currentWeather += city;

        currentWeather += authKey;

        console.log(currentWeather);

        // $.ajax({
        //   url: queryURLBase,
        //   method: "GET"
        // }).then(function(data) {
        //   console.log(api.openweathermap.org/data/2.5/forecast?q={city name},{country code});
        //get all the data you need from the data.response.docs[0]. once that is done
        //url, title, descrption (whatever instruct says)
        //dynamically create a div, append that data to the div, then append the data to the html doc
        //to dynamically append review the fridge game
        //change that to a forloop to get it for the rest

        //record count
        //if the record count is > than the results, use the results length
        /* if(recordcout>data.reponse.docs.length){
           recordcount=data.resonse.doc.length;
         }*/

        // for (var i = 0; i < recordCount; i++) {
        //     console.log(results)
        //     var articleDiv = $("<div>");

        // console.log(searchURL);
        // };
    });

});