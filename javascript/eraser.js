class EraseCanvas extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.globalCompositeOperation = "destination-out";
    this.contextReal.fillStyle = fillStyle();
    this.contextReal.lineWidth = lineWidth();
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
  }

  onDragging(coord, event) {
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
  }
  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.globalCompositeOperation = "source-over";
    saveToSavePoint();
  }

  onMouseLeave() {}

  onMouseEnter() {}
}

$("#drawing-eraser").click(() => {
  currentFunction = new EraseCanvas(contextReal, contextDraft);
});
