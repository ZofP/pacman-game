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

  this.createEntity(5, 3, "apple")
  this.createEntity(8, 5, "apple")
  this.createEntity(10, 5, "apple")
  this.createEntity(2, 4, "wall")
  this.createEntity(3, 5, "wall")
  this.createEntity(6, 4, "wall")
  this.createEntity(6, 3, "wall")
  this.createEntity(2, 5, "wall")
  this.createEntity(3, 5, "wall")
  this.createEntity(4, 5, "wall")
  this.createEntity(5, 5, "wall")
  this.createEntity(8, 4, "wall")
  this.createEntity(11, 4, "wall")
  this.createEntity(10, 4, "wall")
  this.createEntity(9, 4, "wall")
  this.createEntity(1, 3, "bomb")
  this.createEntity(1, 3, "bomb")
  this.createEntity(1, 4, "bomb")
  this.createEntity(2, 3, "bomb")


  return this.element
 }

 createEntity(x, y, type) {
  const entity = new Entity(x, y, type);
  entity.mount(this.element)
  this.entities.push(entity);
 }

 removeEntity(entity) {
  console.log("before", this.entities);
  entity.unmount(this.element)
  console.log(entity)
  this.entities = this.entities.filter((element) => !(element.x === entity.x && element.y === entity.y))

  console.log("after", this.entities);

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
  // console.log("collision", this.entities);
  return entityFound
 }

}