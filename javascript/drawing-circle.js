class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.contextReal.strokeStyle = strokeStyle();
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
      this.contextDraft.strokeStyle = strokeStyle();
      this.contextDraft.beginPath();
      this.contextDraft.arc(this.origX, this.origY,coord[0] - this.origX, 0, Math.PI * 2, true );
      this.contextDraft.stroke();
    }
    onMouseMove() {}
    
    onMouseUp(coord) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
      this.contextReal.beginPath();
      this.contextReal.arc(this.origX, this.origY, coord[0] - this.origX, 0, Math.PI * 2, true );
      this.contextReal.stroke();
      saveToSavePoint();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
$("#drawing-circle").click(() => {
  currentFunction = new DrawingCircle(contextReal, contextDraft);
})


