class Stage {

 constructor(widthTiles, heightTiles) {
  this.widthTiles = widthTiles;
  this.heightTiles = heightTiles;
  this.TILE_SIZE = 85;
 }

 render() {
  this.element = this.elementFromHTML(`<div class="stage"></div>`);
  this.element.style.width = `${this.widthTiles * this.TILE_SIZE}px`
  this.element.style.height = `${this.heightTiles * this.TILE_SIZE}px`
 }

 mount(container) {
  console.log(container);
  this.render();
  this.update();
  container.appendChild(this.element)
  return this.element
 }

 update() {

 }

 elementFromHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  return div.firstChild;
 }

 getStageSize() {
  const stageSize = { width: this.widthTiles, height: this.heightTiles }
  console.log(stageSize);
  return stageSize
 }

}