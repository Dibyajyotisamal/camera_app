async function getWebCam() {
    try {
        const videoScr = await navigator.mediaDevices.getUserMedia({
            video: true
        });
        var video = document.getElementById('video');
        video.scrObject = videoScr;
    } catch (e) {
        console.error(e);
    }
}

let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let video = document.querySelector('#video');
let blur = document.getElementById('blur');
let brightness = document.getElementById('brightness');
let contrast = document.getElementById('contrast');
let invert = document.getElementById('invert');
let saturate = document.getElementById('saturate');
let sepia = document.getElementById('sepia');
let greyscale = document.getElementById('greyscale');
let hue_rotate = document.getElementById('hue_rotate');
let drop_shadow = document.getElementById('drop_shadow');


if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then((stream) => {
        video.srcObject = stream;
        video.play();
    });
}

document.getElementById('snap').addEventListener('click', () => {
    context.drawImage(video, 0, 0, 480, 320);
});

blur.addEventListener('click', function () {
    canvas.style.filter = 'blur(5px)';
});
brightness.addEventListener('click', function () {
    canvas.style.filter = 'brightness(1.6)';
});
contrast.addEventListener('click', function () {
    canvas.style.filter = 'contrast(200%)';
});
invert.addEventListener('click', function () {
    canvas.style.filter = 'invert(20%)';
});
saturate.addEventListener('click', function () {
    canvas.style.filter = 'saturate(600%)';
});
sepia.addEventListener('click', function () {
    canvas.style.filter = 'sepia(100%)';
});

hue_rotate.addEventListener('click', function () {
    canvas.style.filter = 'hue-rotate(180deg)';
});
drop_shadow.addEventListener('click', function () {
    canvas.style.filter = 'drop-shadow(16px 16px 20px red) invert(75%)';
});