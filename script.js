let squareCount = prompt("Enter # of squares per side.");
const totalPixels = 960;
let pixelsPerSide = totalPixels / squareCount;
pixelsPerSide = Math.round(pixelsPerSide);

console.log(pixelsPerSide);

const div = document.querySelector('.container');

for (let i = 0; i < squareCount; i++) {
  let squareDiv = document.createElement('div');
  div.appendChild(squareDiv);
  squareDiv.classList.add("content");
  squareDiv.setAttribute("style", `width: ${pixelsPerSide}px; 
                          height: ${pixelsPerSide}px;
                          background: yellow;
}

