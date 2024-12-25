let squareCount = prompt("Enter # of squares per side.");
const totalPixels = 960;
let pixelsPerSide = totalPixels / squareCount;
pixelsPerSide = Math.round(pixelsPerSide);

console.log(pixelsPerSide);

const div = document.querySelector('container');

