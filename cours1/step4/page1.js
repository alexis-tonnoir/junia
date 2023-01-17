console.log("Alexis is here!")

function changeToBlue() {
  document.getElementById("change_it").style.backgroundColor = "#330aec";
}

function changeToRed() {
  document.getElementById("change_it").style.backgroundColor = "rgb(250, 0, 0)";
}

function changeToYellow() {
  document.getElementById("change_it").style.backgroundColor = "#c7f014";
}

function changeColor(color) {
  document.getElementById("change_it").style.backgroundColor = color;
}

function changeRGBColor(){
  red = document.getElementById("red").value;
  green = document.getElementById("green").value;
  blue = document.getElementById("blue").value;
  "rgb(52,30,40)"
  "rgb(" + red + "," + green + "," + blue + ")"
  `rgb(${red},${green},${blue})`
  console.log('colors', red, green, blue, `rgb(${red},${green},${blue})`)
  "rgb(" + red + "," + green +"," + blue + ")"
  document.getElementById("change_it").style.backgroundColor = `rgb(${red},${green},${blue})`;
}