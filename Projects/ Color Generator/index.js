const getColorCode = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomNumber, randomCode);
  const element = document.querySelector(".container");
  element.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;

  navigator.clipboard.writeText(randomCode);
};
getColorCode();

document.getElementById("btn").addEventListener("click", getColorCode);
