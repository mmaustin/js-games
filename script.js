const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'https://images.unsplash.com/photo-1624943233648-9cf5cc4ee471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';
const snipWidth = 75;
const snipHeight = 70;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames =5;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //draw image method can take up to nine arguments.
    //ctx.drawImage(image, sourcex, sy, sourceWidth, sourceHeight, and the last four arguments from the function below)
    ctx.drawImage(playerImage, frameX * snipWidth, frameY * snipHeight,
         snipWidth, snipHeight, 0, 0, snipWidth, snipHeight);

    gameFrame++;
    //requestAnimationFrame continuously runs animate
    requestAnimationFrame(animate)
}
animate();