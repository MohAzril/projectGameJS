var body = document.getElementsByTagName("BODY")[0];
var startGame = document.getElementById('startGame');
var backgroundMusic = document.getElementById('audio');

var death = 0;

// window.onload = soal1;

// SOAL 1
function soal1() {
    body.removeChild(startGame);



    // CONTAINER
    var container1 = document.createElement('div');
    container1.setAttribute('id', 'main');
    container1.setAttribute('class', 'container');
    body.appendChild(container1);

    // BACKGROUND AUDIO


    // TOP BAR
    var topBar = document.createElement('div');
    topBar.setAttribute('id', 'topBar')
    topBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(topBar);

    // LEVEL
    var level = document.createElement('div');
    level.setAttribute('id', 'level');
    level.setAttribute('style', 'col-md');
    level.innerHTML = 'Level 1';
    topBar.appendChild(level);

    // LIFEBAR
    var lifebar = document.createElement('div');
    lifebar.setAttribute('id', 'lifebar');
    lifebar.setAttribute('style', 'col-md');
    topBar.appendChild(lifebar);

    // HEART IMAGE
    var heart1 = document.createElement('img');
    heart1.setAttribute('id', 'life3');
    heart1.setAttribute('src', 'life.png');
    lifebar.appendChild(heart1);

    var heart2 = document.createElement('img');
    heart2.setAttribute('id', 'life2');
    heart2.setAttribute('src', 'life.png');
    lifebar.appendChild(heart2);

    var heart3 = document.createElement('img');
    heart3.setAttribute('id', 'life1');
    heart3.setAttribute('src', 'life.png');
    lifebar.appendChild(heart3);

    // QUESTION DIV
    var questionDiv = document.createElement('div');
    questionDiv.setAttribute('id', 'question');
    container1.appendChild(questionDiv);

    // QUESTION TEXT
    var questionText = document.createElement('H1');
    questionText.innerHTML = "I + I ";
    questionDiv.appendChild(questionText);

    // ANSWER
    var answer = document.createElement('SPAN');
    answer.setAttribute('id', 'answer');
    answer.setAttribute('onclick', 'correctAnswer1()');
    answer.innerHTML = '=';
    questionText.appendChild(answer);

    // OPTIONS BUTTON
    var option1 = document.createElement('button');
    option1.setAttribute('id', 'option1');
    option1.setAttribute('onclick', 'wrongAnswer()');
    option1.setAttribute('type', 'button');
    option1.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option1.innerHTML = 'Dua';
    container1.appendChild(option1);

    var option2 = document.createElement('button');
    option2.setAttribute('id', 'option2');
    option2.setAttribute('onclick', 'wrongAnswer()');
    option2.setAttribute('type', 'button');
    option2.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option2.innerHTML = '2';
    container1.appendChild(option2);

    var option3 = document.createElement('button');
    option3.setAttribute('id', 'option3');
    option3.setAttribute('onclick', 'wrongAnswer()');
    option3.setAttribute('type', 'button');
    option3.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option3.innerHTML = 'Jendela';
    container1.appendChild(option3);

    var option4 = document.createElement('button');
    option4.setAttribute('id', 'option4');
    option4.setAttribute('onclick', 'wrongAnswer()');
    option4.setAttribute('type', 'button');
    option4.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option4.innerHTML = 'BUKAN DUA';
    container1.appendChild(option4);

    // BOTTOM BAR
    var bottomBar = document.createElement('div');
    bottomBar.setAttribute('id', 'bottomBar');
    bottomBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(bottomBar);

    // RESTART DIV
    var restartDiv = document.createElement('div');
    restartDiv.setAttribute('id', 'restart');
    bottomBar.appendChild(restartDiv)

    // RESTART BUTTON
    var restartButton = document.createElement('button');
    restartButton.setAttribute('onclick', 'restart()');
    restartButton.setAttribute('type', 'button');
    restartButton.setAttribute('class', 'btn btn-danger btn-sm');
    restartButton.innerHTML = 'Restart';
    restartDiv.appendChild(restartButton);

    // NEXT QUIZ DIV
    var nextQuizDiv = document.createElement('div');
    nextQuizDiv.setAttribute('id', 'nextQuiz');
    bottomBar.appendChild(nextQuizDiv);

    // NEXT QUIZ BUTTON
    var nextQuizButton = document.createElement('button');
    nextQuizButton.setAttribute('onclick', 'soal2()');
    nextQuizButton.setAttribute('type', 'button');
    nextQuizButton.setAttribute('class', 'btn btn-success btn-sm');
    nextQuizButton.innerHTML = 'Next Quiz >>';
    nextQuizDiv.appendChild(nextQuizButton);
}


