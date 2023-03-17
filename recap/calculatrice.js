function addToInput(charClicked) {
  document.getElementById("input").value += charClicked;
}

function clearInput() {
  document.getElementById("input").value = "";
}

function computeResult() {
  var input = document.getElementById("input").value;
  try {
    var result = eval(input);
    document.getElementById("result").value = input + " = " + result;
  } catch {
    document.getElementById("result").value = 'Error'
  }
  clearInput();
}