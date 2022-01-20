let grid = 16;
//let boxColors = blackColor();
const container = document.querySelector('#container');

function makeGrid(gridSize){

    for(let i = 0; i<(gridSize*gridSize); i++){
        const content = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.appendChild(content).classList.add('box');
    }   
    
}

makeGrid(grid);

const randomBtn = document.querySelector('#random-btn');
const clearBtn = document.querySelector('#clear');
const blackBtn = document.querySelector("#black");
const newGridBtn = document.querySelector('#new-grid');

function blackColor(){
    const boxes = container.querySelectorAll('.box');
    blackBtn.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.background = 'black';
        }))
    })
}

blackColor();
randomColor();
clearBtn.addEventListener("click", clearGrid);

function clearGrid(){
    container.innerHTML = '';
     makeGrid(grid);
     blackColor();
     randomColor();
 }

 function getColor(){
    let color = "rgba(";
    for(let i = 0; i<3; i++){
        color += Math.floor(Math.random() * 255) + ',';
    }
    return color + 1;
}

 function randomColor(){
    const boxes = container.querySelectorAll('.box');
    randomBtn.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = `${getColor()}`;
        }))
    })
 }

 function getNewSize(){
     newGridBtn.addEventListener('click', () => {
        let userSelect = prompt('choose the size of the grid');
        if (userSelect == null || userSelect <1){
            grid = 16;
            clearGrid()
        }
        else if(userSelect > 100){
            grid = 100;
            clearGrid();
        }
        else{
            grid = userSelect;
            clearGrid();
        }
     })
 }

 getNewSize();
/*
clearBtn.addEventListener("click", clearGrid);
randomBtn.addEventListener("click", setRandomColor);

function clearGrid(){
   container.innerHTML = '';
    makeGrid(grid, boxColors);
}

function blackColor(){
    let color = "rgba(";
    for(let i = 0; i<3; i++){
        color += 0 + ',';
    }
    return color + 1;
}

function randomColor(){
    let color = "rgba(";
    for(let i = 0; i<3; i++){
        color += Math.floor(Math.random() * 255) + ',';
    }
    return color + 1;
}

function setRandomColor(){
    boxColors = randomColor();
    clearGrid();
}
*/

