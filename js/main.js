var w = window.innerWidth
var h = window.innerHeight

function setup() {
  canvas=createCanvas(w, h, WEBGL)
}

function ring(r) {
  let n = 12
  let x = r / Math.sqrt(3)
  for(let i=1; i<n; i++) {
    if(i == n/2)
      continue
    push()
    let p = i/n
    rotateY(TWO_PI * p)
    translate(0,0,r*1.15)
    box(x, r/12, r/12)
    pop()
  }
}

function shell(r) {
  ring(r)
  push()
  rotateZ(TWO_PI/3+Math.sin(millis() / 11000)/4)
  ring(r)
  rotateZ(TWO_PI/3+Math.sin(millis() / 11000)/4)
  ring(r)
  pop()
}

function draw() {
  background(255)
  let r = Math.min(w,h)/4
  let offset = r/9
  rotateX(millis() / 5000)
  rotateZ(millis() / 7000)
  shell(r)
  rotateX(millis() / 5000)
  rotateZ(millis() / 7000)
  shell(r-offset)
  rotateX(millis() / 5000)
  rotateZ(millis() / 7000)
  shell(r-offset*2)
  rotateX(millis() / 5000)
  rotateZ(millis() / 7000)
  shell(r-offset*3)
  rotateX(millis() / 5000)
  rotateZ(millis() / 7000)
  shell(r-offset*4)
}

window.onresize = function() {
  w = window.innerWidth
  h = window.innerHeight
  resizeCanvas(w,h)
}
