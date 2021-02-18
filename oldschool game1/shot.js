class particle {
  constructor() {
    this.x = Gun.x;
    this.y = Gun.height;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "brown";
    ctx.fill();
  }
  update() {
    this.y -= 1;
    this.draw();
  }
}

animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < blockArray.length; i++) {
    blockArray[i].update();
    hue++;
    Gun.update();
  }
};
animate();
