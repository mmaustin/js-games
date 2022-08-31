/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
numberOfEnemies = 100;
ENEMIES_ARRAY = [];

class Enemy{
    constructor(){
        this.x = Math.random() * CANVAS_WIDTH;
        this.y = Math.random() * CANVAS_HEIGHT;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 -2; //don't understand this line
        ENEMIES_ARRAY.push(this);
    }

    update() {
        this.x += this.speed;
        this.y =+ this.speed;
    }

    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

//const enemy1 = new Enemy();
for(let i = 0; i < numberOfEnemies; i++){
    new Enemy();
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ENEMIES_ARRAY.map(enemy => {
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate);
}
animate();