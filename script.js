const sketch = document.getElementById('sketch');

function createGrid(size) {
    sketch.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        sketch.appendChild(cell);
    }
}

createGrid(16);

console.log