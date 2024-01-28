
//buttons 5-6 will go through the descriptions using previous and next buttons

const reviews = [
    {
      id: 1,
      name: 'Harry',
      job: 'Pilot',
      img: 'harry.jpg',
      text: "Harry loves his job in Air Canada. As a pilot, he sees his job is the utmost priority, ensuring a safe and comfortable travel for everybody aboard.",
    },
    {
      id: 2,
      name: 'Jenny',
      job: 'Fight Attendant',
      img: 'jenny.jpg',
      text: 'Jenny is a hard people pleaser. Ever since she joined the Air Canada team, shes been doing her job splendidly.',
    },
    {
      id: 3,
      name: 'Leo',
      job: 'Ramp Agent',
      img: 'leo.png',
      text: 'Leo and the other Ramp Agents are the unseen yet crucial part of Air Canada. They keep the ball rolling with their help on the aircraft.',
    },
    {
      id: 4,
      name: 'Mark',
      job: 'Aircraft maintenance',
      img: 'mark.jpg',
      text: 'Mark and the Maintenance crew help make sure that the aircraft is safe and operable.',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.getElementsByClassName('.prev-btn')[0];
  const nextBtn = document.getElementsByClassName('.next-btn')[0];
  const randomBtn = document.getElementsByClassName('.random-btn')[0];

  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });


  //Button 1-3 Like and Dislike, uses if/else arrays and loops to allow the counter to go up or down. Will turn red if negative will turn green if postive
  let count = 0;
  const value = document.querySelector("#value");
  const btns = document.querySelectorAll(".btn");
  const randt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    let random = 0;
  for (let i = 0; i < 1; i++) {
    random += randt[getRandomNumber()];
  }

    if (styles.contains("Third")) {
      count--;
    } else if (styles.contains("First")) {
      count++;}
      else if  (styles.contains("Second")){
        count = 0;
      }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "blue";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

function getRandomNumber() {
    return Math.floor(Math.random() * randt.length);
  }
 

  //Color changer button uses an array and random function with a loop to sort through hex values then assigns that value to change the backround color

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Nom = document.getElementById("Fourth");
const color = document.querySelector(".color");

Nom.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
 document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//Media query in the smaller screen form, will create toggle the navbar into a kind of dropdown.
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});

//Airplane Button removes the navbar from the screen and there is another button that reveals it again. uses if/else to work

function myFunction() {
  var x = document.getElementById("Hello");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

//Random button uses random functions and an array so it can cycle through statments that will replace the title

const rando = document.getElementById("Seventh");

rando.addEventListener("click", function(){
  let array = ["Thank you for stopping by.", "Come again next time", "See you next time, safe travels.", "#notsponsored"]
  var random = array[Math.floor(Math.random() * array.length)];
  document.getElementById("wawa").innerHTML=random;
})

