const smaller = document.getElementById("small");
const bigger = document.getElementById("big");
const pText = document.querySelectorAll("p");

function fontSmaller() {
  for (let i = 0; i < pText.length; i++) {
    pText[i].style.fontSize = "initial";
  }
}

function fontBigger() {
  for (let i = 0; i < pText.length; i++) {
    pText[i].style.fontSize = "larger";
  }
}

smaller.onclick = () => fontSmaller();
bigger.onclick = () => fontBigger();
