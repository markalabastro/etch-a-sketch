//prompt user for height and width of cells with a form
//add a button that calls the loop function
//create a for loop with i as the width that creates the horizontal divs
//create another loop within that loop that creates the vertical divs
//use the width and length values to determine the dimensions of the grid
//create a loop that adds the mouse over event listener to each div so that it adds the class color
//create a button that clears the color class

const width = document.querySelector("#width");
const height = document.querySelector("#height");
const submitButton = document.querySelector("#generate");
const resetButton = document.querySelector("#reset");

function removeBoxes() {
  const boxes = document.querySelectorAll(".box");
  for (const box of boxes) {
    box.remove();
  }
}

function removeColor() {
  const boxes = document.querySelectorAll(".box");
  for (const box of boxes) {
    box.classList.remove("color");
  }
}

function createGrid() {}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  removeBoxes();

  let numWidthBoxes = width.value;
  let numHeightBoxes = height.value;

  let widthBoxDim = 900 / numWidthBoxes;
  let heightBoxDim = 900 / numHeightBoxes;
  let grid = document.querySelector(".grid");

  for (i = 1; i <= numHeightBoxes; i++) {
    for (j = 1; j <= numWidthBoxes; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute(
        "style",
        `display:flex; width: ${widthBoxDim}px; height: ${heightBoxDim}px; `
      );
      box.addEventListener("mouseover", () => {
        box.classList.add("color");
      });
      grid.appendChild(box);
    }
  }
  grid.style.border = 0;
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  removeColor();
});
