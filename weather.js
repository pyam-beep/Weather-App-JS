async function fetchWeatherData(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Isle%20Of%20Wight&appid=588731448521733062155de0d89e383a&&units=metric")
    const data = await response.json();
    console.log(data)

    const storedWeatherData = JSON.parse(localStorage.getItem('weatherData')) || [];

    const localWeatherData = Array.isArray(storedWeatherData) ? storedWeatherData : [];

    localWeatherData.push(data);

    localStorage.setItem('weatherData', JSON.stringify(localWeatherData))

    displayWeatherData(data);

    function displayWeatherData(data){
        const status = document.getElementById('status');
        status.innerHTML = '';
        const location = document.getElementById('location');
        location.innerHTML = '';
        const sub_location = document.getElementById('sub-location');
        sub_location.innerHTML = '';
        const temperature = document.getElementById('temp-deg');
        temperature.innerHTML = '';
        const humid = document.getElementById('humidity');
        humid.innerHTML = '';
        const wind = document.getElementById('wind');
        wind.innerHTML = '';
        const rainy = document.getElementById('rain');
        rainy.innerHTML = '';
        var time = new Date();
        document.getElementById('timed').innerHTML = time;


        const weatherItem = document.createElement('div');
        weatherItem.textContent = data.main.temp;
        temperature.appendChild(weatherItem);
        const weatherItem1 = document.createElement('div');
        weatherItem1.textContent = data.weather[0].description;
        status.appendChild(weatherItem1);
        const weatherItem2 = document.createElement('div');
        weatherItem2.textContent = data.name;
        location.appendChild(weatherItem2);
        const weatherItem3 = document.createElement('div');
        weatherItem3.textContent = data.sys.country;
        sub_location.appendChild(weatherItem3);
        const weatherItem4 = document.createElement('div');
        weatherItem4.textContent = data.main.humidity;
        humid.appendChild(weatherItem4);
        const weatherItem5 = document.createElement('div');
        weatherItem5.textContent = data.wind.speed;
        wind.appendChild(weatherItem5);

        if(data.hasOwnProperty('rain')){
            const weatherItem6 = document.createElement('div');
            weatherItem6.textContent = data.rain["1h"];
            rainy.appendChild(weatherItem6);
        }
        else{
            const weatherItem6 = document.createElement('div');
            weatherItem6.textContent = "```";
            rainy.appendChild(weatherItem6);
        }
    }

    var weatherTable = document.getElementById('weather-table');
    var sn = 1;
    for (var i = 0; i < weatherData.length; i++) {
        var row = '<tr>' +
              '<td>' +'DAY '+ sn + '</td>' +  
              '<td>' + weatherData[i].City +'</td>' +
              '<td>' + weatherData[i].Temperature +'°C' + '</td>' +
              '<td>' + weatherData[i].Humidity +'%Rh'+ '</td>' +
              '<td>' + weatherData[i].Rain + '</td>' +
              '<td>' + weatherData[i].Wind +'mph'+ '</td>' +
            '</tr>';
    weatherTable.innerHTML += row;
    sn++;
    }

    if(data.hasOwnProperty('rain')){
        const rainy = document.getElementById('rain');
            rainy.innerHTML = data.rain["1h"];
    }
    else{
        const rainy = document.getElementById('rain');
            rainy.innerHTML = "```";
    }
    
    const icons = document.getElementById('weather-icons');
    if(data.weather[0].main == "Clear"){
        icons.src = "sunny.png";
    }
    if(data.weather[0].main == "Clouds"){
        icons.src = "cloudy.png";
    }
    if(data.weather[0].main == "Rain"){
        icons.src = "weather-rainy.png";
    }
    if(data.weather[0].main == "Mist"){
        icons.src = "mist.png";
    }
    if(data.weather[0].main == "Haze"){
        icons.src = "haze.png";
    }
    if(data.weather[0].main == "Thunderstorm"){
        icons.src = "storm.png";
    }
}
fetchWeatherData()

const myForm = document.getElementById("form");
myForm.addEventListener("submit", async function(e){
    e.preventDefault()
    const search = document.getElementById('city').value
    console.log(search)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=588731448521733062155de0d89e383a&&units=metric`);
    const data = await response.json();
    console.log(data)
    
    const storedWeatherData = JSON.parse(localStorage.getItem('weatherData')) || [];

    const localWeatherData = Array.isArray(storedWeatherData) ? storedWeatherData : [];

    localWeatherData.push(data);

    localStorage.setItem('weatherData', JSON.stringify(localWeatherData))

    displayWeatherData(data);

    function displayWeatherData(data){
        const status = document.getElementById('status');
        status.innerHTML = '';
        const location = document.getElementById('location');
        location.innerHTML = '';
        const sub_location = document.getElementById('sub-location');
        sub_location.innerHTML = '';
        const temperature = document.getElementById('temp-deg');
        temperature.innerHTML = '';
        const humid = document.getElementById('humidity');
        humid.innerHTML = '';
        const wind = document.getElementById('wind');
        wind.innerHTML = '';
        const rainy = document.getElementById('rain');
        rainy.innerHTML = '';
        var time = new Date();
        document.getElementById('timed').innerHTML = time;
    
    
        const weatherItem = document.createElement('div');
        weatherItem.textContent = data.main.temp;
        temperature.appendChild(weatherItem);
        const weatherItem1 = document.createElement('div');
        weatherItem1.textContent = data.weather[0].description;
        status.appendChild(weatherItem1);
        const weatherItem2 = document.createElement('div');
        weatherItem2.textContent = data.name;
        location.appendChild(weatherItem2);
        const weatherItem3 = document.createElement('div');
        weatherItem3.textContent = data.sys.country;
        sub_location.appendChild(weatherItem3);
        const weatherItem4 = document.createElement('div');
        weatherItem4.textContent = data.main.humidity;
        humid.appendChild(weatherItem4);
        const weatherItem5 = document.createElement('div');
        weatherItem5.textContent = data.wind.speed;
        wind.appendChild(weatherItem5);
    
        if(data.hasOwnProperty('rain')){
            const weatherItem6 = document.createElement('div');
            weatherItem6.textContent = data.rain["1h"];
            rainy.appendChild(weatherItem6);
        }
        else{
            const weatherItem6 = document.createElement('div');
            weatherItem6.textContent = "```";
            rainy.appendChild(weatherItem6);
        }
    
    }

    const icons = document.getElementById('weather-icons');

    if(data.weather[0].main == "Clear"){
        icons.src = "sunny.png";
    }
    if(data.weather[0].main == "Clouds"){
        icons.src = "cloudy.png";
    }
    if(data.weather[0].main == "Rain"){
        icons.src = "weather-rainy.png";
    }
    if(data.weather[0].main == "Mist"){
        icons.src = "mist.png";
    }
    if(data.weather[0].main == "Haze"){
        icons.src = "haze.png";
    }
    if(data.weather[0].main == "Thunderstorm"){
        icons.src = "storm.png";
    }

    if(data.hasOwnProperty('rain')){
        const rainy = document.getElementById('rain');
            rainy.innerHTML = data.rain["1h"];
    }
    else{
        const rainy = document.getElementById('rain');
            rainy.innerHTML = "```";
    }
})
