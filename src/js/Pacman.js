// export default class Pacman {

class Pacman {

 constructor(xpos, mouth, stageSize) {
  this.xpos = xpos;
  this.ypos = 0;
  this.mouth = mouth;
  this.bgPositionX = 0;
  this.bgPositionY = 0;
  this.facing = "right";
  this.TILE_SIZE = 85;
  this.widthTiles = stageSize.width;
  this.heightTiles = stageSize.height;

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

 handleMove(direction) {
  if (this.facing === "right") {
   if (direction === 'ArrowRight' && this.xpos < this.widthTiles - 1) {
    this.xpos++;
   }
   else if (direction === 'ArrowLeft' && this.xpos > 0) {
    this.bgPositionY -= this.TILE_SIZE;
    this.xpos--;
    this.facing = "left"
   }
   else if (direction === 'ArrowDown' && this.ypos > 0) {

    this.bgPositionY -= this.TILE_SIZE * 2;
    this.ypos--;
    this.facing = "down"
   }
   else if (direction === 'ArrowUp' && this.ypos < this.heightTiles - 1) {

    this.bgPositionY -= this.TILE_SIZE * 3;
    this.ypos++;
    this.facing = "up"
   }


  }
  else if (this.facing === "left") {
   if (direction === 'ArrowRight' && this.xpos < this.widthTiles - 1) {
    this.bgPositionY += this.TILE_SIZE;
    this.xpos++;
    this.facing = "right"

   }
   else if (direction === 'ArrowLeft' && this.xpos > 0) {
    this.xpos--;
   }
   else if (direction === 'ArrowDown' && this.ypos > 0) {

    this.bgPositionY -= this.TILE_SIZE;
    this.ypos--;
    this.facing = "down"

   }
   else if (direction === 'ArrowUp' && this.ypos < this.heightTiles - 1) {

    this.bgPositionY -= this.TILE_SIZE * 2;
    this.ypos++;
    this.facing = "up"
   }


  }
  else if (this.facing === "down") {
   if (direction === 'ArrowRight' && this.xpos < this.widthTiles - 1) {
    this.bgPositionY += this.TILE_SIZE * 2;
    this.xpos++;
    this.facing = "right"
   }
   else if (direction === 'ArrowLeft' && this.xpos > 0) {
    this.bgPositionY += this.TILE_SIZE;
    this.xpos--;
    this.facing = "left"
   }
   else if (direction === 'ArrowDown' && this.ypos > 0) {

    this.ypos--
   }
   else if (direction === 'ArrowUp' && this.ypos < this.heightTiles - 1) {

    this.bgPositionY -= this.TILE_SIZE;
    this.ypos++;
    this.facing = "up"
   }


  }
  else if (this.facing === "up") {
   if (direction === 'ArrowRight' && this.xpos < this.widthTiles - 1) {
    this.bgPositionY += this.TILE_SIZE * 3;
    this.xpos++;
    this.facing = "right"
   }
   else if (direction === 'ArrowLeft' && this.xpos > 0) {
    this.bgPositionY += this.TILE_SIZE * 2;
    this.xpos--;
    this.facing = "left"
   }
   else if (direction === 'ArrowDown' && this.ypos > 0) {
    this.bgPositionY += this.TILE_SIZE;
    this.ypos--;
    this.facing = "down"
   }
   else if (direction === 'ArrowUp' && this.ypos < this.heightTiles - 1) {

    this.ypos++;
   }


  }



  this.mouth = this.mouth === "open" ? "closed" : "open";
  console.log(this.xpos);
  console.log(this.ypos);
  console.log(this.widthTiles);
  console.log(this.heightTiles);
 }

 update() {
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

// constructor(xpos, this.mouth) {

//  this.xpos = xpos;
//  this.mouth = mouth;
//  this.bgPositionX = 0;
//  this.bgPositionY = 0;
//  this.facing = "right";
//  this.ypos = 0;
// }


// render() {

// }

// mount() {

// }


// move(direction) {
//  if (mouth === "open") {
//   this.bgPositionX += TILE_SIZE
//  }
//  else if (mouth === "closed") {
//   this.bgPositionX -= TILE_SIZE
//  }
//  this.handleMove(direction);
// }

// handleMove(direction) {
//  if (this.facing === "right") {
//   if (direction === 'ArrowRight') {
//    this.xpos += TILE_SIZE;
//   }
//   else if (direction === 'ArrowLeft') {
//    this.bgPositionY -= TILE_SIZE;
//    this.xpos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowDown') {

//    this.bgPositionY -= TILE_SIZE * 2;
//    this.ypos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowUp') {

//    this.bgPositionY -= TILE_SIZE * 3;
//    this.ypos += TILE_SIZE;
//   }


//  }
//  if (this.facing === "left") {
//   if (direction === 'ArrowRight') {
//    this.bgPositionY += TILE_SIZE;
//    this.xpos += TILE_SIZE;
//   }
//   else if (direction === 'ArrowLeft') {
//    this.xpos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowDown') {

//    this.bgPositionY -= TILE_SIZE;
//    this.ypos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowUp') {

//    this.bgPositionY -= TILE_SIZE * 2;
//    this.ypos += TILE_SIZE;
//   }


//  }
//  if (this.facing === "down") {
//   if (direction === 'ArrowRight') {
//    this.bgPositionY += TILE_SIZE * 2;
//    this.xpos += TILE_SIZE;
//   }
//   else if (direction === 'ArrowLeft') {
//    this.bgPositionY += TILE_SIZE;
//    this.xpos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowDown') {

//    this.ypos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowUp') {

//    this.bgPositionY -= TILE_SIZE;
//    this.ypos += TILE_SIZE;
//   }


//  }
//  if (this.facing === "up") {
//   if (direction === 'ArrowRight') {
//    this.bgPositionY += TILE_SIZE * 3;
//    this.xpos += TILE_SIZE;
//   }
//   else if (direction === 'ArrowLeft') {
//    this.bgPositionY += TILE_SIZE * 2;
//    this.xpos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowDown') {
//    this.bgPositionY += TILE_SIZE;
//    this.ypos -= TILE_SIZE;
//   }
//   else if (direction === 'ArrowUp') {

//    this.ypos += TILE_SIZE;
//   }


//  }



//  pacman.style.backgroundPositionX = `${this.bgPositionX}px`;
//  pacman.style.backgroundPositionY = `${this.bgPositionY}px`;
//  mouth = mouth === "open" ? "closed" : "open"
// }

// update() {
//  pacman.style.left = `${this.xpos}px`
//  pacman.style.bottom = `${this.ypos}px`
// }

