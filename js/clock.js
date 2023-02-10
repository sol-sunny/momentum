const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;  
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //만약 1이 아니라 00 아니면 01초, 01분, 01시라고 쓰고 싶다면 시간 분 초를 스트링(String으로 묶어줌)으로 만들고 
    //padStart/ 혹은 padEnd를 사용해 두개의 글자가 나와야하는데 그보다 적은 글자가 나온다면 앞이나 뒤에 0을 2개의 글자로 채워질만큼 붙인라는 코드를 사용해야한다.
}

getClock();    //함수를 실행하고 setInterval을 써야지만 index.html에 쓴 시간 '00:00:00'이 나오지 않고 연속으로 시간이 넘어가는 걸 보여줄 수 있다.
//만약 함수를 먼저 선언하지 않으면 00:00:00 다음에 getClock함수가 실행되기 때문에 큰 문제는 없지마 시각적으로 이쁘지 않다.
setInterval(getClock, 1000);   //매 초마다 함수를 실행하라

//setInterval(sayHello, 1000);
//sayHello() 라는 함수를 1초마다 반복한다는 의미. 단, 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.
//setTimeout(sayHello, 1000);
//sayHello() 라는 함수를 1초 기다렸다가 한번만 실행.