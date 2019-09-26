function checkValue(){
var text;
var  lang = document.getElementById("inputValue").value;

switch(lang) {
  case "JavaScript":
   text = "yay!";
   break;
  case "HTML":
   text = "ok!";
   break;
  case "CSS":
   text ="right!";
   break;


default:
text ="You need to enter something!";
}
  document.getElementById("displayText").innerHTML = text;
}
