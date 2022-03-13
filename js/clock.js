const clock = document.querySelector("h2#clock");

//interval 매번 일어나야하는 무언가 ex: 매 2초 < 이게 interval

//function sayHello(){
//    console.log("hello")
//}

// sayHello 함수를 매 2초마다 실행할 것임
// 첫번째 argument: 실행하고자하는 function
// 두번째 argument: 호출되는 function 간격을 몇 ms로 할지 쓰는 것
///// setInterval(sayHello, 5000);

// settimeout 5초후 한번만 호출
//setTimeout(sayHello, 5000);


// 오늘 날짜 시간 잡아주는 오브젝트
//new Date();

const today1 = new Date();
today1.getDate();
today1.getDay();
today1.getFullYear();
today1.getSeconds();

new Date().getHours();
new Date().getMinutes();
new Date().getSeconds();


function getClock(){
    const date = new Date();
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock() // 새로고침하자마자 호출하고
setInterval(getClock, 1000); // 매 1초마다 호출

// 우리는 2:33:1 이 싫어 02:33:01이 되게 만들고 싶어
//padStart() 

// 1.padStart(2,"0"); string 갯수가 2개가 아니라면 앞에 0을 붙여서 01로 표시함.
// 1.padEnd(2,"0"); string 갯수가 2개가 아니라면 뒤에 0을 붙여서 10로 표시함.

// String(new Date().getHours()) => "string"으로 호출



//위 소스를 불러오는 코드가 따로 있음! ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
//function sayHello1(){
//    clock.innerText = new Date().toLocaleTimeString();
//}
//sayHello1()
//setInterval(sayHello1, 1000);