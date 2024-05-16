const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

const data = [200, 50, 120, -150, 50, 90, 22, 0];
const distance = canvasWidth / data.length;

context.beginPath();
context.strokeStyle = "white";
context.moveTo(0, data[0]);
context.fillStyle = "royalblue";
data.forEach((ele, ind) => {
  const new_dist = distance * (ind + 1);
  context.lineTo(new_dist, data[0] - ele);
});

context.fill();
context.stroke();
