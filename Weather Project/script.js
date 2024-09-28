
    const weatherForm = document.querySelector(".weatherForm");
    const CityInput = document.querySelector(".cityInput");
    const card = document.querySelector(".card");
    const apikey = "f9405a29e0ba2884bb3dd038b0d18049";

    weatherForm.addEventListener("submit",async event=>{

        event.preventDefault();
        const city = CityInput.value;

        if(city){
            try{
                const WeatherData = await getWeatherData(city);
                displayWeatherInfo(WeatherData);
            }catch(error){
                console.error(error);
                displayError(error);
            }

        }else{
            displayError("Please Enter a city");
        }

    });

    async function getWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

        const respo = await fetch(apiUrl);
        if(!respo.ok){
            throw new Error("Could Not fetch weather Data!");
        }
        return await respo.json();
    }
    function displayWeatherInfo(data) {
        const {name:city,
            main:{temp,humidity},
            weather:[{description,id}]} = data;
        card.textContent = "";
        card.style.display = "flex";
        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");
        const errorDisplay = document.createElement("p");

       
        cityDisplay.textContent = city;
        tempDisplay.textContent = `${(temp-273.15).toFixed(2)}°C`;
        humidityDisplay.textContent = `Humidity : ${humidity} %`
        descDisplay.textContent = description;
        weatherEmoji.textContent = getWeatherEmoji(id);

        cityDisplay.classList.add("cityDisplay")
        tempDisplay.classList.add("tempDisplay")
        humidityDisplay.classList.add("humidity")
        descDisplay.classList.add("descDisplay")
        weatherEmoji.classList.add("weatherEmoji");
        
        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmoji);

    }
    function getWeatherEmoji(weatherId) {
        switch(true){
            case (weatherId >= 200 && weatherId<300) :
                return "🌩️"
            case (weatherId >= 300 && weatherId<400) :
                return "☔"
            case (weatherId >= 500 && weatherId<600) :
                return "🌧️"
            case (weatherId >= 600 && weatherId<700) :
                return "☃️";
            case (weatherId >= 700 && weatherId<800) :
                return "🌫️"
            case (weatherId === 800) :
                return "☀️";
            case (weatherId >= 801 && weatherId<810) :
                return "☁️"
            default :
            return "❓";
        }
    }
    function displayError(message) {
        const ErrorDisplay = document.createElement("p");
        ErrorDisplay.textContent = message;
        ErrorDisplay.classList.add("errorDisplay");

        card.textContent = "";
        card.style.display = "block";
        card.appendChild(ErrorDisplay);

    }