var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "blue";

var rectX = 50;
var rectY = 50;
var rectSpeedX = 2;
function animate() {
  requestAnimationFrame(animate);
  c.fillRect(rectX, rectY, 50, 50);
  
  if(rectX+50 >= window.innerWidth)
    rectSpeedX = -2;
  else if(rectX <= 0)
    rectSpeedX = 2;

  rectX += rectSpeedX;
}

animate();
