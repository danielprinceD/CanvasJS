const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

class Circle {
  constructor(x, y, rad, color) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
  }
  draw(context) {
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 4;
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
  changeColor(newColor) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    this.color = newColor;
    this.draw(context);
  }
  isClicked(x, y) {
    const dist = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    if (dist <= this.rad) return true;
    return false;
  }
}

var cir = new Circle(100, 100, 50, "red");
cir.draw(context);

canvas.addEventListener("mousemove", (e) => {
  let canvasPos = canvas.getBoundingClientRect();
  let x = e.clientX - canvasPos.left;
  let y = e.clientY - canvasPos.top;
  if (cir.isClicked(x, y)) cir.changeColor("blue");
  else cir.changeColor("red");
});
