function changeGridSize() {
    let size = prompt("Enter the number of squares per size for the new grid (max 100 squares):", 16);
    if (size !== null) {
        size = parseInt(size);
        if (size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    }
}

let currentColor = 'grey';

function createGrid(size) {
    const sketch = document.getElementById('sketch');
    sketch.style.width = '530px';
    sketch.style.height = '530px';
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}', 1fr)`;
    sketch.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.flex = '1 0 auto';
        cell.style.height = 'calc(960px / ' + size + ')';
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = currentColor;
        });
        sketch.appendChild(cell);
    }
}    

document.getElementById('color-picker').addEventListener('change', function(event) {
    currentColor = event.target.value;
});

createGrid(16);

console.log

//Need to add a feature where using the mouse when the left button is held down rather than the hover function//