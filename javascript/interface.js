// values for the stroke and text sliders
let lineSlider = document.getElementById("line-width");
let lineValue = document.getElementById("line-width-value");

lineValue.innerHTML = lineSlider.value;
lineSlider.oninput = function () {
  lineValue.innerHTML = this.value;
};

let textSlider = document.getElementById("text-size");
let textValue = document.getElementById("text-size-value");

textValue.innerHTML = textSlider.value;
textSlider.oninput = function () {
  textValue.innerHTML = this.value;
};
