let font;
let points = [];
let txt, txt2;
let xoff = 0;
function preload() {
  font = loadFont("./fonts/Pantasia-Regular.woff");
}
function setup() {
  createCanvas(windowWidth, windowHeight).parent("p5");
  txt = new Txt("Hotmess", 150, 600, 450, 0.01);
  txt2 = new Txt("h0TmEss", 150, 600, 450, 0.8);
}

function draw() {
  background(255, 20);
  textSize(28);
  fill(0);
  xoff += 0.01;
  txt.update();
  txt2.update();
}

class Txt {
  constructor(word, x, y, size, sample) {
    this.points = font.textToPoints(word, x, y, size, { sampleFactor: sample });
  }
  update() {
    for (let i = 0; i < this.points.length; i++) {
      stroke(255, 0, 0, 10);
      let current = this.points[i];
      let next = this.points[i + 1];
      if (i + 2 > this.points.length) break;
      stroke(255, 0, 0);
      strokeWeight(0.7);
      noFill();
      line(current.x + d(), current.y + d(), next.x + d(), next.y + d());
      // bezier(
      //   current.x + 10,
      //   current.y + 10,
      //   current.x,
      //   current.y,
      //   next.x + 10,
      //   next.y + 10,
      //   next.x,
      //   next.y
      // );
      noStroke();
      fill(255, 255, 0, 10);
      rect(current.x - 20, current.y - 20, noise(xoff * i) * 40);
    }
  }
}

const d = () => random(-3, 3);
