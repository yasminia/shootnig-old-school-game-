let toRight = false;
let toLeft = false;
let shoot = false;
let particleArray = [];
window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    toRight = true;
  }
  if (e.code === "ArrowLeft") {
    toLeft = true;
  }
  if (e.code === "Space") {
    shoot = true;
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
  }
  setInterval(() => {
    toRight = false;
    toLeft = false;
    shoot = false;
  }, 100);
  setInterval(() => {}, 4);
});

class gun {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height;
    this.width = 15;
    this.height = -25;
  }
  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
  }
  update() {
    if (toRight == true) {
      this.x++;
    }
    if (toLeft == true) {
      this.x--;
    }
    if (shoot == true) {
      particleArray.push(new particle());
    }
    this.draw();
  }
}
let Gun = new gun();
