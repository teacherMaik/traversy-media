function genRandNum() {
  return Math.floor(Math.random() * 100) + 1;
}

function celToFar(cel) {
  return ((cel * 9) / 5 + 32);
}

function farToCel(far) {
  return ((far - 32) * (5 / 9));
}

/* Exporting with Common JS
module.exports = { 
  genRandNum,
  celToFar,
  farToCel,
}; */

export { genRandNum, celToFar, farToCel }