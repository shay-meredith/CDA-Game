var cycleNumber = 2;
var gameRounds = 1;
var id = 0;

function loadGame() {
  var parent = document.body;
  var child = document.getElementsByClassName("starting-element-container")[0];
  parent.removeChild(child);
  gameStart();
}

function gameStart() {
    var died = false;
    cycle();
    for (var i = 0; i < 10; i++) {
        gameFunction(died);
    }
}

function gameFunction(died) {
    setTimeout(function(){
        if (died) {
            gameFinish();
        } else {
            cycle();
        }
    }, 3000);
}

function gameCheck() {
    return true;
}

function cycle() {
    cycleNumber += 1;
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

function deleteAlien(alien) {
    var parent = document.getElementById("area");
    parent.removeChild(alien);
}

// function destroy() {
//     const alien = document.getElementById('alien');
//     alien.style.display = 'none';
// }
