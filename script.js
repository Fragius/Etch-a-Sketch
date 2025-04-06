const grid = document.querySelector(".container");
const colourBtn = document.querySelector(".colour");
const darkBtn = document.querySelector(".dark");
const resizeBtn = document.querySelector(".resize")
let isColoured = true;
loadGrid()
function loadGrid(sideLength = 16) {
    for (let i = 0; i < sideLength; i++) { //i is the number of rows
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < sideLength; j++) { //j is the number of squares currently within the row
            const square = document.createElement("div");
            square.className = "square";
            square.addEventListener("mouseenter", () => paintSquare(square))
            row.appendChild(square);
        }
        grid.appendChild(row);
    } 
}

function paintSquare(element) {
    if (isColoured) {    
        element.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    } else {
        element.style.opacity = +element.style.opacity + 0.1;
        console.log(element.style.opacity);
    }
}  

function deleteGrid() {
    document.querySelectorAll(".row").
    forEach(row => row.remove());
}

resizeBtn.addEventListener("click", () => {
    deleteGrid();
    loadGrid(+prompt("choose a number between one and one hundred"))
})