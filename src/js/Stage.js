class Stage {

 constructor(widthTiles, heightTiles, data) {
  this.widthTiles = widthTiles;
  this.heightTiles = heightTiles;
  this.TILE_SIZE = 85;
  this.entities = [];
  this.data = { apples: data.apples.map(item => ({ ...item, type: "apple" })), walls: data.walls.map(item => ({ ...item, type: "wall" })), bombs: data.bombs.map(item => ({ ...item, type: "bomb" })) }
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

  Object.keys(this.data).forEach((key) => {
   this.data[key].forEach(item => {
    this.createEntity(item)
   })
  })


  return this.element
 }

 createEntity({ x, y, type }) {
  const entity = new Entity({ x, y, type });
  entity.mount(this.element)
  this.entities.push(entity);
 }

 removeEntity(entity) {
  entity.unmount(this.element)
  this.entities = this.entities.filter((element) => !(element.x === entity.x && element.y === entity.y))
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