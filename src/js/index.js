'use strict';

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








// stage.removeEntity(pac)