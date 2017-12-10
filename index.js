function destroy() {
    const alien = document.getElementById('alien');
    alien.style.display = 'none';
}

window.onload = function loadGame() {
    const start = document.getElementsByClassName('play-container')[0];
    start.classList.add('start-screen');
};

function gameStart() {
    const alien = document.getElementById('alien');
    alien.classList.add('run');
};