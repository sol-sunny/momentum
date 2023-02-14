const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    // step1. 화면 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // submit되면 form을 다시 숨겨준다 >> 쉽게 설명해 1번째 줄 login-form의 class이름인 hidden을 줘서 hidden에 부옇한 css가 적용되도록 해준다.
    const username = loginInput.value;
    //value를 username이라는 key값으로 저장시켜준다
    localStorage.setItem(USERNAME_KEY, username);
    //username값을 username이라는 key와 함께 local storage에 저장한다
    paintGreetings(username); //'paintGreetings' 이라는 함수에 보내줄 (username)라는 argument를 입력한것이다.
    // onLoginSubmit함수에서는 유저정보가 input으로부터 오고 있다
}

function paintGreetings(username) {         //여기서 (username)은 onLoginSubmit함수에서 보내준 username을 매개변수(매개변수는 어떤 이름으로 해도 상관없다.)로 받았기 때문에 따로 함수안에 username을 다시 선언할 필요가 없다.           //4번
    greeting.innerText = `:) Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);   //greeting태그에 부여한 hidden클래스를 지우면서 css가 적용되지 않도록 해서 화면에 나타나도록 해준다.
}
// step5. 비어있는 h1 요소안에 `Hello username` 이라는 텍스트 추가

const savedUsername = localStorage.getItem(USERNAME_KEY);   //1번
//get은 아이템이 저장되었으면 가져올수있는 코드이다. set은 아이템을 저장하는 코드이다.
// step6. 앱이 시작되면 local storage에서 savedusername을 얻으려고 할텐데 거기서 username이라는 key를 가지고 찾게 된다

// step7. 처음에는 key랑 value가 null이므로
if (savedUsername === null) {                              //2번
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // form에 hidden 클래스를 지워주고, 화면에 로그인 화면 나오도록
    loginForm.addEventListener("submit", onLoginSubmit);
    // form이 submit될때만 onLoginSubmit함수를 실행 시키도록 한다
} else {
    paintGreetings(savedUsername);
    // 유저정보가 localstoreage에서 나오고 있다
    // paintGreeting은 only localstoarage에서만 값을 불러온다
}