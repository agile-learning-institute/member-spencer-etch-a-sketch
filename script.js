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
    sketch.style.display = 'grid';
    sketch.style.width = '530px';
    sketch.style.height = '530px';
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}', 1fr)`;
    sketch.innerHTML = '';

    let mouseDown = false;

    sketch.addEventListener('mousedown', () => {
        mouseDown = true;
    });

    document.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.width = '100%';
        cell.style.height = '100%';
        cell.addEventListener('mousemove', () => {
            if (mouseDown) {
            cell.style.backgroundColor = currentColor;
        }
    });
 
    sketch.appendChild(cell);
    }
}    

document.getElementById('color-picker').addEventListener('change', function(event) {
    currentColor = event.target.value;
});