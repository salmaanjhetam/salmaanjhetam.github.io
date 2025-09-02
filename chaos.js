var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//let userInput = prompt("how many would you like? ");
let circleAmount = 3;
let timeDiff = 6400;
let oldTime = Date.now() + timeDiff;


c.fillStyle = "blue";

function amount() {
    circleAmount = document.querySelector("#userInput");
}

function Circle(n, p) {
    var circleX = n;
    var circleY = p;
    var circleSpeed = 4;
    var circleDX = circleSpeed;
    var circleDY = circleSpeed;
    var circleRadius = 30;
    var circleGrow = -0.25;
    var growCount = 0;

    this.draw = function() {
        c.beginPath();
        c.arc(circleX, circleY, circleRadius, 0, 2*Math.PI, false);
        c.strokeStyle = 'cyan';
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

        this.draw();
    }

}

var circleArray = [];



//var circle = new Circle(100, 100);

/*var rectX = Math.random()*innerWidth;
var rectY = Math.random()*innerHeight;
const xSpeed = 5;
var rectSpeedX = xSpeed;
var rectSpeedY = xSpeed;*/
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  //c.fillRect(rectX, rectY, 50, 50);

    if(Date.now() > oldTime)
    {
        circleAmount++;
        if(timeDiff > 100)
            timeDiff /= 2;
        oldTime += timeDiff;
    }

  //circle.update();
    for(var i=circleArray.length; i<circleAmount; i++)
    {
        circleArray.push(new Circle(Math.random()*innerWidth, Math.random()*innerHeight));
    }


  for(var i=0; i<circleArray.length; i++)
  {
    circleArray[i].update();
  }
  
  /*if(rectX+50 >= window.innerWidth)
    rectSpeedX = -1*xSpeed;
  else if(rectX <= 0)
    rectSpeedX = xSpeed;

  if(rectY+50 >= window.innerHeight)
    rectSpeedY = -1*xSpeed;
  else if(rectY <= 0)
    rectSpeedY = xSpeed;

  rectX += rectSpeedX;
  rectY += rectSpeedY;*/
}

animate();
