var canvas = document.querySelector('canvas');
var userInput = prompt("Desired Amount: (recommend less than 200)");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var overTime = Date.now() + 1000;

var circleAmount = 3;

var c = canvas.getContext("2d");

var currAmount = userInput;

if(currAmount >= 64)
{
    currAmount /= 64;
}

c.fillStyle = "blue";

function Circle(n, p) {
    var circleX = n;
    var circleY = p;
    var circleSpeed = 4;
    var circleDX = circleSpeed;
    var circleDY = circleSpeed;
    var circleRadius = 30;
    var circleGrow = -0.25;
    var growCount = 0;
    let transparency = 0.1;

    this.draw = function() {
        c.beginPath();
        c.arc(circleX, circleY, circleRadius, 0, 2*Math.PI, false);
        c.strokeStyle = "rgba(0, 255, 255, "+ transparency +")";
        c.stroke();
    }

    this.update = function() {
        if(circleX+circleRadius >= innerWidth)
            circleDX = -1*circleSpeed;
        else if(circleX <= 0)
            circleDX = circleSpeed;

        if(circleY+circleRadius >= innerHeight)
            circleDY = -1*circleSpeed;
        else if(circleY <= 0)
            circleDY = circleSpeed;

        circleX += circleDX;
        circleY += circleDY;

        if(circleRadius <= 18)
            circleGrow = 0.25;
        else if(circleRadius >= 30)
            circleGrow = -0.25;

        growCount++;
        if(growCount == 4)
        {
            growCount = 0;
            circleRadius += circleGrow;
        }

        if(transparency < 1)
            transparency *= 1.01;

        this.draw();
    }

}

var circleArray = [];

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  circleAmount = currAmount;

  if(userInput >= currAmount && Date.now() >= overTime) {
    overTime += 1000;
    currAmount *= 1.2;
  }

    for(var i=circleArray.length; i<circleAmount; i++)
    {
        circleArray.push(new Circle(Math.random()*innerWidth, Math.random()*innerHeight));
    }


  for(var i=0; i<circleArray.length; i++)
  {
    circleArray[i].update();
  }
}

animate();
