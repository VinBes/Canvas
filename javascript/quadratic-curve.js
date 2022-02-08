//========== quadratic Curve ==================

class DrawingQuadraticCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  quadraticMouseDownCounter = 0;
  quadraticDragCounter = 0;
  quadraticMouseUpCounter = 0;
  quadraticObject = {
    beginPoint: {
      x: "",
      y: "",
    },
    curvePoint1: {
      x: "",
      y: "",
    },
    endPoint: {
      x: "",
      y: "",
    },
  };

  onMouseDown(coord, e) {
    if (this.quadraticMouseDownCounter == 0) {
      this.contextReal.strokeStyle = strokeStyle();
      this.contextDraft.strokeStyle = strokeStyle();
      this.contextReal.lineWidth = lineWidth();
      this.contextDraft.lineWidth = lineWidth();
      this.quadraticObject.beginPoint.x = coord[0];
      this.quadraticObject.beginPoint.y = coord[1];
      console.log("mousedown 1");
      console.log(`mousedown counter:${this.quadraticMouseDownCounter}`);
      console.log(`mousedrag counter:${this.quadraticDragCounter}`);
      console.log(`mouseup counter:${this.quadraticMouseUpCounter}`);
      this.quadraticMouseDownCounter++;
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.quadraticObject.curvePoint1.x = coord[0];
      this.quadraticObject.curvePoint1.y = coord[1];
      console.log("mousedown 2");
      console.log(`mousedown counter:${this.quadraticMouseDownCounter}`);
      console.log(`mousedrag counter:${this.quadraticDragCounter}`);
      console.log(`mouseup counter:${this.quadraticMouseUpCounter}`);
      this.quadraticMouseDownCounter = 0;
    }
  }
  onDragging(coord, e) {
    if (this.quadraticDragCounter == 0) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.quadraticObject.beginPoint.x,
        this.quadraticObject.beginPoint.y
      );
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.quadraticObject.curvePoint1.x = coord[0];
      this.quadraticObject.curvePoint1.y = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.quadraticObject.beginPoint.x,
        this.quadraticObject.beginPoint.y
      );
      this.contextDraft.quadraticCurveTo(
        this.quadraticObject.curvePoint1.x,
        this.quadraticObject.curvePoint1.y,
        this.quadraticObject.endPoint.x,
        this.quadraticObject.endPoint.y
      );
      this.contextDraft.stroke();
    }
  }

  onMouseUp(coord, e) {
    if (this.quadraticMouseUpCounter == 0) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.quadraticObject.endPoint.x = coord[0];
      this.quadraticObject.endPoint.y = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.quadraticObject.beginPoint.x,
        this.quadraticObject.beginPoint.y
      );
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
      this.quadraticDragCounter++;
      this.quadraticMouseUpCounter++;
      console.log("mouse up 1");
      console.log(this.quadraticMouseUpCounter);
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.quadraticObject.curvePoint1.x = coord[0];
      this.quadraticObject.curvePoint1.y = coord[1];
      this.contextReal.beginPath();
      this.contextReal.moveTo(
        this.quadraticObject.beginPoint.x,
        this.quadraticObject.beginPoint.y
      );
      this.contextReal.quadraticCurveTo(
        this.quadraticObject.curvePoint1.x,
        this.quadraticObject.curvePoint1.y,
        this.quadraticObject.endPoint.x,
        this.quadraticObject.endPoint.y
      );
      this.contextReal.stroke();
      console.log("mouse up 3");
      console.log(this.quadraticMouseUpCounter);
      this.quadraticDragCounter = 0;
      this.quadraticMouseUpCounter = 0;
      saveToSavePoint();
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}
}

//====== set current functionality to quadratic-curve
$("#drawing-quadratic").click(() => {
  currentFunction = new DrawingQuadraticCurve(contextReal, contextDraft);
});
