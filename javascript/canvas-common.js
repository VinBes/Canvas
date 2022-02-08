/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let savePointArray = [];
let redoArray = [];
let step = -1;
let startBackgroundColor = "White";

// ===========Width of the Canvas==========

canvasReal.width = window.innerWidth / 1.3;
canvasDraft.width = window.innerWidth / 1.3;

window.addEventListener("resize", function () {
  canvasReal.width = window.innerWidth / 1.3;
  canvasDraft.width = window.innerWidth / 1.3;
  contextReal.fillStyle = startBackgroundColor;
  contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
});

//==============Styling===================
function strokeStyle() {
  contextReal.strokeStyle = $(".stroke-color-input").val();
  contextDraft.strokeStyle = $(".stroke-color-input").val();
}
function fillStyle() {
  contextReal.fillStyle = $(".fill-color-input").val();
  contextDraft.fillStyle = $(".fill-color-input").val();
}
function lineWidth() {
  contextReal.lineWidth = $("#line-width").val();
  contextDraft.lineWidth = $("#line-width").val();
}
function textSize() {
  contextReal.font = `${$("#text-size").val()}px ${$(".form-select").val()}`;
  contextDraft.font = `${$("#text-size").val()}px ${$(".form-select").val()}`;
}

//==============Mouse Events===================

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
