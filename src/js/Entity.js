class Entity {

 constructor(x, y, type) {
  this.x = x
  this.y = y
  this.type = type
  this.TILE_SIZE = 85
 }

 render() {
  this.element = this.elementFromHTML(`<div class="entity entity--${this.type}"></div>`);
  this.element.style.left = `${this.x * this.TILE_SIZE}px`
  this.element.style.bottom = `${this.y * this.TILE_SIZE}px`
 }

 mount(container) {
  this.render();
  this.update();
  container.appendChild(this.element)
  return this.element
 }

 unmount(container) {
  if (this.element) {
   container.removeChild(this.element);
   this.element = null;
  }

 }

 update() {

 }

 elementFromHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  return div.firstChild;
 }

}