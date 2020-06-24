const smaller = document.getElementById("small");
const bigger = document.getElementById("big");
const pText = document.querySelectorAll("p");

function fontSmaller(value) {
  for (let i = 0; i < pText.length; i++) {
    let currentSize = parseFloat(
      window.getComputedStyle(pText[i], null).getPropertyValue("font-size")
    );
    // console.log(currentSize);
    pText[i].style.fontSize = currentSize + value + "px";
  }
}

function fontBigger(value) {
  for (let i = 0; i < pText.length; i++) {
    let currentSize = parseFloat(
      window.getComputedStyle(pText[i], null).getPropertyValue("font-size")
    );
    // console.log(currentSize);
    pText[i].style.fontSize = currentSize + value + "px";
  }
}

smaller.onclick = () => fontSmaller(-2);
bigger.onclick = () => fontBigger(2);
