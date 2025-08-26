var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "blue";

var rectX = 50;
var rectY = 50;
var rectSpeedX = 5;
var rectSpeedY = 5;
const xSpeed = 5;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.fillRect(rectX, rectY, 50, 50);
  
  if(rectX+50 >= window.innerWidth)
    rectSpeedX = -1*xSpeed;
  else if(rectX <= 0)
    rectSpeedX = xSpeed;

  if(rectY+50 >= window.innerHeight)
    rectSpeedY = -1*xSpeed;
  else if(rectY <= 0)
    rectSpeedY = xSpeed;

  rectX += rectSpeedX;
  rectY += rectSpeedY;
}

animate();
