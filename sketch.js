var angle = 0;

function    setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, TWO_PI, PI / 4, 0.001);
    slider.position(windowWidth * 0.5, windowHeight * 0.5);
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight);
 }

function    draw() {
    background(51);

    translate(200, windowHeight);
    angle = slider.value();
    stroke(255);
    branch(60);
    branch(45)
}

function    branch(len) {
    line(0, 0, 0, -len)
    translate(0, -len)
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.7)
        pop();
        push();
        rotate(-angle);
        branch(len * 0.7);
        pop();
    }
}