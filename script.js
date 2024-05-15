const grid = document.getElementById('grid');

function createGrid(size) {
    grid.innerHTML = '';
    for (let i = 0; i < size * size; 1++) {
        const cell = document.createElement('div');
    }
}

createGrid(16);