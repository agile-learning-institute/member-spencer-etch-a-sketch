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