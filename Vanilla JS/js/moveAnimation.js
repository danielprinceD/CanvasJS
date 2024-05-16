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
var count = 0;
class Circle {
  constructor(posx, posy, rad, speed) {
    this.rad = rad;
    this.rand = randomXY();
    this.speedX = speed;
    this.speedY = speed;
    this.posX = posx;
    this.posY = posy;
    this.dx = speed;
    this.dy = speed;
    console.log(this.dx);
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = "black";
    context.textBaseLine = "middle";
    context.textAlign = "center";
    context.font = "14px Arial";
    context.strokeStyle = "red";
    context.fillText(count, this.posX, this.posY);
    context.arc(this.posX, this.posY, this.rad, 0, 2 * Math.PI);

    context.stroke();
  }
  update() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    this.draw(context);
    if (canvasHeight < this.posY + this.rad || 0 >= this.posY - this.rad) {
      this.dy = -this.dy;
      count++;
    }

    if (canvasWidth < this.posX + this.rad || 0 >= this.posX - this.rad) {
      this.dx = -this.dx;
      count++;
    }

    this.posX += this.dx;
    this.posY += this.dy;
  }
}

let cir = new Circle(100, 100, 50, 2);
cir.draw(context);
function updater() {
  requestAnimationFrame(updater);
  cir.update();
}

updater();
