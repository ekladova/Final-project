const textField = document.getElementById("text");
const inputs = ["news", "articles", "community", "positivity"];

let counter = 0;
let index = 0;
let dx = 250;

textField.innerHTML = "";
setTimeout(write, dx);

function write() {
  if (counter < inputs[index].length) {
    textField.innerHTML += inputs[index].charAt(counter);
    counter++;
    setTimeout(write, dx);
  } else {
    setTimeout(erase, dx + 100);
  }
}

function erase() {
  if (counter >= 0) {
    let d = inputs[index].toString().substring(0, counter);
    textField.innerHTML = d;
    counter--;
    setTimeout(erase, dx - 100);
  }

  if (counter === 0) {
    index++;
    if (index >= inputs.length) {
      index = 0;
    }
    setTimeout(write, dx);
  }
}
