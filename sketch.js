let soundFile;
let soundPlayed = false;
let startTime;
let amplitude;

function preload() {
    soundFile = loadSound('This_is_Gospel.mp3');
}

function setup() {
    createCanvas(400, 400);
    amplitude = new p5.Amplitude();
}

function mousePressed() {
  if (!soundFile.isPlaying()) {
    soundFile.play();
    startTime = millis();
  }

}

function draw() {
    background(0);

let level = amplitude.getLevel();

let circleSize = map(level, 0, 1, 50, 200);

if (soundFile.isPlaying()) {
    fill(255, 0, 0);
    noStroke();
    ellipse(width / 2, height / 2, circleSize);
}
    if (millis() - startTime > 3000) {
        ellipse(width / 2, height / 2, 50);
    }
}
  