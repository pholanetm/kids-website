////////////////////////////////////////////////////////
// IMAGE MAP (same image repeated)
////////////////////////////////////////////////////////

const numberImages = {
  1: "images/panda.png",
  2: "images/baby-elephant.png",
  3: "images/world.png",
  4: "images/baby-elephant.png",
  5: "images/baby-panda.png",
  6: "images/tiger-dr.png",
  7: "images/baby-panda.png",
  8: "images/winnie-pooh.png",
  9: "images/tiger-dr.png",
  10: "images/panda.png",
  11: "images/panda.png",
  12: "images/panda.png",
  13: "images/panda.png",
  14: "images/panda.png",
  15: "images/panda.png",
  16: "images/panda.png",
  17: "images/panda.png",
  18: "images/panda.png",
  19: "images/panda.png",
  20: "images/panda.png",
  21: "images/panda.png",
  22: "images/panda.png",
  23: "images/panda.png",
  24: "images/panda.png",
  25: "images/panda.png"
};

////////////////////////////////////////////////////////
// ELEMENTS
////////////////////////////////////////////////////////

const box = document.getElementById("numbers");
const overlay = document.getElementById("counterOverlay");
const square = document.getElementById("counterSquare");
const circle = document.getElementById("counterCircle");
const counterValue = document.getElementById("counterValue");
const imageContainer = document.getElementById("imageContainer");

let countInterval;

////////////////////////////////////////////////////////
// CREATE NUMBERS
////////////////////////////////////////////////////////

for (let i = 1; i <= 25; i++) {
  const d = document.createElement("div");
  d.className = "number";
  d.textContent = i;
  d.onclick = () => startCounting(i);
  box.appendChild(d);
}

////////////////////////////////////////////////////////
// COUNTING
////////////////////////////////////////////////////////

function startCounting(finalNumber) {
  clearInterval(countInterval);

  let count = 0;
  counterValue.textContent = "0";
  imageContainer.innerHTML = "";

  overlay.style.display = "flex";

  square.style.animation = "none";
  square.offsetHeight;
  square.style.animation = "popup 0.35s ease forwards";

  countInterval = setInterval(() => {
    count++;
    counterValue.textContent = count;

    new Audio(`sounds/${count}.mp3`).play();
    circle.style.background = randomGradient();

    imageContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      img.src = numberImages[finalNumber] || "images/star.png";
      img.className = "countImg";
      imageContainer.appendChild(img);
    }

    if (count === finalNumber) {
      clearInterval(countInterval);
      launchConfetti();
    }
  }, 600);
}


////////////////////////////////////////////////////////
// CLOSE EARLY
////////////////////////////////////////////////////////

square.onclick = () => {
  clearInterval(countInterval);
  overlay.style.display = "none";
};


////////////////////////////////////////////////////////
// HELPERS
////////////////////////////////////////////////////////

function randomGradient() {
  return `linear-gradient(135deg,
    hsl(${Math.random()*360},85%,55%),
    hsl(${Math.random()*360},85%,45%))`;
}

function launchConfetti() {
  confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
}
