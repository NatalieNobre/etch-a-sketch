const container = document.querySelector('#container');

const dimension = 16;

var lines, columns;

for (lines = 0; lines < dimension; lines++){
  const gridLine = document.createElement('gridLine');
  gridLine.classList.add('gridLine');

  for (columns = 0; columns < dimension; columns++){
    const square = document.createElement('square');
    square.classList.add('square');
    gridLine.appendChild(square);
  }

  container.appendChild(gridLine);
}

const squares = document.querySelectorAll('square');

squares.forEach((square) => {
  square.addEventListener('mouseover', (e) => {
    square.style.backgroundcolor = "black";
  });
});
