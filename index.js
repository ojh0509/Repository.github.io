let a = true;
function f() {
  if(a == true) {
    document.querySelector("body").style.fontSize = "10000px";
    a = false;
  }
  else {
    if(a == false){
      document.querySelector("body").style.fontSize = "5px";
      a = true;
  }};
};
