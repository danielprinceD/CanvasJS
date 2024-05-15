const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

context.beginPath();
context.strokeRect(10, 10, canvasWidth - 20, canvasHeight - 20);

const randomXY = () => {
  return {
    randomX: Math.random() * canvasWidth,
    randomY: Math.random() * canvasHeight,
  };
};
var count = 1;
class Circle {
  colors = ["red", "yellow", "green", "blue", "orange"];
  choose = Math.random() * this.colors.length;
  constructor(rad) {
    this.rad = rad;
  }

  draw() {
    context.beginPath();
    const rand = randomXY();
    context.fillStyle = "black";
    context.textBaseLine = "middle";
    context.textAlign = "center";
    context.font = "14px Arial";
    context.fillText(count++, rand.randomX, rand.randomY);
    context.strokeStyle = this.colors[Math.floor(this.choose)];
    context.arc(rand.randomX, rand.randomY, this.rad, 0, 2 * Math.PI);

    context.stroke();
  }
}
const rand = randomXY();
let cir = [];

for (let i = 1; i <= 10; i++) {
  newCir = new Circle(50);
  newCir.draw();
}
