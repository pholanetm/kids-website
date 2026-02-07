/////////////////////////////////////////////////
// BIRD DATA (30 birds → 2 pages)
/////////////////////////////////////////////////

const birds = [
  "peacock","sparrow","crow","parrot","pigeon",
"myna","kingfisher","bulbul","koel","eagle",
"owl","vulture","crane","heron","stork",

"duck","goose","quail","lapwing","woodpecker",
"sunbird","hornbill","kite","falcon","weaverbird",
"drongo","barbet","roller","flamingo","ibis"

];

const PAGE_SIZE = 15;
let currentPage = 0;

/////////////////////////////////////////////////
// ELEMENTS
/////////////////////////////////////////////////

const grid = document.getElementById("birdGrid");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupName = document.getElementById("popupName");
const nextBtn = document.getElementById("nextBtn");

/////////////////////////////////////////////////
// 🚀 ULTRA-FAST PRELOAD CACHE
/////////////////////////////////////////////////

const imageCache = {};
const soundCache = {};

birds.forEach(name => {

  // preload image
  const img = new Image();
  img.src = `images/birds/${name}.png`;
  imageCache[name] = img;

  // preload sound
  const audio = new Audio();
  audio.src = `sounds/birds/${name}.mp3`;
  audio.preload = "auto";
  soundCache[name] = audio;

});

/////////////////////////////////////////////////
// BUILD PAGE GRID
/////////////////////////////////////////////////

function loadPage() {

  grid.innerHTML = "";

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  birds.slice(start, end).forEach(name => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${imageCache[name].src}">
      <p>${capitalize(name)}</p>
    `;

    card.onclick = () => showBird(name);

    grid.appendChild(card);
  });
}

/////////////////////////////////////////////////
// NEXT BUTTON
/////////////////////////////////////////////////

nextBtn.onclick = () => {

  currentPage++;

  if (currentPage * PAGE_SIZE >= birds.length)
    currentPage = 0;

  loadPage();
};

/////////////////////////////////////////////////
// POPUP DISPLAY
/////////////////////////////////////////////////

function showBird(name) {

  popupImg.src = imageCache[name].src;
  popupName.textContent = capitalize(name);

  popup.classList.remove("hidden");

  const sound = soundCache[name];
  sound.currentTime = 0;
  sound.play();

  launchConfetti();
}

popup.onclick = () => popup.classList.add("hidden");

/////////////////////////////////////////////////
// CONFETTI
/////////////////////////////////////////////////

function launchConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

/////////////////////////////////////////////////
// HELPER
/////////////////////////////////////////////////

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/////////////////////////////////////////////////
// INIT
/////////////////////////////////////////////////

loadPage();
