const display = document.getElementById("display");

// Display value in the input
const calculate = function (number) {
  display.value += number;
};

// Result
const result = function () {
  try {
    display.value = eval(display.value);
  } catch (err) {
    alert("Enter a correct syntax");
  }
};

// Delete
const del = function () {
  display.value = display.value.slice(0, -1);
};

// Clear All
const clearAll = function () {
  display.value = "";
};
