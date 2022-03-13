const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick2(){
    //console.dir(loginInput);
    //console.log("click");
    //console.log(loginInput.value);
    const username = loginInput.value;
    if (username === ""){
        alert("Please write your name");
    } else if(username.length > 15){
        // 변수.length sting 길이 세는 것
        alert("Your name is too long");
        // input 자체에 maxlength로 조절 가능
    }
}// 유저가 입력하는 값의 유효성을 확인하는 건 좋은 연습. 그러나 브라우저의 기본 을 활용할 수 있음.

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
}

//loginButton.addEventListener("click", onLoginBtnClick)

// 이제 우리의 관심사는 click이 아니라 form을 submit 하는 것임!
// 이순간 우리는 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하고 싶은 것.
// 이제 클릭 이벤트는 안녕!

function onLoginSubmit2(e){
    e.preventDefault();
    // 어떤 event의 기본행동이든지 발생되지 않도록 막은 것. = 어떤 funcition에 대해 브라우저가 기본적으로 수행하는 동작.
    // e는 공간을 만들어 준것. 비워도 되지만 공간을 만들어주면 js에서 event를 채워줄 것임.
    //const username = loginInput.value;
    console.log(loginInput.value);
}

//loginForm.addEventListener("submit", onLoginSubmit);
// 누군가 form을 submit하면 js가 이 function을 호출하도록 하는 것.


// 우리가 EventListener를 만들고 거기에 함수를 줬다는 걸 JS가 보게되면, JS는 누군가 링크를 클릭할 때, 날 위해 함수를 실행시킴
// hhandleLinkClick 내가 실행시키는 게 아님.
// handleLinkClick()라면 함수는 한번만 실행되고 그게 끝. 우리는 그걸 원하지 않고. 우리가 함수의 이름만 주면 실행하는게 JS의 몫인 것.

//JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣음. 그게 규칙임.
//handleLinkClick({information about the event that just happened})
// 이 오브젝트(방금 일어난 이벤트에 대한 정보를 담은) 는 js가 우리한테 걍 주는 것임.. 
// 이 오브젝트는 handleLinkClick을 위한 EventListener 함수의 첫번째 인자로 주어진 것.
// 우리는 공간을 제공해주고 받기만 하면 됨.
// argument를 받아줘야함 = 임시로 걍 쓴게 event


const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = `Hello ${username}`; // ~을 시프트 안누른 `백틱    
   // greeting.classList.remove(HIDDEN_CLASSNAME);
   paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

//local storage는 우리가 브라우저에 뭔가 저장할 수 있게 해줌. 나중에 가져다 쓸수 있도록.

const saveUsername = localStorage.getItem(USERNAME_KEY);
//console.log(saveUsername);

if(saveUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greeting
    paintGreetings(saveUsername);
}