const heading1 = document.getElementById("title");
heading1.style.backgroundColor = "cyan";

const parent = document.querySelector(".parent");
console.log(parent);

let changeYellow = parent.querySelector(".div-elements");
console.log(changeYellow);
changeYellow.style.backgroundColor = "yellow";

changeYellow = parent.querySelectorAll(".div-elements");
changeYellow.forEach((element) => {
  element.style.backgroundColor = "yellow";
});

const classText = document.getElementsByClassName("heading2");
const classarr = Array.from(classText);
console.log(classarr);

classText[0].style.color = "purple";

// ---------------------------------------------------------------------

console.log(parent); // parent gives element parenet
console.log(parent.children); // gives HTML Collection of elements inside parent element

for (let i = 0; i < parent.children.length; i++) {
  parent.children[i].style.color = "blue";
}
// ----------------------------------------------------------------------
// parent and child relation in DOM
console.log("parent and child relation in DOM");
console.log(parent.firstElementChild);
console.log(parent.lastElementChild.innerHTML);

const firstDiv = document.querySelector(".div-elements");
console.log(firstDiv);

console.log(firstDiv.parentElement); //gives parent
console.log(firstDiv.nextElementSibling); // gives next sibling

console.log("Nodes : ", parent.childNodes); // includes commenst line breaks and everything

// ----------------------------------------------------------------------
//              Creating and attching new elements using dom
// ----------------------------------------------------------------------

const div = document.createElement("div");
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "created by dom");
div.style.backgroundColor = "pink";
div.style.textAlign = "center";
div.style.fontSize = "25px";
// div.innerHTML = "YASH SHARMA";
const addText = document.createTextNode("YASH SHARMA");
div.appendChild(addText);

// attaching it to the html document

document.body.appendChild(div);

// function for adding elements

function addListItem(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".main").appendChild(li);
}

addListItem("Ho gaya add pheli bar");
addListItem("Ho gaya add dusri bar");
addListItem("Ho gaya add thisri bar");
addListItem("Ho gaya add bar bar");
addListItem("balle balle");

// editing this list items using dom

const secondItem = document.querySelector("li:nth-child(2)");
const newli = document.createElement("li");
newli.textContent = "edit kar diya";
secondItem.replaceWith(newli);

const lastItem = document.querySelector("li:last-child");
lastItem.remove();
