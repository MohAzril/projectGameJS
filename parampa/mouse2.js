var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20; //jari-jari bola
var dx = 2; //kecepatan horizon bola
var dy = 2; //kecepatan vertikal bola
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = canvas.width/2;
var paddleY = canvas.height-paddleHeight;
var rightPressed = false;
var leftPressed = false; 
var brickArea = brickColumnCount * brickRowCount;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var brickRowCount = 2;
var brickColumnCount = Math.floor(canvas.height/paddleHeight)-25;
var x = brickColumnCount*15; //for ball
var y = canvas.height-ballRadius; //for ball
var score = 0;
var gap = ballRadius * 7+20;


var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1, width: 0, height: 0 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

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
    paddleX = relativeX;
  }
  if(relativeY > 0 && relativeY < canvas.height) {
    paddleY = relativeY;
  }
}
//fungsi untuk deteksi cursor menabrak dinding
function collisionDetection() {
    for(var c=0; c<3; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(r==1){
        if((paddleX+ballRadius > b.x || paddleX-ballRadius > b.x) && (paddleX+ballRadius < b.x+b.width || paddleX-ballRadius < b.x+b.width) && 
        (paddleY+ballRadius > b.y || paddleY-ballRadius > b.y) && (paddleY+ballRadius < b.y+brickHeight || paddleY-ballRadius < b.y+brickHeight)) {
          dy = -dy;
        //   b.status = 0;
          score++;
          alert("GAME OVER");
          document.location.reload();
          clearInterval(interval);
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
  for(var c=3; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if((paddleX+ballRadius > b.x || paddleX-ballRadius > b.x) && (paddleX+ballRadius < b.x+b.width || paddleX-ballRadius < b.x+b.width) && 
        (paddleY+ballRadius > b.y || paddleY-ballRadius > b.y) && (paddleY+ballRadius < b.y+brickHeight || paddleY-ballRadius < b.y+brickHeight)) {
          dy = -dy;
        //   b.status = 0;
          score++;
          alert("GAME OVER");
          document.location.reload();
          clearInterval(interval);
          if(score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
          }
        }
      }
    }
  }
if((paddleX+ballRadius > 0 || paddleX-ballRadius > 0) && (paddleX+ballRadius < 10 || paddleX-ballRadius < 10) && 
    (paddleY+ballRadius > 20 || paddleY-ballRadius > 20) && (paddleY+ballRadius < 30 || paddleY-ballRadius < 30)) {
    alert("Tamales Lurd!");
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
    }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
// gambar cursor
function drawPaddle() {
  ctx.beginPath();
  ctx.arc(paddleX, paddleY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}
//menggambar bata-bata
function drawBricks() {
  var i=0;
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        if(r==1){
        var brickX = bricks[c][r-1].width
        var brickY = (c*(brickHeight));
        bricks[c][r].x = brickX+gap;
        bricks[c][r].y = brickY;
        bricks[c][r].width = canvas.width-bricks[c][r].x;
        ctx.beginPath();
        ctx.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].width , brickHeight);
        ctx.fillStyle = "#eee";
        ctx.fill();
        ctx.closePath();
        }
        else{
        var brickX = 0;
        var brickY = (c*(brickHeight));
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        bricks[c][r].width = 250;
        ctx.beginPath();
        ctx.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, brickHeight);
        ctx.fillStyle = "#eee";
        ctx.fill();
        ctx.closePath();
        }
      }
      i+=1;
    }
  }
}
//gambar bintang
function drawStar() {
  //bulan tujuan
  ctx.beginPath();
  ctx.arc(25, 30, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
  //bulan besar
  ctx.beginPath();
  ctx.arc(canvas.width/2-100, canvas.height/2-100, ballRadius*5, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
  //matahari besar
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, ballRadius*5, 0, Math.PI*2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
  //bulan1
  ctx.beginPath();
  ctx.arc(canvas.width-50, 75, ballRadius*3, 0, Math.PI*2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
  //matahari1
  ctx.beginPath();
  ctx.arc(canvas.width-65, 80, ballRadius*3, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
  //bulan2
  ctx.beginPath();
  ctx.arc(50, canvas.height-75, ballRadius*2, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
  //matahari2
  ctx.beginPath();
  ctx.arc(60, canvas.height-85, ballRadius*2, 0, Math.PI*2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
  //bulan3
  ctx.beginPath();
  ctx.arc(canvas.width-50, canvas.height-75, ballRadius*2, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
  //matahari3
  ctx.beginPath();
  ctx.arc(canvas.width-50, canvas.height/2, ballRadius*4, 0, Math.PI*2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
  //bulan4
  ctx.beginPath();
  ctx.arc(50, canvas.height/2, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

}
//update frame rate
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawStar();
  collisionDetection();//deteksi jalur
  //fungsi bola membentur tembok
  if(x  > canvas.width-ballRadius || x < ballRadius) {
    dx = -dx;
  }
  if(y < ballRadius || y > canvas.height-ballRadius) {
    dy = -dy;
  }
  //fungsi bola membentur cursor
    if(y > paddleY-ballRadius-10 && y < paddleY + ballRadius+10){
    if(x > paddleX-ballRadius-10 && x < paddleX + ballRadius+10){
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