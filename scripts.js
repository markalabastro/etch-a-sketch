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



submitButton.addEventListener('click', (e) => {

  e.preventDefault();

  let widthValue = width.value;
  let heightValue = height.value;

  let gridWidth = widthValue * 50;
  let gridHeight = heightValue * 50;
  
  let grid = document.querySelector(".grid")
  grid.setAttribute("style", `display:flex; width: ${gridWidth}px; height: ${gridHeight}px`)


  for (i=1; i<=widthValue; i++){
    for (j=1; j<=heightValue; j++){
      let box = document.createElement("div");
      box.classList.add("box")

      box.addEventListener("mouseover", () => {
        box.classList.add("color")
      })
      grid.appendChild(box);
    }
  }
})

