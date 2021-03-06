const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();
// this is for input

function myFunction(x) {
  x.style.background = "red";
}
// back ground colors change button , random and set color button
const colors = ["green","red","blue","pink","yellow","gray"]
const buttonElement = document.querySelector("#randomColorButton")
const addColorButton = document.querySelector("#setColorButton")

addColorButton.addEventListener("click",addColor)
buttonElement.addEventListener("click",changeColors)

function changeColors() {
  const randomIndex = Math.floor(Math.random() * colors.length)
  document.querySelector("main").style.backgroundColor = colors[randomIndex];
}

function addColor() {
  const userInput = document.querySelector(".colorInput")
  document.querySelector("main").style.backgroundColor = userInput.value;
}