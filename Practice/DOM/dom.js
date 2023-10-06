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

// const secondItem = document.querySelector("li:nth-child(2)");
// const newli = document.createElement("li");
// newli.textContent = "edit kar diya";
// secondItem.replaceWith(newli);

// const lastItem = document.querySelector("li:last-child");
// lastItem.remove();

// ----------------------------------------------------------------------
//              Events in js
// ----------------------------------------------------------------------

document.getElementById("imglist").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  false
);

document.getElementById("imglist").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      // this check only removes img and not whole list bcz if we click li then parent is ul and it gets deleted
      const removeIt = e.target.parentNode;
      removeIt.remove();
    }
  },
  false
);
// ----------------------------------------------------------------------
//              Async in jS
// ----------------------------------------------------------------------

let intervalID;

const startBtn = document.getElementById("btn1");
startBtn.addEventListener("click", function () {
  intervalID = setInterval(function () {
    console.log("started");
  }, 1000);
});

const stopBtn = document.getElementById("btn2");
stopBtn.addEventListener("click", function () {
  console.log("stoped");
  clearInterval(intervalID);
});

const startBGCbtn = document.getElementById("btn-bgc-1");
const stopBGCbtn = document.getElementById("btn-bgc-2");
let intervalbgc;
startBGCbtn.addEventListener("click", function () {
  startBGCbtn.disabled = true;
  intervalbgc = setInterval(function () {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = `${randomCode}`;
  }, 1000);
});

stopBGCbtn.addEventListener("click", function () {
  clearInterval(intervalbgc);
  startBGCbtn.disabled = false;
});
