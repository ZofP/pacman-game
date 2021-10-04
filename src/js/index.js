'use strict';

const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const width = 12;
const height = 6;

fetch(`https://classes.codingbootcamp.cz/assets/classes/api/pacman.php?width=${width}&height=${height}`).then(response => response.json()).then(json => {
 const data = json;
 // console.log(data);
 const stage = new Stage(width, height, data);
 const pac = new Pacman(0, "open", stage)
 const stageDiv = stage.mount(container)
 pac.mount(stageDiv)
})


const reloadPage =
 () => {
  window.location.reload();
  btn.style.display = "none"
 }
btn.addEventListener("click", reloadPage)
document.addEventListener("keydown", (e) => {
 if ((e.code === "Enter" || e.code === "Space") && btn.style.display === "block") {
  reloadPage()
 }
})







// stage.removeEntity(pac)