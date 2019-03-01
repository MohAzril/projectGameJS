var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20; //jari-jari bola
var x = canvas.width/2; //for ball
var y = canvas.height-30; //for ball
var dx = 2; //kecepatan horizon bola
var dy = -2; //kecepatan vertikal bola
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = canvas.height-paddleWidth;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5; //jumlah kolom
var brickColumnCount = 3; //jumlah baris
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 75;
var score = 0;

//membuat array bricks
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
//fungsi keyboard
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
//fungsi keyboard
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  var relativeY = e.clientY - canvas.offsetTop;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
  if(relativeY > 0 && relativeY < canvas.height) {
    paddleY = relativeY - paddleHeight/2;
  }
}

//fungsi untuk mendeteksi papan menabrak
function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if((paddleX > b.x || paddleX > b.x) && (paddleX < b.x+brickWidth || paddleX < b.x+brickWidth) && 
        (paddleY > b.y || paddleY > b.y) && (paddleY < b.y+brickHeight || paddleY< b.y+brickHeight)) {
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}
// fungsi memantulkan bola
function collisionDetection1() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          dx = -dx;
        }
      }
    }
  }
}


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
// gambar cursor papan
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        if(brickX+brickWidth >= canvas.width){brickX=canvas.width}
        if(brickY+brickHeight >= canvas.height){bricky=canvas.height}
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#D63636";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
//gambar score
// function drawScore() {
//   ctx.font = "16px Arial";
//   ctx.fillStyle = "#0095DD";
//   ctx.fillText("Score: "+score, 8, 20);
// }

//update frame
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  //drawScore();
  collisionDetection();
  collisionDetection1();
  //jika bola membentur dinding canvas
  if(x  > canvas.width-ballRadius || x < ballRadius) {
    dx = -dx;
  }
  if(y < ballRadius || y > canvas.height-ballRadius) {
    dy = -dy;
  }
  //jika bola membentur papan
  if(y > paddleY && y < paddleY + paddleHeight) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
}

var interval = setInterval(draw, 10);