let font;
let points = [];
let txt;
let xoff = 0;
function preload() {
  font = loadFont("./fonts/blunivered-Regular_web.woff");
}
function setup() {
  createCanvas(windowWidth, windowHeight).parent("p5");
  txt = new Txt("Hotmess", 150, 600, 450, 0.04);
}

function draw() {
  background(255, 20);
  textSize(28);
  fill(0);
  xoff += 0.01;
  txt.update();
}

class Txt {
  constructor(word, x, y, size, sample) {
    this.points = font.textToPoints(word, x, y, size, { sampleFactor: sample });
  }
  update() {
    for (let i = 0; i < this.points.length; i++) {
      stroke(255, 0, 0, 100);
      let current = this.points[i];
      let next = this.points[i + 1];
      if (i + 2 > this.points.length) break;
      // line(current.x + d(), current.y + d(), next.x + d(), next.y + d());
      stroke(255, 200, 0);
      noFill();
      rect(current.x - 5, current.y - 5, noise(xoff * i) * 40);
    }
  }
}

const d = () => random(-10, 10);
