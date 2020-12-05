console.log("n......m,.........,m");

const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.querySelector("sign-up-btn");
const container = document.getElementById(".container");

sign_up_btn.addEventListener("click", () => {
    console.log("welllllll");
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    console.log("welllllll ----");
  container.classList.remove("sign-up-mode");
});