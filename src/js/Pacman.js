// export default class Pacman {

class Pacman {

 constructor(xpos, mouth, stage) {
  this.xpos = xpos;
  this.ypos = 0;
  this.mouth = mouth;
  this.bgPositionX = 0;
  this.bgPositionY = 0;
  this.facing = "right";
  this.TILE_SIZE = 85;
  this.stage = stage;
  this.widthTiles = stage.widthTiles;
  this.heightTiles = stage.heightTiles;

 }


 render() {
  // this.container = this.elementFromHTML(`<div class="stage"></div>`)
  this.element = this.elementFromHTML(`<div class="entity entity--pac pacboy-active-light"></div>`);
  document.addEventListener('keydown', (event) => {
   this.move(event.code)
  })
 }

 mount(container) {

  this.render();
  this.update();
  container.appendChild(this.element)
  return this.element
 }


 move(direction) {
  if (this.mouth === "open") {
   this.bgPositionX += this.TILE_SIZE
  }
  else if (this.mouth === "closed") {
   this.bgPositionX -= this.TILE_SIZE
  }
  this.handleMove(direction);
  this.update();
 }

 canMoveRight() {
  const entity = this.stage.collisionDetection(this.xpos + 1, this.ypos);
  if (this.xpos >= this.widthTiles - 1 || (entity && entity.type === 'wall')) {
   return false;
  }
  return true;
 }
 canMoveLeft() {
  const entity = this.stage.collisionDetection(this.xpos - 1, this.ypos);
  if (this.xpos <= 0 || (entity && entity.type === 'wall')) {
   return false;
  }
  return true;
 }
 canMoveUp() {
  const entity = this.stage.collisionDetection(this.xpos, this.ypos + 1);
  if (this.ypos >= this.heightTiles - 1 || (entity && entity.type === 'wall')) {
   return false;
  }
  return true;
 }
 canMoveDown() {
  const entity = this.stage.collisionDetection(this.xpos, this.ypos - 1);
  if (this.ypos <= 0 || (entity && entity.type === 'wall')) {
   return false;
  }
  return true;
 }

 handleMove(direction) {
  if (direction === 'ArrowRight') {
   if (this.canMoveRight()) {
    this.xpos++;
   }
   this.facing = 'right';
  }
  else if (direction === 'ArrowLeft') {
   if (this.canMoveLeft()) {
    this.xpos--;
   }
   this.facing = "left"
  }
  else if (direction === 'ArrowDown') {
   if (this.canMoveDown()) {
    this.ypos--;
   }
   this.facing = "down"
  }
  else if (direction === 'ArrowUp') {
   if (this.canMoveUp()) {
    this.ypos++;
   }
   this.facing = "up"
   // }

  }

  // else if (this.facing === "left") {
  //  if (direction === 'ArrowRight' && this.xpos < this.widthTiles - 1) {
  //   this.bgPositionY += this.TILE_SIZE;
  //   this.xpos++;
  //   this.facing = "right"

  //  }
  //  else if (direction === 'ArrowLeft' && this.xpos > 0) {
  //   this.xpos--;
  //  }
  //  else if (direction === 'ArrowDown' && this.ypos > 0) {

  //   this.bgPositionY -= this.TILE_SIZE;
  //   this.ypos--;
  //   this.facing = "down"

  //  }
  //  else if (direction === 'ArrowUp' && this.ypos < this.heightTiles - 1) {

  //   this.bgPositionY -= this.TILE_SIZE * 2;
  //   this.ypos++;
  //   this.facing = "up"
  //  }


  // }
  // else if (this.facing === "down") {
  //  if (direction === 'ArrowRight' && this.xpos < this.widthTiles - 1) {
  //   this.bgPositionY += this.TILE_SIZE * 2;
  //   this.xpos++;
  //   this.facing = "right"
  //  }
  //  else if (direction === 'ArrowLeft' && this.xpos > 0) {
  //   this.bgPositionY += this.TILE_SIZE;
  //   this.xpos--;
  //   this.facing = "left"
  //  }
  //  else if (direction === 'ArrowDown' && this.ypos > 0) {

  //   this.ypos--
  //  }
  //  else if (direction === 'ArrowUp' && this.ypos < this.heightTiles - 1) {

  //   this.bgPositionY -= this.TILE_SIZE;
  //   this.ypos++;
  //   this.facing = "up"
  //  }


  // }
  // else if (this.facing === "up") {
  //  if (direction === 'ArrowRight' && this.xpos < this.widthTiles - 1) {
  //   this.bgPositionY += this.TILE_SIZE * 3;
  //   this.xpos++;
  //   this.facing = "right"
  //  }
  //  else if (direction === 'ArrowLeft' && this.xpos > 0) {
  //   this.bgPositionY += this.TILE_SIZE * 2;
  //   this.xpos--;
  //   this.facing = "left"
  //  }
  //  else if (direction === 'ArrowDown' && this.ypos > 0) {
  //   this.bgPositionY += this.TILE_SIZE;
  //   this.ypos--;
  //   this.facing = "down"
  //  }
  //  else if (direction === 'ArrowUp' && this.ypos < this.heightTiles - 1) {

  //   this.ypos++;
  //  }


  // }



  this.mouth = this.mouth === "open" ? "closed" : "open";

 }

 update() {

  const row = this.facing === "right" ? 0 :
   this.facing === "left" ? 1 :
    this.facing === "down" ? 2 :
     this.facing === "up" ? 3 : ""
  console.log(row);

  this.bgPositionY = -row * this.TILE_SIZE
  console.log(this.bgPositionY);

  this.element.style.backgroundPositionX = `${this.bgPositionX}px`;
  this.element.style.backgroundPositionY = `${this.bgPositionY}px`;
  this.element.style.left = `${this.xpos * this.TILE_SIZE}px`
  this.element.style.bottom = `${this.ypos * this.TILE_SIZE}px`
 }

 elementFromHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  return div.firstChild;
 }


}


