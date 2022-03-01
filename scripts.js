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



submitButton.addEventListener('click', (e) => {

  const boxes = document.querySelectorAll(".box");
  for (const box of boxes){
    box.remove();
  }

  e.preventDefault();

  let widthBoxes = width.value;
  let heightBoxes = height.value;

  let widthBoxesDim = 898 / widthBoxes;
  let heightBoxesDim = 898 / heightBoxes;  
  let grid = document.querySelector(".grid");


  for (i=1; i<=widthBoxes; i++){
    for (j=1; j<=heightBoxes; j++){
      let box = document.createElement("div");
      box.classList.add("box")
      box.setAttribute("style", `display:flex; width: ${widthBoxesDim}px; height: ${heightBoxesDim}px; flex:0 1 1`);
      box.addEventListener("mouseover", () => {
        box.classList.add("color")
      })
      grid.appendChild(box);
    }
  }
})

resetButton.addEventListener('click', (e) => {
  e.preventDefault();

  const boxes = document.querySelectorAll(".box");
  for (const box of boxes){
    box.classList.remove("color");
  }
})

