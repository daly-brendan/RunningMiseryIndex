
let weather = {
    'apiKey' : '3eb05e9658ab41e9b73210356231907',
    fetchWeather: function(city) {
        fetch("https://api.weatherapi.com/v1/current.json?key=" 
        
        + this.apiKey +"%20&q=" 
        + city 
        + "&aqi=no"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data.location;
        const { icon, text} = data.current.condition;
        const { temp_f, humidity} = data.current;
        const { wind_mph } = data.current;
        const dewPoint = Math.round(temp_f - ((100 - humidity)/5))
        const miseryIndex = Math.round(temp_f + dewPoint)
        console.log(name, icon, text, temp_f, humidity, wind_mph)
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = icon;
        document.querySelector('.description').innerText = text;
        document.querySelector('.temp').innerText = temp_f + "°F";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed of: " + wind_mph + " mp/h";
        document.querySelector('.dewPoint').innerText = "The dew point of today is: " + dewPoint;
        document.querySelector('.misery').innerText = "The misery index today is: " + miseryIndex;
        //document.querySelector(".weather").classList.remove("loading");
        if(miseryIndex <= 100) {
            document.querySelector('.misery-result').innerText = "There is no necessary pace adjustment!";
        }else if (miseryIndex > 100 && miseryIndex <= 110) {
            document.querySelector('.misery-result').innerText = "There is a recommended 0.5% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex >= 111 && miseryIndex <= 120) {
            document.querySelector('.misery-result').innerText = "There is a recommended 1% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex >= 121 && miseryIndex <= 130) {
            document.querySelector('.misery-result').innerText = "There is a recommended 2% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex >= 131 && miseryIndex <= 140) {
            document.querySelector('.misery-result').innerText = "There is a recommended 3% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex >= 141 && miseryIndex <= 150) {
            document.querySelector('.misery-result').innerText = "There is a recommended 4.5% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex >= 121 && miseryIndex <= 160) {
            document.querySelector('.misery-result').innerText = "There is a recommended 6% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex >= 121 && miseryIndex <= 170) {
            document.querySelector('.misery-result').innerText = "There is a recommended 8% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex >= 121 && miseryIndex < 180) {
            document.querySelector('.misery-result').innerText = "There is a recommended 10% pace decrease due to the heat and humidity today!";
        }else if (miseryIndex > 180 ) {
            document.querySelector('.misery-result').innerText = "It is not recommended to run today due to the heat and humidity today!";
        }
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})