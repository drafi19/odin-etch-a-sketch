let initialSize = 16;
let draw = false;

let grid = document.querySelector('#grid');
let newBoard = document.querySelector('#gridSize');
let resetButton = document.querySelector('#reset');

let makeCell = (size) => {
    grid.innerHTML = '';
    let cellSize = 598 / size;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener('mouseover', drawing);
        grid.appendChild(cell);
    }
}

let newGrid = () => {
    let size;
    do {
        size = prompt('Enter the size of the grid (1 - 100)');
    } while (size < 1 || size > 100);
    makeCell(size); 
}

let reset = () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

let drawing = (e) => {
    e.target.style.backgroundColor = getRandomRGB();
}

let getRandomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

document.addEventListener('DOMContentLoaded', makeCell(initialSize));
newBoard.addEventListener('click', newGrid);
resetButton.addEventListener('click', reset);