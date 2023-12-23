const images = ["url(lebron.webp)", "url(curry.jpg)", "url(harden.jpg)", "url(kyrie.jpg)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundImage = images[randomNumber];
  color.textContent = images[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * images.length);
}

body = document.getElementsByTagName(body)[0];