'use strict';
// import Pacman from "./Pacman";

const container = document.querySelector(".container")

const stage = new Stage(12, 6);
const pac = new Pacman(0, "open", stage.getStageSize())
const entity = new Entity()



const stageDiv = stage.mount(container)
pac.mount(stageDiv)
