function    setup() {
    createCanvas(400, 400);
}

function    draw() {
    background(51);

    translate(200, height);
    stroke(255);
    branch(100);
}

function    branch(len) {
    line(0, 0, 0, -len)
    translate(0, -len)
    rotate(PI/4);
    line(0, 0, 0, -len)
}