const popup = document.getElementById("popup");
const circleText = document.getElementById("circleText");
const popupImage = document.getElementById("popupImage");
const sound = document.getElementById("sound");

function showLetter(letter) {

  // RESET popup fully
  popup.classList.add("hidden");
  popup.classList.remove("show");
  popup.offsetWidth; // 👈 force reflow (CRITICAL)

  // Set content
  circleText.textContent = letter;
  popupImage.src = `images/abcwithimages/${letter}.png`;
  sound.src = `sounds/${letter}.mp3`;

  // Show popup
  popup.classList.remove("hidden");
  popup.classList.add("show");

  // Play sound
  sound.currentTime = 0;
  sound.play();

 
  // Auto close popup after 2 seconds
  setTimeout(() => {
    popup.classList.remove("show");
    popup.classList.add("hidden");
  }, 5000);
}
//for closing popup on clicking
popup.addEventListener("click", () => {
  popup.classList.remove("show");
  popup.classList.add("hidden");
});

 //confetti
  function launchConfetti() {
  confetti({  particleCount: 150,
    spread: 120,
    startVelocity: 30,
    gravity: 0.6,
    scalar: 1.2 });
}


