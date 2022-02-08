//=============== Text functionality ===================

class DrawingText extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }
  hasInput = false;

  onMouseDown(coord, e) {
    if (this.hasInput) {
      return;
    } else {
      this.contextReal.fillStyle = fillStyle();
      this.contextReal.font = textSize();
      console.log("mouse down");
      console.log(this.contextReal.font);
    }
  }

  onMouseUp(coord, e) {
    if (this.hasInput) return;
    else {
      this.userTextX = e.clientX;
      this.userTextY = e.clientY;
      let input = document.createElement("input");
      document.body.appendChild(input);
      input.type = "text";
      input.className = "inputText";
      input.style.position = "absolute";
      input.style.left = `${this.userTextX}px`;
      input.style.top = `${this.userTextY}px`;
      input.placeholder = "Write your text here";
      input.focus();
      this.hasInput = true;
      this.getInput(coord);
    }
  }

  getInput(coord) {
    $(".inputText").on("keydown", (e) => {
      if (e.key == "Enter") {
        this.userText = e.currentTarget.value;
        $(".inputText").remove();
        this.drawUserText(coord);
        this.hasInput = false;
      }
    });
    $(".inputText").on("blur", (e) => {
      this.userText = e.currentTarget.value;
      $(".inputText").remove();
      this.drawUserText(coord);
      this.hasInput = false;
    });
  }

  drawUserText(coord) {
    console.log(this.userText);
    console.log(coord);
    this.contextReal.fillStyle = fillStyle();
    this.contextReal.font = textSize();
    this.contextReal.fillText(this.userText, coord[0], coord[1]);
    saveToSavePoint();
  }
}
//====== set current functionality to text
$("#drawing-text").click(() => {
  currentFunction = new DrawingText(contextReal);
});
