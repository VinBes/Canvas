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
