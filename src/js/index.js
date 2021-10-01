'use strict';

const container = document.querySelector(".container")

const stage = new Stage(12, 6);
const pac = new Pacman(0, "open", stage)



const stageDiv = stage.mount(container)
pac.mount(stageDiv)

