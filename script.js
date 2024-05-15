function changeGridSize() {
    let size = prompt("Enter the number of squares per size for the new grid (max 100 squares):", 16);
    if (size)
}

let currentColor = 'grey';

const sketch = document.getElementById('sketch');

document.getElementById('color-picker').addEventListener('change', function(event) {
    currentColor = event.target.value;
});

function createGrid(size) {
    sketch.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = currentColor;
        });
        sketch.appendChild(cell);
    }
}

createGrid(16);

console.log

//Need to add a feature where using the mouse when the left button is held down rather than the hover function//