//========== Straight Line ==================

class StraightLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = strokeStyle();
    this.contextDraft.strokeStyle = strokeStyle();
    this.contextReal.lineWidth = lineWidth();
    this.contextDraft.lineWidth = lineWidth();
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }

  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
    saveToSavePoint();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}

//====== set current functionality to straight line
$("#drawing-straight-line").click(() => {
  currentFunction = new StraightLine(contextReal, contextDraft);
});
