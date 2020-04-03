const form = document.getElementById("form1");
const people = document.querySelectorAll(".peopleChoice");
const submit = document.getElementById("submitButton");
const clear = document.getElementById("clearAll");
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const issues = document.getElementById("issue");
const name = document.getElementById("name");
const desc = document.getElementById("typeBox");

function getAction(form) {
  const subject = issues.value;
  const description = desc.value;
  const contact = document.querySelectorAll(".contacts");
  let contactValue = "";

  for (let i = 0; i < contact.length; i++) {
    if (contact[i].checked) {
      contactValue += contact[i].value;
    } else {
      continue;
    }
  }

  for (let i = 0; i < people.length; i++) {
    if (people[i].checked) {
      form.action = `mailto:${people[i].value}?subject=${subject} - ${
        name.value
      }&body= 
       ${description}. I would like to be contacted by: ${contactValue}. Phone number: ${
        document.getElementById("phoneNumber").value
      }. Email: ${document.getElementById("emAddress").value}.
       `;

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
submit.onclick = () => getAction(form);
clear.onclick = () => clearAll();