// SOAL 2
function soal2() {
    var container1 = document.getElementById('main');

    body.removeChild(container1);

    // CONTAINER
    var container1 = document.createElement('div');
    container1.setAttribute('id', 'main');
    container1.setAttribute('class', 'container');
    body.appendChild(container1);

    // TOP BAR
    var topBar = document.createElement('div');
    topBar.setAttribute('id', 'topBar')
    topBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(topBar);

    // LEVEL
    var level = document.createElement('div');
    level.setAttribute('id', 'level');
    level.setAttribute('style', 'col-md');
    level.innerHTML = 'Level ';
    topBar.appendChild(level);

    // ANSWER
    var answer = document.createElement('span');
    answer.setAttribute('id', 'answer');
    answer.setAttribute('onclick', 'correctAnswer2()');
    answer.innerHTML = '2';
    level.appendChild(answer);

    // LIFEBAR
    var lifebar = document.createElement('div');
    lifebar.setAttribute('id', 'lifebar');
    lifebar.setAttribute('style', 'col-md');
    topBar.appendChild(lifebar);

    // HEART IMAGE
    if (death == 0) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        lifebar.appendChild(heart2);

        var heart3 = document.createElement('img');
        heart3.setAttribute('id', 'life1');
        heart3.setAttribute('src', 'life.png');
        lifebar.appendChild(heart3);
    }

    else if (death == 1) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        lifebar.appendChild(heart2);
    }

    else if (death == 2) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);
    }
    
    // QUESTION DIV
    var questionDiv = document.createElement('div');
    questionDiv.setAttribute('id', 'question');
    container1.appendChild(questionDiv);

    // QUESTION TEXT
    var questionText = document.createElement('H1');
    questionText.innerHTML = "8 x 8 / 3 x 0 / 14 * 17 / 99 * 6^6^6 / 9000 * 14045 / e^3 + 2 ";
    questionDiv.appendChild(questionText);

    // FAKE ANSWER
    var fakeAnswer = document.createElement('SPAN');
    fakeAnswer.setAttribute('id', 'fakeAnswer');
    fakeAnswer.setAttribute('onclick', 'wrongAnswer()');
    fakeAnswer.innerHTML = '=';
    questionText.appendChild(fakeAnswer);

    // OPTIONS BUTTON
    var option1 = document.createElement('button');
    option1.setAttribute('id', 'option1');
    option1.setAttribute('onclick', 'wrongAnswer()');
    option1.setAttribute('type', 'button');
    option1.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option1.innerHTML = '178,886.12';
    container1.appendChild(option1);

    var option2 = document.createElement('button');
    option2.setAttribute('id', 'option2');
    option2.setAttribute('onclick', 'wrongAnswer()');
    option2.setAttribute('type', 'button');
    option2.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option2.innerHTML = 'fatal Error...';
    container1.appendChild(option2);

    var option3 = document.createElement('button');
    option3.setAttribute('id', 'option3');
    option3.setAttribute('onclick', 'wrongAnswer()');
    option3.setAttribute('type', 'button');
    option3.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option3.innerHTML = 'its over 9000';
    container1.appendChild(option3);

    var option4 = document.createElement('button');
    option4.setAttribute('id', 'option4');
    option4.setAttribute('onclick', 'wrongAnswer()');
    option4.setAttribute('type', 'button');
    option4.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option4.innerHTML = '0';
    container1.appendChild(option4);

    // BOTTOM BAR
    var bottomBar = document.createElement('div');
    bottomBar.setAttribute('id', 'bottomBar');
    bottomBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(bottomBar);

    // RESTART DIV
    var restartDiv = document.createElement('div');
    restartDiv.setAttribute('id', 'restart');
    bottomBar.appendChild(restartDiv)

    // RESTART BUTTON
    var restartButton = document.createElement('button');
    restartButton.setAttribute('onclick', 'restart()');
    restartButton.setAttribute('type', 'button');
    restartButton.setAttribute('class', 'btn btn-danger btn-sm');
    restartButton.innerHTML = 'Restart';
    restartDiv.appendChild(restartButton);

    // NEXT QUIZ DIV
    var nextQuizDiv = document.createElement('div');
    nextQuizDiv.setAttribute('id', 'nextQuiz');
    bottomBar.appendChild(nextQuizDiv);

    // NEXT QUIZ BUTTON
    var nextQuizButton = document.createElement('button');
    nextQuizButton.setAttribute('onclick', 'soal3()');
    nextQuizButton.setAttribute('type', 'button');
    nextQuizButton.setAttribute('class', 'btn btn-success btn-sm');
    nextQuizButton.innerHTML = 'Next Quiz >>';
    nextQuizDiv.appendChild(nextQuizButton);
}

