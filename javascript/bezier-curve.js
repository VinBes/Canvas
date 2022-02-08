//========== Bezier Curve ==================

class DrawingBezierCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  bezierMouseDownCounter = 0;
  bezierDragCounter = 0;
  bezierMouseUpCounter = 0;
  bezierObject = {
    beginPoint: {
      x: "",
      y: "",
    },
    curvePoint1: {
      x: "",
      y: "",
    },
    curvePoint2: {
      x: "",
      y: "",
    },
    endPoint: {
      x: "",
      y: "",
    },
  };

  onMouseDown(coord, e) {
    if (this.bezierMouseDownCounter == 0) {
      this.contextReal.strokeStyle = strokeStyle();
      this.contextDraft.strokeStyle = strokeStyle();
      this.contextReal.lineWidth = lineWidth();
      this.contextDraft.lineWidth = lineWidth();
      this.bezierObject.beginPoint.x = coord[0];
      this.bezierObject.beginPoint.y = coord[1];
      console.log("mousedown 1");
      console.log(`mousedown counter:${this.bezierMouseDownCounter}`);
      console.log(`mousedrag counter:${this.bezierDragCounter}`);
      console.log(`mouseup counter:${this.bezierMouseUpCounter}`);
      this.bezierMouseDownCounter++;
    } else if (this.bezierMouseDownCounter == 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.bezierObject.curvePoint1.x = coord[0];
      this.bezierObject.curvePoint1.y = coord[1];
      console.log("mousedown 2");
      console.log(`mousedown counter:${this.bezierMouseDownCounter}`);
      console.log(`mousedrag counter:${this.bezierDragCounter}`);
      console.log(`mouseup counter:${this.bezierMouseUpCounter}`);
      this.bezierMouseDownCounter++;
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.bezierObject.curvePoint2.x = coord[0];
      this.bezierObject.curvePoint2.y = coord[1];
      console.log("mousedown 3");
      console.log(`mousedown counter:${this.bezierMouseDownCounter}`);
      console.log(`mousedrag counter:${this.bezierDragCounter}`);
      console.log(`mouseup counter:${this.bezierMouseUpCounter}`);
      this.bezierMouseDownCounter = 0;
    }
  }
  onDragging(coord, e) {
    if (this.bezierDragCounter == 0) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.bezierObject.beginPoint.x,
        this.bezierObject.beginPoint.y
      );
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    } else if (this.bezierDragCounter == 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.bezierObject.curvePoint1.x = coord[0];
      this.bezierObject.curvePoint1.y = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.bezierObject.beginPoint.x,
        this.bezierObject.beginPoint.y
      );
      this.contextDraft.bezierCurveTo(
        this.bezierObject.curvePoint1.x,
        this.bezierObject.curvePoint1.y,
        this.bezierObject.curvePoint2.x,
        this.bezierObject.curvePoint2.y,
        this.bezierObject.endPoint.x,
        this.bezierObject.endPoint.y
      );
      this.contextDraft.stroke();
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.bezierObject.curvePoint2.x = coord[0];
      this.bezierObject.curvePoint2.y = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.bezierObject.beginPoint.x,
        this.bezierObject.beginPoint.y
      );
      this.contextDraft.bezierCurveTo(
        this.bezierObject.curvePoint1.x,
        this.bezierObject.curvePoint1.y,
        this.bezierObject.curvePoint2.x,
        this.bezierObject.curvePoint2.y,
        this.bezierObject.endPoint.x,
        this.bezierObject.endPoint.y
      );
      this.contextDraft.stroke();
    }
  }

  onMouseUp(coord, e) {
    if (this.bezierMouseUpCounter == 0) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.bezierObject.endPoint.x = coord[0];
      this.bezierObject.endPoint.y = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.bezierObject.beginPoint.x,
        this.bezierObject.beginPoint.y
      );
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
      this.bezierDragCounter++;
      this.bezierMouseUpCounter++;
      console.log("mouse up 1");
      console.log(this.bezierMouseUpCounter);
    } else if (this.bezierMouseUpCounter == 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.bezierObject.curvePoint1.x = coord[0];
      this.bezierObject.curvePoint1.y = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
        this.bezierObject.beginPoint.x,
        this.bezierObject.beginPoint.y
      );
      this.contextDraft.bezierCurveTo(
        this.bezierObject.curvePoint1.x,
        this.bezierObject.curvePoint1.y,
        this.bezierObject.curvePoint2.x,
        this.bezierObject.curvePoint2.y,
        this.bezierObject.endPoint.x,
        this.bezierObject.endPoint.y
      );
      this.contextDraft.stroke();
      this.bezierDragCounter++;
      this.bezierMouseUpCounter++;
      console.log("mouse up 2");
      console.log(this.bezierMouseUpCounter);
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.bezierObject.curvePoint2.x = coord[0];
      this.bezierObject.curvePoint2.y = coord[1];
      this.contextReal.beginPath();
      this.contextReal.moveTo(
        this.bezierObject.beginPoint.x,
        this.bezierObject.beginPoint.y
      );
      this.contextReal.bezierCurveTo(
        this.bezierObject.curvePoint1.x,
        this.bezierObject.curvePoint1.y,
        this.bezierObject.curvePoint2.x,
        this.bezierObject.curvePoint2.y,
        this.bezierObject.endPoint.x,
        this.bezierObject.endPoint.y
      );
      this.contextReal.stroke();
      console.log("mouse up 3");
      console.log(this.bezierMouseUpCounter);
      this.bezierDragCounter = 0;
      this.bezierMouseUpCounter = 0;
      saveToSavePoint();
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}
}

//====== set current functionality to bezier-curve
$("#drawing-bezier").click(() => {
  currentFunction = new DrawingBezierCurve(contextReal, contextDraft);
});
