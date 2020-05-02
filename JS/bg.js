const body = document.querySelector('body');

const IMG_NUMBER = 7;

function randomNumber() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function paintImage() {
    let number = randomNumber();
    const image = new Image();
    image.classList.add('background');
    image.src = `./images/${number + 1}.jpg`;
    body.prepend(image);
}

function init() {
    paintImage();
}

init();