const boardSize = 40;
const defaultSize = 16;

const container = document.querySelector('#container');
container.setAttribute('style', `height: ${boardSize}; width: ${boardSize}`);

var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  eraseGrid();
  dimension = validateInput(prompt("Enter grid size:"));
  generateGrid(dimension);
  gridTrail();
});

function generateGrid(dimension){
  var lines, columns;
  var edge = 40/dimension;

  for (lines = 0; lines < dimension; lines++){
    const gridLine = document.createElement('gridLine');
    gridLine.classList.add('gridLine');
    gridLine.setAttribute('style', `height: ${edge}em`);

    for (columns = 0; columns < dimension; columns++){
      const square = document.createElement('square');
      square.classList.add('square');
      square.setAttribute('style', `height: ${edge}em; width: ${edge}em`);
      gridLine.appendChild(square);
    }

    container.appendChild(gridLine);
  }
}

function gridTrail(){
  const squares = document.querySelectorAll('square');

  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      e.target.style.background = 'black';
    });
  });
}

function eraseGrid(){
  while (container.hasChildNodes()){
    container.removeChild(container.firstChild);
  }
}

function validateInput(input){
  if (isNaN(input)){
    alert("Invalid grid size!");
    return defaultSize;
  }

  return input;
}

generateGrid(defaultSize);
gridTrail();
