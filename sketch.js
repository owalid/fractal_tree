var angle = 0;

function    setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI / 4, 0.001);
}

function    draw() {
    background(51);

    translate(200, height);
    angle = slider.value();
    stroke(255);
    branch(100);
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