const API_KEY = 'af39ab32f19c0e479e0761a150e0f9bf';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon= position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(lat, lon, position);
    console.log(url);
    fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            const weatherContainer = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:last-child')
            city.innerText = data.name;
            weatherContainer.innerText =  data.weather[0].main;})
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);