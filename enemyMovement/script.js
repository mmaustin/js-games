/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

class Enemy{
    constructor(){
        this.x = 10;
        this.y = 50;
        this.width = 100;
        this.height = 100;
    }
}

const enemy1 = new Enemy();

function animate(){
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
}
animate();