$("#other-save").click(() => {
  saveImageAs();
});

function saveImageAs() {
  let filename = prompt(`Choose a file name:`);
  if (filename != null) {
    let link = document.createElement("a");
    link.download = filename;
    link.href = canvasReal.toDataURL();
    link.click();
    link.remove();
  }
}

// currently it works, however it would be more user friendly if we could figure out the use
// of a modal that has input boxes.
