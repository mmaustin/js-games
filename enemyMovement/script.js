/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
numberOfEnemies = 100;
ENEMIES_ARRAY = [];

const enemyImage1 = new Image();
enemyImage1.src = '../images/enemy1.png';
let gameFrame = 0;

class Enemy{
    constructor(){
        this.x = Math.random() * CANVAS_WIDTH;
        this.y = Math.random() * CANVAS_HEIGHT;
        this.speed = Math.random() * 4 -2; //don't understand this line
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 0;
        ENEMIES_ARRAY.push(this);
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;
        if(gameFrame % 2 === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(enemyImage1, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for(let i = 0; i < numberOfEnemies; i++){
    new Enemy();
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ENEMIES_ARRAY.map(enemy => {
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();