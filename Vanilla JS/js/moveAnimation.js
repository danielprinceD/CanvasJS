const canvas = document.getElementById("moveAnime");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

const randomXY = () => {
  return {
    randomX: Math.random() * canvasWidth,
    randomY: Math.random() * canvasHeight,
  };
};
class Circle {
  constructor(posx, posy, rad, speed, text) {
    this.rad = rad;
    this.rand = randomXY();
    this.speedX = speed;
    this.speedY = speed;
    this.posX = posx;
    this.posY = posy;
    this.dx = speed;
    this.dy = speed;
    this.text = text;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = "black";
    context.textBaseLine = "middle";
    context.textAlign = "center";
    context.font = "14px Arial";
    context.strokeStyle = "red";
    context.fillText(this.text, this.posX, this.posY);
    context.arc(this.posX, this.posY, this.rad, 0, 2 * Math.PI);

    context.stroke();
  }
  update() {
    this.draw(context);
    if (canvasHeight < this.posY + this.rad || 0 >= this.posY - this.rad) {
      this.dy = -this.dy;
    }

    if (canvasWidth < this.posX + this.rad || 0 >= this.posX - this.rad) {
      this.dx = -this.dx;
    }

    this.posX += this.dx;
    this.posY += this.dy;
  }
}

let getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let all_circle = [];

var minMax = function (min, max) {
  return Math.random() * (max - min) + min;
};

for (let i = 0; i < 10; i++) {
  let rad = 50;
  let x = minMax(rad, canvasWidth - rad);
  let y = minMax(rad, canvasHeight - rad);
  let cir = new Circle(x, y, rad, 2, String.fromCharCode(65 + i));
  cir.draw(context);
  all_circle.push(cir);
}
function updater() {
  requestAnimationFrame(updater);
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  all_circle.forEach((e) => {
    e.update();
  });
}

updater();
