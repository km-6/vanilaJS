const API_KEY = "868fd9debeff465237c72e9be90df20c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live in", lat, lon);
    //console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metic`;
    //console.log(url);
    fetch(url)
    //fetch는 promise. 뭔가 당장 일어나지 않고 시간이 좀 걸린 뒤 일어나는 것.서버의 응답을 기다려야함.
    // then 서버 받아서 주소 받아서, 진행 쭉쭉 해나가는 것.
        .then((response) => response.json())
        .then((data) => {
            //const weatherContainer = document.getElementById("weatehr");
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            //console.log(data.name, data.weather[0].main);
            //const name = data.name;
            //const weather = data.weather[0].main;
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //getCurrentPosition은 두개의 argument를 가짐. 성공했을때 내보낼 함수, 실패했을 떄 내보낼 함수.