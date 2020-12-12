function weightConverter(valNum) {
  document.getElementById("outputKilograms").innerHTML=valNum/1000;
}

let a = true;
function f() {
  if(a == true) {
    document.querySelector("body").style.fontSize = "9999%";
    a = false;
  }
  else {
    if(a == false){
      document.querySelector("body").style.fontSize = "100%";
      a = true;
  }};
};
function Hello() {
  if(a == true) {
    document.getElementById("hello").innerHTML = "Hello";
    a = false;
  }
  else {
    document.getElementById("hello").innerHTML = "1";
    a = true;
  }
};
function Hi() {
  if(a == true) {
    document.getElementById("hi").innerHTML = "Hello";
    a = false;
  }
  else {
    document.getElementById("hi").innerHTML = "2";
    a = true;
  }
};
function HaHa() {
  if(a == true) {
    document.getElementById("haha").innerHTML = "Hello";document.getElementById("flex-container").style.width = "550px";
    a = false;
  }
  else {
    document.getElementById("haha").innerHTML = "3";
    a = true;
  }
};
function HoHo() {
  if(a == true) {
    document.getElementById("hoho").innerHTML = "Hello";
    document.getElementById("flex-container").style.width = "600px";
    a = false;
  }
  else {
    document.getElementById("hoho").innerHTML = "4";
    a = true;
  }
};
function HH() {
  if(a == true) {
    document.getElementById("hh").innerHTML = "Hello";
    document.getElementById("flex-container").style.width = "650px";
    a = false;
  }
  else {
    document.getElementById("hh").innerHTML = "5";
    a = true;
  }
};
function Cat() {
  let yes;
  let answer = prompt("고양이를 좋아하시나요?");
  if(answer == "예" || answer == "응응" || answer == "야옹") {
    yes = true;
    alert("야옹");
    console.log("야옹~");
  } else if(answer == "아니요" || answer == "아뇨") {
    alert("멍멍");
    console.log("멍멍~");
  } else {
    alert(";;");
  }
};
let ws = new WebSocket("ws://127.0.0.1:3000");
ws.addEventListener('message', event=>{
    console.log("신사" + event.data);
  });
function msg() {
    let ms = document.getElementById("dd").value;
    ws.send(ms)
    console.log('나: '+ ms)
    clear();
}
function enter(){
  if(window.event.keyCode == 13){
    msg();
    clear();
  }
}
function clear() {
  document.getElementById("dd").value = '';
}
let d = new Date();
document.getElementById("demo1").innerHTML = d.toLocaleTimeString()
setInterval(()=>{
  let d = new Date();
  document.getElementById("demo1").innerHTML = d.toLocaleTimeString();
}, 1000);
