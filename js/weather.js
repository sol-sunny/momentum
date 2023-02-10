const API_KEY = "af3f658bc0e21bb2d5ef8d44d45b6dd7";

function onGeoOk(position) {
    console.log(position);   //현재 나의 위치를 알려주는 'position' 자체의 자바스크립트 기능으로 'GeolocationPosition'라는 'object'를 준다.
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;   //&units=metric 화씨를 섭씨로 바꿔줌
    fetch(url)  //url불러오기
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");   //html에 weather태그 밑에 있는 첫번째 span태그에 weather이라는 이름을 준다.
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
        });
    console.log(url);
    console.log("you live in", lat, lon);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//알고자하는 위치 알려줄때 두개의 argument가 필요하다
// >> navigator.geolocation.getCurrentPosition(위치 정보 찾는데 성공하면 쓸 함수, 만약 에러가 발생하면 쓸 함수);
