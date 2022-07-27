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
    box(x, r/4, r/12)
    pop()
  }
}

function shell(r, t) {
  ring(r)
  push()
  rotateZ(TWO_PI/3+Math.sin(t / 11000)/4)
  ring(r)
  rotateZ(TWO_PI/3+Math.sin(t / 11000)/4)
  ring(r)
  pop()
}

function draw() {
  let t = (new Date).getTime()
  background(224)
  let r = Math.min(w,h)/4
  let offset = r/9
  camera(0, 0, -offset*2, 0, 0, 1, 0, 1, 0)
  let eyeZ = ((height/2) / tan(PI/6))
  perspective(PI/2, width/height, eyeZ/100, eyeZ*100)
  rotateX(t / 5000)
  rotateZ(t / 7000)
  shell(r, t)
  rotateX(t / 5000)
  rotateZ(t / 7000)
  shell(r-offset, t)
  rotateX(t / 5000)
  rotateZ(t / 7000)
  shell(r-offset*2, t)
  rotateX(t / 5000)
  rotateZ(t / 7000)
  shell(r-offset*3, t)
  rotateX(t / 5000)
  rotateZ(t / 7000)
  shell(r-offset*4, t)
}

window.onresize = function() {
  w = window.innerWidth
  h = window.innerHeight
  resizeCanvas(w,h)
}
