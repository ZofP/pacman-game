class Stage {

 constructor(widthTiles, heightTiles) {
  this.widthTiles = widthTiles;
  this.heightTiles = heightTiles;
  this.TILE_SIZE = 85;
  this.entities = [];

 }

 render() {
  this.element = this.elementFromHTML(`<div class="stage"></div>`);
  this.element.style.width = `${this.widthTiles * this.TILE_SIZE}px`
  this.element.style.height = `${this.heightTiles * this.TILE_SIZE}px`
 }

 mount(container) {
  this.render();
  this.update();
  container.appendChild(this.element)

  this.createEntity(5, 5, "apple")
  this.createEntity(2, 4, "wall")
  this.createEntity(2, 5, "wall")
  this.createEntity(1, 3, "bomb")

  const detected = this.collisionDetection(2, 4)
  console.log(detected)

  return this.element
 }

 createEntity(x, y, type) {
  const entity = new Entity(x, y, type);
  entity.mount(this.element)
  this.entities.push(entity);
 }

 update() {

 }

 elementFromHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  return div.firstChild;
 }

 collisionDetection(x, y) {
  const entityFound = this.entities.find(entity => x === entity.x && y === entity.y);
  return entityFound
 }

}