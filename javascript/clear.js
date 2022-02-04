$("#other-clear").click(() => {
  if (confirm("Are you sure you wish to clear your canvas and start over?")) {
    contextReal.fillStyle = startBackgroundColor;
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
    savePointArray = [];
    redoArray = [];
    step = -1;
    console.log("Canvas cleared, variables reset");
  }
});

// probably needs to clear the undo and redo arrays as well
