function playSound(event) {
    const sound = new Audio(event.target.getAttribute('data-sound'));
    sound.play();
}

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', playSound);
});
