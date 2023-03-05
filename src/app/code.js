"use strict";

const messi = document.querySelector(".img");
const puntaje = document.querySelector("#puntaje");
let intervalo;
let timeout;
let cont = 0;

messi.addEventListener("click", () => {
  cont++;
  puntaje.textContent = cont;
  messi.classList.toggle("llora");
  clearInterval(intervalo);
  clearTimeout(timeout);
  messi.style.opacity = 1;
  messi.style.width = "18vmax";
  messi.style.height = "18vmax";

  setTimeout(() => {
    messi.classList.toggle("llora");
    messi.style.width = "13vmax";
    messi.style.height = "13vmax";

    randomPosition();
  }, 1500);
});

function randomPosition() {
  intervalo = setInterval(() => {
    messi.style.opacity = 0;
    messi.style.width = "6vmax";
    messi.style.height = "6vmax";
    timeout = setTimeout(() => {
      messi.style.opacity = 1;
      messi.style.width = "13vmax";
      messi.style.height = "13vmax";
    }, 200);

    messi.style.right = `${Math.floor(Math.random() * 87)}%`;
    messi.style.bottom = `${Math.floor(Math.random() * 87)}%`;
  }, 600);
}

randomPosition();
