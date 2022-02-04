//========== Undo ==================
function saveToSavePoint() {
  step++;
  if (step < savePointArray.length) {
    savePointArray.length = step;
  }
  savePointArray.push(
    contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
  );
  console.log(`this is step:${step} and saved to the savedpoint`);
}

//this makes the undo button work.
//(the undo from step 0 to -1 throws an error, but does not impact functionality)
$("#other-undo").click(() => {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  step--;
  redoArray.push(savePointArray.pop());
  contextReal.putImageData(savePointArray[step], 0, 0);
  console.log(`undo complete step:${step}`);
  // if (step <= 0) {
  //   contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  //   step--;
  //   console.log(step);
  // } else {
  //   contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  //   step--;
  //   redoArray.push(savePointArray.pop());
  //   contextReal.putImageData(savePointArray[step], 0, 0);
  //   console.log(`undo complete step:${step}`);
  // }
});

//this makes the redo button work.(however only 1 time)
$("#other-redo").click(() => {
  if (redoArray.length <= 0) {
    console.log("no more steps to redo");
  } else {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextReal.putImageData(redoArray[redoArray.length - 1], 0, 0);
    redoArray.pop();
    saveToSavePoint();
    console.log(`redo complete step:${step}`);
  }
});
