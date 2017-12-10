function destroy() {
    const alien = document.getElementById('alien');
    alien.style.display = 'none';
}

window.onload = function run() {
    const alien = document.getElementById('alien');
    alien.classList.add('run');
};