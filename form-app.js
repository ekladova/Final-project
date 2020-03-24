const form = document.getElementById("form1");
const people = document.querySelectorAll(".peopleChoice");
const submit = document.getElementById("submitButton");
const clear = document.getElementById("clearAll");
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const issues = document.getElementById("issue");
const name = document.getElementById("name");

function getAction(form) {
  let subject = issues.value;

  for (let i = 0; i < people.length; i++) {
    if (people[i].checked) {
      form.action = `mailto:${people[i].value}?subject=${subject} - ${name.value} `;
      return form.action;
    } else {
      form.action = "mailto:example@mail.com"; //default value if nothing is checked
    }
  }
}

function clearAll() {
  for (i in inputs) {
    inputs[i].value = "";
    inputs[i].checked = false;
    form.action = "mailto:example@mail.com";
  }
  for (j in textareas) {
    textareas[j].value = "";
  }
}

window.onload = () => getAction(form);
clear.onclick = () => clearAll();
