var cycleNumber = 2;
var aliensHeadCount = 0;
var gameRounds = 1;
var id = 0;
var score = 0;
var died = false;
let countingClock;
let clockSeconds = 00;
let clockMinutes = 00;
const clock = document.getElementById("clock");

function loadGame() {
  var parent = document.body;
  var child = document.getElementsByClassName("starting-element-container")[0];
  countingClock = setInterval(gameClock, 1000);
  clock.innerHTML = "00:00";
  child.style.display = 'none';
  gameStart();
}

function gameStart() {
    cycle();
    var timer = setInterval(function(){
        died = gameCheck();
        if (died) {
            clearInterval(timer);
            gameFinish();
        } else {
            cycle();
        } }, 5000);
}

function gameCheck() {
    if (aliensHeadCount == 0) {
        return false;
    } else {
        return true;
    }
}

function cycle() {
    cycleNumber += 1;
    aliensHeadCount += cycleNumber;
    for (var i = 0; i < cycleNumber; i++) {
        spawnAlien();
    }
}

function spawnAlien() {
    var area = document.getElementById("area");
    var alienNumber = Math.floor((Math.random() * 10) + 1); // 1 to 10
    var alienPath = "img/space/invader"+alienNumber+".png";
    var top = positionRandomizerDesktop(0);
    var left = positionRandomizerDesktop(1);
    birthAlien(alienPath, top, left);
    id += 1;
}

function birthAlien(alienPath, top, left) {
    var alien = document.createElement("img");
    alien.setAttribute('class', 'alien');
    alien.setAttribute('style', 'top: '+ top + '%; left: '+left+'%;');
    alien.setAttribute('onclick', 'deleteAlien(this)');
    alien.setAttribute('src', alienPath);
    alien.setAttribute('id', id);
    area.appendChild(alien);
}

function positionRandomizerDesktop(identifyier) {
    var output = Math.floor((Math.random() * 100) + 1);
    if (identifyier == 0) {
        while (output > 92) {
            output = Math.floor((Math.random() * 100) + 1);
        }
    } else {
        while (25 > output || output > 67) {
            output = Math.floor((Math.random() * 100) + 1);
        }
    }
    return output;
}

// ALIEN FUNCTION

function deleteAlien(alien) {
    aliensHeadCount -= 1;
    score += 10;
    document.getElementsByClassName("score")[0].innerHTML = score;
    var parent = document.getElementById("area");
    parent.removeChild(alien);
}

function gameFinish() {
    var parent = document.getElementById("area");
    children = document.getElementsByClassName("alien");
    childrenN = children.length;
    for (var i = 0; i < childrenN; i++) {
        parent.removeChild(children[0]);
    }
    document.getElementsByClassName("score")[0].innerHTML = "DIED Score: " + score;
    clearTimeout(countingClock);


    const bodyElement = document.body;
    const startScreen = document.getElementsByClassName("starting-element-container")[0];
    setTimeout(() => {
        startScreen.style.display = 'flex';
    }, 3000);
}


// CLOCK FUNCTION
function gameClock() {
    clockSeconds++;

    if (clockMinutes < 10 && clockSeconds < 10) {
        clock.innerHTML = `0${clockMinutes}:0${clockSeconds}`;
    } 
    else if (clockMinutes > 9 && clockSeconds < 10) {
        clock.innerHTML = `${clockMinutes}:0${clockSeconds}`;
    }
    else if (clockMinutes < 10 && clockSeconds > 9) {
        clock.innerHTML = `0${clockMinutes}:${clockSeconds}`;
    }
    else {
        clock.innerHTML = `${clockMinutes}:${clockSeconds}`;
    }
    
    if (clockSeconds > 59) {
        clockMinutes++;
        clockSeconds = 0;
    }

}