const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];   //let을 써야만 아래에서 값을 부여, 추가할수있다.
const TODOS_KEY = "todos";

function handleToDoSubmit(event) {
    event.preventDefault();    //(event)submit 에드리스너하면 엔터누를때마다 새로고침되는 현상을 막아줌
    const newTodo = toDoInput.value;
    console.log(newTodo);
    toDoInput.value = "";    //엔터 누르면 input창에 글씨 지워지도록 해줌, 그러나 input의 value는 newTodo에 따로 값을 저장해두었음 
    const newToDoObj = {    //아이디를 줘야 삭제가 가능하다. 
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newToDoObj);     //어레이에 value값 저장하기
    paintToDo(newToDoObj);      //화면에 그려주기  >> 보내줄 argument를 입력
    saveToDos();                //localStorage에 저장하기 새로고침해도 저장되도록
}

//화면에 출력
function paintToDo(newTodo) {      //paintToDo(newToDoObj); 라는 코드는 paintToDo라는 함수에 보내줄 argument를 입력한것이고, 여기서 보내준 argument를 바탕으로 매개변수(이름 아무거나 상관없음)를 만든다. 즉, newToDo라는 매개변수 안에 newToDoObj가 들어가 있는 것이다.
    const li = document.createElement("li");        //li라는 태그를 html에 생성한다.
    li.id = newTodo.id;
    //'handleToDoSubmit'함수에서 준 paintToDo(newToDoObj) argument를 바탕으로 paintToDo(newToDo = 매개변수)함수를 만들었기에 newToDo와 newToDoObj은 같은 것이다.
    const span = document.createElement("span");        //span라는 태그를 html에 생성한다.
    li.appendChild(span);                               //span을 li태그 안에 집어 넣는다.
    span.innerText = newTodo.text;                      //input에 적은 value를 저장한 newToDo를 span칸 안에 저장한다.
    const button = document.createElement("button");    //html안에 button태그 생성
    li.appendChild(button);                             //button을 li태그 안에 집어 넣는다.
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);                         //li(span/button태그를 품은)태그를 toDoList<ul> html공간에 저장한다.
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   //local storage에는 array로 저장이 안되기 때문에 JSON.stringify로 array처럼 생긴 string으로 저장한 후 다시 JSON.parse 이용해 array로 꺼내는 방법
    //localStorage.setItem("TODOS_KEY", toDos);
    //localStorage.setItem("localStorage에 저장할 이름값", 불러올 변수값);
}

function deleteToDo(event) {                          //click에 대한 event를 추가
    const wantDelete = event.target.parentElement;    //'event.target'은 클릭한 ❌표시를 말하고, 'parentElement'는 해당 ❌표시의 부모인 li(span과 버튼을 품고 있는 태그)를 찾아 알려주는 것이다. 
    wantDelete.remove();                              //❌표시가 화면에서 사라짐
    toDos = toDos.filter((item) => item.id !== parseInt(wantDelete.id));    //filter은 기존 어레이를 추가 삭제하는게 아니라 아예 새로운 어레이를 생성하는 것이다.
    //todos의 각 아이디와 ❌를 클릭한 'li'의 id가 같지 않은 것들만 출력(다시말해 아이디가 같다면 ❌누른 것이니 삭제하라)                
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//get은 아이템이 저장되었으면 가져올수있는 코드이다(key이름으로 가져올수있다.). set은 아이템을 저장하는 코드이다.

if (savedToDos !== null) {                       //localStorage에 저장한 값을 화면에도 출력하기 위해
    const parsedToDos = JSON.parse(savedToDos);  //JSON.parse() 스트링을 어레이로 변경해줌
    toDos = parsedToDos;                         //4번째 줄에 toDos를 빈 어레이로 두면 새로 고침하면 과거 쓴 정보가 사라지고 새로게 쓴 정보만 추가된다. old,new 정보 모두 저장하려면 지난 값을 따로 저장해둬야한다.
    parsedToDos.forEach(paintToDo);              //각각의 리스트마다 paintToDo 함수가 실행되도록해줌
}
