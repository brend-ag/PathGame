/*For the Welcome sign*/
function over(obj) {
  obj.innerHTML = "ow"
}

function out(obj) {
  obj.innerHTML = "Welcome"
}

/*Bottom two are for the bathroom note*/
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "This is a dead end. Yet, you are close.";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Look at the note";
}

function changeCSS(){
  var currentStyle = document.getElementsByTagName('link')[0];

  if(currentStyle.getAttribute('href')=='technicalcss_hw3.css'){
      currentStyle.setAttribute('href', 'technicalcss2_hw3.css');
  }
  else{
      currentStyle.setAttribute('href', 'technicalcss_hw3.css');
  }
}

var show = false;
function btnClick(btnID){
  document.getElementById(btnID).style.display = "none";

  if (show == false) {
    document.getElementById(btnID).style.display = "block";
    show = true;
  } else {
    document.getElementById(btnID).style.display = "none";
    show = false;
  }
}
function hide(btnID){
  var T = document.getElementById(btnID);
  T.style.display = "block";
}
function riddle() {
  let text;
  let person = prompt("Please enter your answer:", "");
  if (person == null || person == "") {
    text = "Too hard for your head, hm?";
  }
  if(person=="A keyboard" || person=="a keyboard" || person=="Keyboard" || person=="keyboard"){
    text = "Very good, human... Suddenly, a door opens in the distance and a bright light shines through. Is this the end? [Congrats! You won the game!!] ";
  }
  document.getElementById("win").innerHTML = text;
}
