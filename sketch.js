let font, serif;
let points = [];
let txt, txt2;
let xoff = 0;
let yoff = 9;
function preload() {
  font = loadFont("./fonts/blunivered-Regular_web.woff");
  serif = loadFont("./fonts/Pantasia-Regular.woff");
}
function setup() {
  createCanvas(windowWidth, windowHeight).parent("p5");
  txt = new Txt("H0T", 150, 600, 450, 0.07, serif);
  txt2 = new Txt("mess", 950, 600, 450, 0.04, serif);
}

function draw() {
  background(255, 5);
  textSize(28);
  fill(0);
  xoff += 0.000011;
  yoff += 0.001;
  txt.update();
  txt2.update();
}

class Txt {
  constructor(word, x, y, size, sample, font) {
    this.points = font.textToPoints(word, x, y, size, { sampleFactor: sample });
  }
  update() {
    for (let i = 0; i < this.points.length; i++) {
      stroke(255, 0, 0, 100);
      let current = this.points[i];
      let next = this.points[i + 1];
      if (i + 2 > this.points.length) break;
      // line(current.x + d(), current.y + d(), next.x + d(), next.y + d());
      stroke(255, noise(yoff * i) * 200, 0);
      noFill();
      rect(
        current.x - 5,
        current.y - noise(xoff * i) * 20,
        noise(xoff * i) * 30
      );
    }
  }
}

const d = () => random(-10, 10);