// SOAL 3
function soal3() {
    var container1 = document.getElementById('main');

    body.removeChild(container1);

    // CONTAINER
    var container1 = document.createElement('div');
    container1.setAttribute('id', 'main');
    container1.setAttribute('class', 'container');
    body.appendChild(container1);

    // TOP BAR
    var topBar = document.createElement('div');
    topBar.setAttribute('id', 'topBar')
    topBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(topBar);

    // LEVEL
    var level = document.createElement('div');
    level.setAttribute('id', 'level');
    level.setAttribute('style', 'col-md');
    level.innerHTML = 'Level ';
    topBar.appendChild(level);

    // FAKE ANSWER
    var fakeAnswer1 = document.createElement('span');
    fakeAnswer1.setAttribute('id', 'fakeAnswer1');
    fakeAnswer1.setAttribute('onclick', 'wrongAnswer()');
    fakeAnswer1.innerHTML = '3';
    level.appendChild(fakeAnswer1);

    // LIFEBAR
    var lifebar = document.createElement('div');
    lifebar.setAttribute('id', 'lifebar');
    lifebar.setAttribute('style', 'col-md');
    topBar.appendChild(lifebar);

    // HEART IMAGE
    if (death == 0) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        heart1.setAttribute('onclick', 'correctAnswer3()');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        heart2.setAttribute('onclick', 'correctAnswer3()');
        lifebar.appendChild(heart2);

        var heart3 = document.createElement('img');
        heart3.setAttribute('id', 'life1');
        heart3.setAttribute('src', 'life.png');
        heart3.setAttribute('onclick', 'correctAnswer3()');
        lifebar.appendChild(heart3);
    }

    else if (death == 1) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        heart1.setAttribute('onclick', 'correctAnswer3()');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        heart2.setAttribute('onclick', 'correctAnswer3()');
        lifebar.appendChild(heart2);
    }

    else if (death == 2) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        heart1.setAttribute('onclick', 'correctAnswer3()');
        lifebar.appendChild(heart1);
    }
    
    // QUESTION DIV
    var questionDiv = document.createElement('div');
    questionDiv.setAttribute('id', 'question3');
    container1.appendChild(questionDiv);

    // QUESTION TEXT
    var questionText = document.createElement('img');
    questionText.setAttribute('id', 'aces');
    questionText.setAttribute('src', 'aces.jpg')
    questionDiv.appendChild(questionText);

    // FAKE ANSWER
    var fakeAnswer = document.createElement('SPAN');
    fakeAnswer.setAttribute('id', 'fakeAnswer');
    fakeAnswer.setAttribute('onclick', 'wrongAnswer()');
    fakeAnswer.innerHTML = '=';
    questionText.appendChild(fakeAnswer);

    // OPTIONS BUTTON
    var option1 = document.createElement('button');
    option1.setAttribute('id', 'option1');
    option1.setAttribute('onclick', 'wrongAnswer()');
    option1.setAttribute('type', 'button');
    option1.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option1.innerHTML = 'Ace';
    container1.appendChild(option1);

    var option2 = document.createElement('button');
    option2.setAttribute('id', 'option2');
    option2.setAttribute('onclick', 'wrongAnswer()');
    option2.setAttribute('type', 'button');
    option2.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option2.innerHTML = 'Joker';
    container1.appendChild(option2);

    var option3 = document.createElement('button');
    option3.setAttribute('id', 'option3');
    option3.setAttribute('onclick', 'wrongAnswer()');
    option3.setAttribute('type', 'button');
    option3.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option3.innerHTML = 'Uno';
    container1.appendChild(option3);

    var option4 = document.createElement('button');
    option4.setAttribute('id', 'option4');
    option4.setAttribute('onclick', 'wrongAnswer()');
    option4.setAttribute('type', 'button');
    option4.setAttribute('class', 'btn btn-outline-primary btn-lg btn-block');
    option4.innerHTML = 'string("heart")';
    container1.appendChild(option4);

    // BOTTOM BAR
    var bottomBar = document.createElement('div');
    bottomBar.setAttribute('id', 'bottomBar');
    bottomBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(bottomBar);

    // RESTART DIV
    var restartDiv = document.createElement('div');
    restartDiv.setAttribute('id', 'restart');
    bottomBar.appendChild(restartDiv)

    // RESTART BUTTON
    var restartButton = document.createElement('button');
    restartButton.setAttribute('onclick', 'restart()');
    restartButton.setAttribute('type', 'button');
    restartButton.setAttribute('class', 'btn btn-danger btn-sm');
    restartButton.innerHTML = 'Restart';
    restartDiv.appendChild(restartButton);

    // NEXT QUIZ DIV
    var nextQuizDiv = document.createElement('div');
    nextQuizDiv.setAttribute('id', 'nextQuiz');
    bottomBar.appendChild(nextQuizDiv);

    // NEXT QUIZ BUTTON
    var nextQuizButton = document.createElement('button');
    nextQuizButton.setAttribute('onclick', 'soal4()');
    nextQuizButton.setAttribute('type', 'button');
    nextQuizButton.setAttribute('class', 'btn btn-success btn-sm');
    nextQuizButton.innerHTML = 'Next Quiz >>';
    nextQuizDiv.appendChild(nextQuizButton);
}

