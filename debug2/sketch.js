let xPos = 225;
let yPos = 0;
let xSpeed;
let ySpeed;

function setup() {
    xSpeed = 1;
    ySpeed = 4;
    createCanvas(500, 500);
    background(0, 0, 255);
}

function draw() {
    background(255, 255, 255);
    noStroke();
    fill(0, 0, 255);
    rect(0, 0, 200, 500);
    rect(300, 0, 200, 500);
    
    stroke(0);
    fill(255, 255, 255);
    ellipse(xPos, yPos, 40, 40);

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos < 220 || xPos > 280) {
        xSpeed *= -1;
    }
    if (yPos >= 520) {
        yPos = -20;
        ySpeed = random(2, 10)
    }
}