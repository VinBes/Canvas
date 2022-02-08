class DrawingTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextDraft.strokeStyle = strokeStyle();

    this.origX = coord[0];
    this.origY = coord[1];
    console.log("mouse Down");
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeStyle = strokeStyle();
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.lineTo(this.origX - [coord[0] - this.origX], coord[1]);
    this.contextDraft.closePath();
    this.contextDraft.stroke();
    console.log("dragging");
  }

  onMouseMove() {
    this.contextDraft.beginPath();
    this.contextDraft.closePath();
  }

  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.lineTo(this.origX - [coord[0] - this.origX], coord[1]);
    this.contextReal.closePath();
    this.contextReal.stroke();
    saveToSavePoint();
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
$("#drawing-triangle").click(() => {
  currentFunction = new DrawingTriangle(contextReal, contextDraft);
});