// SOAL 4
function soal4() {
    var container1 = document.getElementById('main');

    body.removeChild(container1);

    // CONTAINER
    var container1 = document.createElement('div');
    container1.setAttribute('id', 'main');
    container1.setAttribute('class', 'container');
    body.appendChild(container1);

    // TOP BAR
    var topBar = document.createElement('div');
    topBar.setAttribute('id', 'topBar')
    topBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(topBar);

    // LEVEL
    var level = document.createElement('div');
    level.setAttribute('id', 'level');
    level.setAttribute('style', 'col-md');
    level.innerHTML = 'Level 4';
    topBar.appendChild(level);

    // LIFEBAR
    var lifebar = document.createElement('div');
    lifebar.setAttribute('id', 'lifebar');
    lifebar.setAttribute('style', 'col-md');
    topBar.appendChild(lifebar);

    // HEART IMAGE
    if (death == 0) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        lifebar.appendChild(heart2);

        var heart3 = document.createElement('img');
        heart3.setAttribute('id', 'life1');
        heart3.setAttribute('src', 'life.png');
        lifebar.appendChild(heart3);
    }

    else if (death == 1) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        lifebar.appendChild(heart2);
    }

    else if (death == 2) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);
    }
    
    // QUESTION DIV
    var questionDiv = document.createElement('div');
    questionDiv.setAttribute('id', 'question4');
    container1.appendChild(questionDiv);

    // QUESTION TEXT
    var questionText = document.createElement('H1');
    questionText.innerHTML = "Hancurkan Batanya! ";
    questionDiv.appendChild(questionText);

    // CANVAS
    var canvas1 = document.createElement('canvas');
    canvas1.setAttribute('id', 'myCanvas');
    canvas1.setAttribute('width','570');
    canvas1.setAttribute('height', '390');
    canvas1.setAttribute("style","background: #eee;");
    container1.appendChild(canvas1);

    // BOTTOM BAR
    var bottomBar = document.createElement('div');
    bottomBar.setAttribute('id', 'bottomBar');
    bottomBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(bottomBar);

    // RESTART DIV
    var restartDiv = document.createElement('div');
    restartDiv.setAttribute('id', 'restart');
    bottomBar.appendChild(restartDiv)

    // RESTART BUTTON
    var restartButton = document.createElement('button');
    restartButton.setAttribute('onclick', 'restart()');
    restartButton.setAttribute('type', 'button');
    restartButton.setAttribute('class', 'btn btn-danger btn-sm');
    restartButton.innerHTML = 'Restart';
    restartDiv.appendChild(restartButton);

    // NEXT QUIZ DIV
    var nextQuizDiv = document.createElement('div');
    nextQuizDiv.setAttribute('id', 'nextQuiz');
    bottomBar.appendChild(nextQuizDiv);

    // NEXT QUIZ BUTTON
    var nextQuizButton = document.createElement('button');
    nextQuizButton.setAttribute('onclick', 'soal5()');
    nextQuizButton.setAttribute('type', 'button');
    nextQuizButton.setAttribute('class', 'btn btn-success btn-sm');
    nextQuizButton.innerHTML = 'Next Quiz >>';
    nextQuizDiv.appendChild(nextQuizButton);

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
            if((paddleX > b.x || paddleX + paddleWidth > b.x) && (paddleX < b.x+brickWidth || paddleX + paddleWidth < b.x+brickWidth) && 
            (paddleY > b.y || paddleY + paddleHeight > b.y) && (paddleY < b.y+brickHeight || paddleY + paddleHeight < b.y+brickHeight)) {
            b.status = 0;
            score++;
            if(score == brickRowCount*brickColumnCount) {
                correctAnswer4();
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
    function drawScore() {
    if(bricks[0][0].status == 0 && bricks[1][0].status == 0 && bricks[2][0].status == 0){
        ctx.font = "30px Arial";
        ctx.fillStyle = "grey";
        ctx.fillText("C   O ", bricks[1][0].x, bricks[1][0].y);
        }
    if(bricks[0][1].status == 0 && bricks[1][1].status == 0 && bricks[2][1].status == 0){
        ctx.font = "30px Arial";
        ctx.fillStyle = "grey";
        ctx.fillText(" B   A ", bricks[1][1].x, bricks[1][1].y);
        }
    if(bricks[0][2].status == 0 && bricks[1][2].status == 0 && bricks[2][2].status == 0){
        ctx.font = "30px Arial";
        ctx.fillStyle = "grey";
        ctx.fillText("  L   A  ", bricks[1][2].x, bricks[1][2].y);
        }
    if(bricks[0][3].status == 0 && bricks[1][3].status == 0 && bricks[2][3].status == 0){
        ctx.font = "30px Arial";
        ctx.fillStyle = "grey";
        ctx.fillText("  G   I", bricks[1][3].x, bricks[1][3].y);
        }
    if(bricks[0][4].status == 0 && bricks[1][4].status == 0 && bricks[2][4].status == 0){
        ctx.font = "30px Arial";
        ctx.fillStyle = "grey";
        ctx.fillText(" !  !  ! ", bricks[1][4].x, bricks[1][4].y);
        }
    }

    //update frame
    function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
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

    }

// SOAL 5
function soal5() {
    var container1 = document.getElementById('main');

    body.removeChild(container1);

    // CONTAINER
    var container1 = document.createElement('div');
    container1.setAttribute('id', 'main');
    container1.setAttribute('class', 'container');
    body.appendChild(container1);

    // TOP BAR
    var topBar = document.createElement('div');
    topBar.setAttribute('id', 'topBar')
    topBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(topBar);

    // LEVEL
    var level = document.createElement('div');
    level.setAttribute('id', 'level');
    level.setAttribute('style', 'col-md');
    level.innerHTML = 'Level 5';
    topBar.appendChild(level);

    // LIFEBAR
    var lifebar = document.createElement('div');
    lifebar.setAttribute('id', 'lifebar');
    lifebar.setAttribute('style', 'col-md');
    topBar.appendChild(lifebar);

    // HEART IMAGE
    if (death == 0) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        lifebar.appendChild(heart2);

        var heart3 = document.createElement('img');
        heart3.setAttribute('id', 'life1');
        heart3.setAttribute('src', 'life.png');
        lifebar.appendChild(heart3);
    }

    else if (death == 1) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);

        var heart2 = document.createElement('img');
        heart2.setAttribute('id', 'life2');
        heart2.setAttribute('src', 'life.png');
        lifebar.appendChild(heart2);
    }

    else if (death == 2) {
        var heart1 = document.createElement('img');
        heart1.setAttribute('id', 'life3');
        heart1.setAttribute('src', 'life.png');
        lifebar.appendChild(heart1);
    }
    
    // QUESTION DIV
    var questionDiv = document.createElement('div');
    questionDiv.setAttribute('id', 'question4');
    container1.appendChild(questionDiv);

    // QUESTION TEXT
    var questionText = document.createElement('H1');
    questionText.innerHTML = "Cari Gerhana MATAHARI! ";
    questionDiv.appendChild(questionText);

    // CANVAS
    var canvas1 = document.createElement('canvas');
    canvas1.setAttribute('id', 'myCanvas');
    canvas1.setAttribute('width','570');
    canvas1.setAttribute('height', '390');
    canvas1.setAttribute("style","background: #eee;");
    container1.appendChild(canvas1);

    // BOTTOM BAR
    var bottomBar = document.createElement('div');
    bottomBar.setAttribute('id', 'bottomBar');
    bottomBar.setAttribute('class', 'row justify-content-between');
    container1.appendChild(bottomBar);

    // RESTART DIV
    var restartDiv = document.createElement('div');
    restartDiv.setAttribute('id', 'restart');
    bottomBar.appendChild(restartDiv)

    // RESTART BUTTON
    var restartButton = document.createElement('button');
    restartButton.setAttribute('onclick', 'restart()');
    restartButton.setAttribute('type', 'button');
    restartButton.setAttribute('class', 'btn btn-danger btn-sm');
    restartButton.innerHTML = 'Restart';
    restartDiv.appendChild(restartButton);

    // NEXT QUIZ DIV
    var nextQuizDiv = document.createElement('div');
    nextQuizDiv.setAttribute('id', 'nextQuiz');
    bottomBar.appendChild(nextQuizDiv);

    // NEXT QUIZ BUTTON
    var nextQuizButton = document.createElement('button');
    nextQuizButton.setAttribute('onclick', 'restart()');
    nextQuizButton.setAttribute('type', 'button');
    nextQuizButton.setAttribute('class', 'btn btn-success btn-sm');
    nextQuizButton.innerHTML = 'Next Quiz >>';
    nextQuizDiv.appendChild(nextQuizButton);

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
    var brickColumnCount = Math.floor(canvas.height/paddleHeight);
    var x = canvas.width/2; //for ball
    var y = canvas.height/2; //for ball
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
            hitted();
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
            hitted();
            }
        }
        }
    }
    if((paddleX+ballRadius > 0 || paddleX-ballRadius > 0) && (paddleX+ballRadius < 10 || paddleX-ballRadius < 10) && 
        (paddleY+ballRadius > 20 || paddleY-ballRadius > 20) && (paddleY+ballRadius < 30 || paddleY-ballRadius < 30)) {
        correctAnswer5();
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
            ctx.fillStyle = "red";
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
            ctx.fillStyle = "red";
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
    drawPaddle();
    drawStar();
    drawBall();
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
    }



