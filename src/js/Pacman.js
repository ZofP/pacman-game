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
  this.score = 0;

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

 canEatApple() {
  const entity = this.stage.collisionDetection(this.xpos, this.ypos);
  if (entity && entity.type === 'apple') {
   return entity
  }


 }
 steppedOnBomb() {
  const entity = this.stage.collisionDetection(this.xpos, this.ypos);
  if (entity && entity.type === 'bomb') {
   return entity
  }


 }

 handleMove(direction) {
  if (this.result !== 0) {

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

   }
   this.mouth = this.mouth === "open" ? "closed" : "open";

  }
 }

 update() {
  const apple = this.canEatApple()
  const bomb = this.steppedOnBomb()

  if (apple) {
   stage.removeEntity(apple);
   this.score++;
  }
  else if (bomb) {

   this.result = Math.floor(Math.random() * 2);
   if (this.result === 0) {
    this.element.className = "entity entity--tomb"
   }
   else if (this.result === 1) {

   }

  }

  const row = this.facing === "right" ? 0 :
   this.facing === "left" ? 1 :
    this.facing === "down" ? 2 :
     this.facing === "up" ? 3 : ""

  this.bgPositionY = -row * this.TILE_SIZE

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


