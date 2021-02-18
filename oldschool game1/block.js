const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;
let hue = 1;
let blockArray = [];
class block {
  constructor(x) {
    this.x = x;
    this.y = -canvas.height;
    this.width = 10;
    this.height = 20;
    this.color = "hsl(" + hue + ",100%,50%)";
  }
  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }
  update() {
    this.y++;

    this.draw();
  }
}

setInterval(() => {
  blockArray.push(
    new block(canvas.width / 3 + 10),
    new block(canvas.width / 2),
    new block(canvas.width / 3 + canvas.width / 3 - 10)
  );
}, 800);