// FUNCTIONS 
// CORRECT ANSWERS
function correctAnswer1() {
    backgroundMusic.removeAttribute('loop');
    backgroundMusic.setAttribute('src', 'applause.wav');
    setInterval(backgroundMusic, 1000);
    alert("hahaha, selamat xD!")
    backgroundMusic.setAttribute('src', 'background.mp3');
    soal2()
}

function correctAnswer2() {
    backgroundMusic.removeAttribute('loop');
    backgroundMusic.setAttribute('src', 'applause.wav');
    setInterval(backgroundMusic, 1000);
    alert("hmm... boleh juga kalian :D")
    backgroundMusic.setAttribute('src', 'background.mp3');
    soal3()
}

function correctAnswer3() {
    backgroundMusic.removeAttribute('loop');
    backgroundMusic.setAttribute('src', 'applause.wav');
    setInterval(backgroundMusic, 1000);
    alert("Mata Pancingg!!")
    backgroundMusic.setAttribute('src', 'background.mp3');
    soal4()
}

function correctAnswer4() {
    backgroundMusic.removeAttribute('loop');
    backgroundMusic.setAttribute('src', 'applause.wav');
    setInterval(backgroundMusic, 1000);
    alert("My Trip!!")
    backgroundMusic.setAttribute('src', 'background.mp3');
    soal5();
}
function correctAnswer5() {
    backgroundMusic.removeAttribute('loop');
    backgroundMusic.setAttribute('src', 'applause.wav');
    setInterval(backgroundMusic, 1000);
    alert("Selamat akhirnya bisa keluar dari lingkaran setan...")
    restart();
}

// terkena hit
function hitted(){
    interval = setInterval(draw, 10);
    // alert('Wrong way...')
    wrongAnswer ();
}
// WRONG ANSWER
function wrongAnswer () {
    if (death == 0) {
        document.getElementById('life1').remove()
        death = death + 1
    } else if (death == 1) {
        document.getElementById('life2').remove()
        death = death + 1
    } else if (death == 2) {
        document.getElementById('life3').remove()
        backgroundMusic.removeAttribute('loop');
        backgroundMusic.setAttribute('src', 'gameover.wav');
        death = death + 1
        alert('Game Over')
    } else if (death > 2 && death <= 4) {
        alert('Game Over');
        death = death + 1
    } else if (death > 4) {
        alert('Stop it and hit the RESTART BUTTON dud!')
    }
}

// RESTART
function restart () {
    location.reload();
}