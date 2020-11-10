// Referencing Buttons & display and storing them in an "Array"
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

// go through the buttons Array and add eventListener to each button to grab "Clicks"
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    // check if the display is not empty then only do the calculation
    if (display.value !== "") {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "C") {
    // clear display
    display.value = "";
  } else {
    // display result
    display.value += clickedButtonValue;
  }
}
