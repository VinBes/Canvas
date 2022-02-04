//========== Bezier Curve ==================

class DrawingBezierCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  counter = 0;
  bezierObject = {
    beginPoint: {
      x: "",
      y: "",
    },
    curvePoint1: {
      x: 100,
      y: 400,
    },
    curvePoint2: {
      x: 150,
      y: 10,
    },
    endPoint: {
      x: "",
      y: "",
    },
  };

  onMouseDown(coord, e) {
    if (this.counter == 0) {
      this.contextReal.strokeStyle = strokeStyle();
      this.origX = coord[0];
      this.origY = coord[1];
    } else {
      console.log("ja");
    }
  }
  onDragging(coord, e) {
    this.contextDraft.strokeStyle = strokeStyle();
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }

  onMouseUp(coord, e) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.bezierCurveTo(
      this.bezierObject.curvePoint1.x,
      this.bezierObject.curvePoint1.y,
      this.bezierObject.curvePoint2.x,
      this.bezierObject.curvePoint2.y,
      coord[0],
      coord[1]
    );
    this.contextReal.stroke();
    this.counter++;
  }

  onMouseLeave() {}
  onMouseEnter() {}
}

//====== set current functionality to bezier-curve
$("#drawing-bezier").click(() => {
  currentFunction = new DrawingBezierCurve(contextReal, contextDraft);
});
