const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

class Image {
  constructor(path, x, y, width, height) {
    this.path = path;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw(){
     
  }
}

function createImage(context, path, x, y, w, h) {
  let Image = document.createElement("img");
  Image.src = path;
  Image.onload = () => {
    context.drawImage(Image, x, y, w, h);
  };
}

let image = new Image("https://picsum.photos/200/300", 100, 100, 250, 250);
createImage(context, image.path, image.x, image.y, image.width, image.height);
