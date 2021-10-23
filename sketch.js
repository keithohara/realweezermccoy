let music, images;
function preload() {
    soundFormats('mp3');
    music = [loadSound('weezer.mp3'),loadSound('realmccoy.mp3')];
    images = [loadImage('island.png'),loadImage('another.jpg')];
}

function setup() {
    let cnv = createCanvas(500, 500);
    for (let s of music){
        s.playMode('restart');
    }

}

function mousePressed() {
  // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    for (let s of music){
	s.loop(.5, 1, 1);
    }
}


function draw() {
  background(0);
  let amplitude = map(mouseX, 0, width, 0, 1.0);
  music[0].setVolume(amplitude);
  music[1].setVolume(1.0 - amplitude);

  tint(255, amplitude * 255);
  image(images[0], 0, 0, width, height);
  tint(255, (1-amplitude) * 255);
  image(images[1], 0, 0, width, height);

}

