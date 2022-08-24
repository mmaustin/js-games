const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames =5;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;
    //ctx.fillRect(100,50,100,100);
    //draw image method can take up to nine arguments.
    //ctx.drawImage(image, sourcex, sy, sourceWidth, sourceHeight, and the last four arguments from the function below)
    ctx.drawImage(playerImage, frameX , frameY * spriteHeight,
    spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    //requestAnimationFrame continuously runs animate
    requestAnimationFrame(animate)
}
animate();