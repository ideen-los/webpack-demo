import myName from "./myName";

function component() {
  const element = document.createElement("div");

  // my script
  element.textContent = "Hi! My name is " + myName() + " ;-)";

  return element;
}

document.body.appendChild(component());
