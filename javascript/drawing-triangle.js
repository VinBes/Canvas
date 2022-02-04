class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.fillStyle = "#FFCC00";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    
    onDragging(coord, event) {
        this.contextDraft.fillStyle = "#FFCC00";
        this.contextDraft.clearRect(
            0,
            0,
            // canvasDraft.width,
            canvasDraft.height,
            this.closePath()
        );
        let height = this.origX * Math.cos(Math.PI / 6);
        this.contextDraft.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY,
            this.closePath()
        );
    }

    onMouseMove() {}

    OnMouseUp(coord) {
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height,
            this.closePath()
        );

        this.contextReal.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );
    }
    onMouseLeave(){}
    onMouseEnter(){}
}