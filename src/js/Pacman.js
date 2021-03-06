// export default class Pacman {

class Pacman {

   constructor(xpos, mouth, stage) {
      this.xpos = xpos;
      this.ypos = 0;
      this.mouth = mouth;
      this.bgPositionX = 0;
      this.bgPositionY = 0;
      this.facing = 'ArrowRight';
      this.TILE_SIZE = 85;
      this.stage = stage;
      this.widthTiles = stage.widthTiles;
      this.heightTiles = stage.heightTiles;
      this.score = 0;
      this.resultArray = ["medium", "tomb", "dark"];
      this.result = "light"
      this.numberApples = this.stage.data.apples.length
   }


   render() {
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
      if (this.result !== "tomb" && this.score < this.numberApples) {
         this.changeMouth()
         this.handleMove(direction);
      }
      this.update();
   }


   changeMouth() {
      if (this.mouth === "open") {
         this.bgPositionX += this.TILE_SIZE
      }
      else if (this.mouth === "closed") {
         this.bgPositionX -= this.TILE_SIZE
      }
      this.mouth = this.mouth === "open" ? "closed" : "open";
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


   steppedOnEntity(entityType) {
      const entity = this.stage.collisionDetection(this.xpos, this.ypos);
      if (entity && entity.type === entityType) {
         return entity
      }
   }

   handleMove(direction) {
      if (direction === 'ArrowRight') {
         if (this.canMoveRight()) {
            this.xpos++;
         }
      }
      else if (direction === 'ArrowLeft') {
         if (this.canMoveLeft()) {
            this.xpos--;
         }
      }
      else if (direction === 'ArrowDown') {
         if (this.canMoveDown()) {
            this.ypos--;
         }
      }
      else if (direction === 'ArrowUp') {
         if (this.canMoveUp()) {
            this.ypos++;
         }
      }
      this.facing = direction;
   }

   updateStatus() {
      const score = document.querySelector(".score")

      this.status = this.score === this.numberApples ? "winner" : this.result === "tomb" ? "loser" : "playing"


      if (this.status === "winner" || this.status === "loser") {
         const body = document.querySelector("body")
         const bodyBg = this.status === "winner" ? "rgba(0, 255, 0, 0.5)" : this.status === "loser" ? "rgba(255, 0, 0, 0.5)" : "";
         const heading = document.querySelector(".heading")
         const headingText = this.status === "winner" ? "YOU WON" : this.status === "loser" ? "YOU LOST" : "";

         const btn = document.querySelector(".btn")
         heading.textContent = headingText;
         body.style.background = bodyBg
         btn.style.display = "block"
      }
      else if (this.score < this.numberApples) {
         score.textContent = this.score
      }
   }


   update() {
      const apple = this.steppedOnEntity("apple")
      const bomb = this.steppedOnEntity("bomb")

      if (apple) {
         this.stage.removeEntity(apple);
         this.score++;
      }
      else if (bomb) {
         const randomIndex = this.result === "light" ? Math.floor(Math.random() * 2) : this.result === "medium" || this.result === "dark" ? Math.floor(Math.random() * 2 + 1) : 0;
         this.result = this.resultArray[randomIndex];
         if (this.result === "tomb") {
            this.element.className = "entity entity--tomb"
         }
         else if (this.result === "medium" || this.result === "dark") {
            this.element.className = `entity entity--pac pacboy-active-${this.result}`
         }
         this.stage.removeEntity(bomb);
      }

      const row = this.facing === "ArrowRight" ? 0 :
         this.facing === "ArrowLeft" ? 1 :
            this.facing === "ArrowDown" ? 2 :
               this.facing === "ArrowUp" ? 3 : ""

      this.bgPositionY = -row * this.TILE_SIZE

      this.updateStatus();

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


