const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 위와 동일 const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = [];
// paintTodo 할때마다 array에 push 하고 싶어요. 그리고 그걸 localStorage에 넣고 싶어요. local Storage는 array가 저장안됨 오직 text만 저장됨.
// JSON.stringify = JS pbject나 array 또는 어떤 JS 코드건 간에 String으로 바꿔줌
// JSON.parse("[1,2,3,4]") = 살아있는 array로 만들 수 있음.
// JSON.parse(localStorage.getItem("todos")) -->>>>

// {7.5} 이전 localStorage가 저장안되는 이유: 처음 불러올때마다 toDos가 비어있기 때문에.
let toDos = [];

function saveToDos(){
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
    //console.log(e.target); //target : 클릭된 HTML element. 모든 HTML element에는 하나 이상의 property가 있음.
    //console.log(e.target); // 이상태로 보고 path를 보면 어디를 클릭했는지 좌표를 알수 있음. event는 property를 가지는데 어떤 버튼이 클릭되었는지 알려주는 거
    //console.dir(e.target); // 이상태로 보고 parentNode, parentElement 를 보면 상위 부모요소가 무엇인지 알수 있음.
    //console.dir(e.target.parentElement);
    //console.dir(e.target.parentElement.innerText);
    //console.log(e.target.parentElement); < 우리가 삭제해야하는 바로 그 녀석!
    const li = e.target.parentElement;
    //console.log(typeof li.id);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) //우리가 클릭한 li.id와 다른 toDo를 남겨두고 싶다는 의미. toDo.id 는 number //li.id는 string
    saveToDos()
}

function paintTodo (newTodo){
    //{7.5} 간단한 텍스트가 아니라 id값과 text를 모두 가져오는 object를 불러오기 때문에 소스 수정
    //console.log("i will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span")
    li.appendChild(span);
    const button = document.createElement("button"); //{7.2}
    button.innerText = "X";
    li.appendChild(button);
    button.addEventListener("click", deleteTodo)
    //span.innerText = newTodo;
    span.innerText = newTodo.text; //{7.5}
    //console.log(toLi)
    toDoList.appendChild(li);
    li.classList.add("class");// 이건 걍 내가 해봄
    // 새로고침 하면 없어지는 문제가 있음. 삭제 버튼도 만들어야함. 7.1 }
}

function hadleToDosubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    //console.log(toDoInput.value);
    toDoInput.value = "";
    //console.log(newTodo, toDoInput.value); //newTodo와 Input의 값이 나와야하는데 바로 위에서 ""; 처리되었기 때문에 전자만 나옴
    const newTodoObj = { 
        // localStroage의 목록까지 비우려면 각 목록에 랜덤 id를 줘야함 {id:3142 text:ToDo} 이런식의 DB가 되도록
        //{7.6 } Date.now() 밀리초(1000분의 1초)를 주는 함수
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", hadleToDosubmit);



//////////// 이미 기록된 TODO를 lacalstorage를 이용해 저장하는 부분 //////////////


const savedToDos = localStorage.getItem(TODOS_KEY);

function sayHello(item){
    console.log("this is the turn of", item);
}

if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos);
   //console.log(parsedToDos);
   //forEach: array에 각각에 있는 item에 대해서 실행해줌
   //parsedToDos.forEach(sayHello);
   //parsedToDos.forEach((item) => {console.log("this is the turn of ", item); // arrow function. function을 압축하는 셈
    //});
    toDos = parsedToDos; // {7.5} 이전 localStorage 저장하는 역할
   parsedToDos.forEach(paintTodo); 
   // 그러니까.. paintToDo({text:"a", id:12311}) 가 실행되나온것.
}


// localStroage의 목록까지 비우려면 각 목록에 랜덤 id를 줘야함 {id:3142 text:ToDo} 이런식의 DB가 되도록
//{7.6 } Date.now() 밀리초(1000분의 1초)를 주는 함수

// {7.7} array에서 하나를 삭제할때... 하나를 삭제하는 것이 아니라 사실 그 삭제하고픈 내용을 뺀 새로운 array를 만드는 거임!  >>> filter 함수 쓰면됨!

//function sexyFilter(){
// 얘는 무조건 true를 호출해야만 함. 만약 새 array에도 이 1,2,3,4를 포함하고 싶으면.
// false를 리턴하면 그 item은 새 array에 포함되지 않을 것.
//}

//[1, 2, 3, 4].filter(sexyFilter);

// 이 함수가 네번 불러와 질텐데
//sexyFilter(1) = 1 
//sexyFilter(2) = 2
//sexyFilter(3) = 3
//sexyFilter(4) = 4 모두 true라면 array가 그대로 나옴.

//sexyFilter(1) = 1 
//sexyFilter(2) = 2
//sexyFilter(3) X
//sexyFilter(4) = 4 라면 3을 빼고 1,2,4만유지.

//const arr = ["pizza", "banna", "tomato"]
//function sexyfilter(food){return food !== "banna"} >>>>>>>>>>> 바나나를 제외한 모든 걸 꺼내고 싶다.
//arr.filter(sexyfilter);
//(2) ['pizza', 'tomato']
//filter -> 선택옵션