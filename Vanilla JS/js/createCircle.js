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

class Circle {
  colors = ["red", "yellow", "green", "blue", "orange"];
  choose = Math.random() * this.colors.length;
  constructor(rad) {
    this.rad = rad;
  }

  draw() {
    context.beginPath();
    const rand = randomXY();
    context.fillStyle = this.colors[Math.floor(this.choose)];
    context.arc(rand.randomX, rand.randomY, this.rad, 0, 2 * Math.PI);

    context.fill();
  }
}
const rand = randomXY();
let cir = [];

for (let i = 1; i <= 100; i++) {
  newCir = new Circle(20);
  newCir.draw();
}
