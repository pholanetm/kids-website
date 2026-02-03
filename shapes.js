const shapes = ["circle", "square"];
let answer = shapes[Math.floor(Math.random()*2)];

document.getElementById("question").innerText =
  "Tap the " + answer;

function check(s) {
  if (s === answer) {
    alert("🎉 Correct!");
  } else {
    alert("❌ Try again");
  }
}

// cursor option start-- add this code on every .js file
document.addEventListener("DOMContentLoaded", () => {
    const savedCursor = localStorage.getItem("kidsCursor");
    if (savedCursor) {
        document.documentElement.style.cursor = savedCursor;
    }
});
// cursor option end-- 