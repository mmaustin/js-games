const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './images/shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrames = 3;

const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for(let j = 0; j < state.frames; j++){
        let positionX = j*spriteWidth;
        let positionY = index*spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

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