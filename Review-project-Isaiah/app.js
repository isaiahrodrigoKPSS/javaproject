// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Kafka',
    job: 'Leader',
    img: 'kafka.jpg',
    text: "A member of the Stellaron Hunters. A dashing, collected, and professional beauty. Used the enchantment of Spirit Whisper to set up Trailblazer to absorb the Stellaron. Her hobby is shopping for and organizing her collection of coats.",
  },
  
    {
    id: 2,
    name: 'Silver Wolf',
    job: 'Counter-intelligence',
    img: 'silverwolf.jpg',
    text: "A member of the Stellaron Hunters and a genius hacker. She sees the universe as a massive immersive simulation game and has fun with it. She's mastered the skill known as aether editing, which can be used to tamper with the data of reality.",
  },
  {
    id: 3,
    name: 'Sam',
    job: 'Vanguard',
    img: 'sam.jpg',
    text: 'A member of the Stellaron hunters and a fearsome killing machine. Little is known about Sam. Deathly effiecient in their job, swift to dispatch and swift to kill.',
  },
  {
    id: 4,
    name: 'Blade',
    job: 'Swordsman',
    img: 'blade.jpg',
    text: "A member of the Stellaron Hunters, and a swordsman who abandoned his body to become a blade. Pledges loyalty to Destiny's Slave, and possesses a terrifying self-healing ability.",
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const first = document.querySelector('.first');
const last = document.querySelector('.last');


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
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

first.addEventListener('click', function () {
  console.log('hello');

  currentItem = 0;

  showPerson(currentItem);
});

last.addEventListener('click', function () {
  console.log('hello');

  currentItem = 3;

  showPerson(currentItem);
});
