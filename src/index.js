import myName from "./myName";
import "./style.scss";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  // my script
  element.textContent = "Hi! My name is " + myName() + " ;-)";
  element.classList.add("hello");

  // Add the image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
