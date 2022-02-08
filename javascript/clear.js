//========== Clear canvas functionality ==================
$("#other-clear").click(() => {
  if (confirm("Are you sure you wish to clear your canvas and start over?")) {
    contextReal.fillStyle = startBackgroundColor;
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
    savePointArray = [];
    redoArray = [];
    step = -1;
    bezierMouseDownCounter = 0;
    bezierDragCounter = 0;
    bezierMouseUpCounter = 0;
    console.log("Canvas cleared, variables reset");
  }
});
