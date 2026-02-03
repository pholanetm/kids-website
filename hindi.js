const popup = document.getElementById("popup");
const circle = document.getElementById("circle");
const popupImage = document.getElementById("popupImage");

const data = {
  "अ": {
    image: "images/anaar.png",
    sound: "sounds/a_se_anaar.mp3"
  },
  "आ": {
    image: "images/aam.png",
    sound: "sounds/aa_se_aam.mp3"
  },
  "इ": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "ई": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "उ": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "ऊ": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "ऋ": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "ए": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "ऐ": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "ओ": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "औ": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "अं": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  },
  "अः": {
    image: "images/imli.png",
    sound: "sounds/e_se_imli.mp3"
  }
};

document.querySelectorAll(".letters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const letter = btn.dataset.letter;

    circle.innerText = letter;
    popupImage.src = data[letter].image;

    popup.classList.remove("hidden");

    const audio = new Audio(data[letter].sound);
    audio.play();
  });
});

// tap anywhere to close
popup.addEventListener("click", () => {
  popup.classList.add("hidden");
});
