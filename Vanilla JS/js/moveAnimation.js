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

let cir = new Circle(100, 100, 50, 2, "A");
cir.draw(context);
let cir2 = new Circle(300, 110, 100, 3, "B");
cir2.draw(context);
function updater() {
  requestAnimationFrame(updater);
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  let dist = getDistance(cir.posX, cir.posY, cir2.posX, cir2.posY);

  if (dist <= cir2.rad + cir.rad) {
    cir.dx = -cir.dx;
    cir.dy = -cir.dy;
    cir2.dx = -cir2.dx;
    cir2.dy = -cir2.dy;
  }
  cir.update();
  cir2.update();
}

updater();
