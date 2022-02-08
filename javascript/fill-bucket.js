//========== Fill Bucket ==================

class FillBucket extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord, e) {
    this.contextReal.fillStyle = fillStyle();
    this.origX = coord[0];
    this.origY = coord[1];
    this.imageDataArray = this.contextReal.getImageData(
      0,
      0,
      canvasReal.width,
      canvasReal.height
    );
    this.startPixelPos = (this.origY * canvasReal.width + this.origX) * 4;
    this.startR = this.imageDataArray.data[this.startPixelPos];
    this.startG = this.imageDataArray.data[this.startPixelPos + 1];
    this.startB = this.imageDataArray.data[this.startPixelPos + 2];
    this.pixelStack = [[this.origX, this.origY]];
    while (this.pixelStack.length) {
      this.newPos = this.pixelStack.pop();
      this.x = this.newPos[0];
      this.y = this.newPos[1];
      this.pixelPos = (this.y * canvasReal.width + this.x) * 4;
      while (this.y-- >= 0 && this.matchStartColor(this.pixelPos)) {
        this.pixelPos -= canvasReal.width * 4;
      }
      this.pixelPos += canvasReal.width * 4;
      this.y++;
      this.reachLeft = false;
      this.reachRight = false;
      while (
        this.y++ < canvasReal.height - 1 &&
        this.matchStartColor(this.pixelPos)
      ) {
        this.colorPixel(this.pixelPos);
        if (this.x > 0) {
          if (this.matchStartColor(this.pixelPos - 4)) {
            if (!this.reachLeft) {
              this.pixelStack.push([this.x - 1, this.y]);
              this.reachLeft = true;
            }
          } else if (this.reachLeft) {
            this.reachLeft = false;
          }
        }
        if (this.x < canvasReal.width - 1) {
          if (this.matchStartColor(this.pixelPos + 4)) {
            if (!this.reachRight) {
              this.pixelStack.push([this.x + 1, this.y]);
              this.reachRight = true;
            }
          } else if (this.reachRight) {
            this.reachRight = false;
          }
        }
        this.pixelPos += canvasReal.width * 4;
      }
    }

    this.contextReal.putImageData(this.imageDataArray, 0, 0);
  }

  matchStartColor(pixelPos) {
    this.r = this.imageDataArray.data[pixelPos];
    this.g = this.imageDataArray.data[pixelPos + 1];
    this.b = this.imageDataArray.data[pixelPos + 2];
    return (
      this.r == this.startR && this.g == this.startG && this.b == this.startB
    );
  }
  colorPixel(pixelPos) {
    this.rgbObject = this.hexToRgb(this.contextReal.fillStyle);
    this.imageDataArray.data[pixelPos] = this.rgbObject.r;
    this.imageDataArray.data[pixelPos + 1] = this.rgbObject.g;
    this.imageDataArray.data[pixelPos + 2] = this.rgbObject.b;
    this.imageDataArray.data[pixelPos + 3] = 255;
  }
  hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  onMouseUp(coord, e) {
    saveToSavePoint();
  }
}
//====== set current functionality to fill bucket
$("#drawing-fill-bucket").click(() => {
  currentFunction = new FillBucket(contextReal);
});
