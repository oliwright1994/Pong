import { SVG_NS, GAMEOPTIONS } from "../settings"

export default class Board {
    constructor(width, height){
      this.width = width;
      this.height = height;
    }

  render(mySvg){

    let board = document.createElementNS(SVG_NS, 'rect')
    board.setAttributeNS(null, "width", this.width)
    board.setAttributeNS(null, "height", this.height)
    board.setAttributeNS(null, "fill", GAMEOPTIONS.boardColor )

    let midLine = document.createElementNS(SVG_NS, 'line')
    midLine.setAttributeNS(null, "stroke", "white")
    midLine.setAttributeNS(null, "stroke-width", 5)
    midLine.setAttributeNS(null, "stroke-dasharray", 7)
    midLine.setAttributeNS(null, "x1", this.width/2)
    midLine.setAttributeNS(null, "y1", 0)
    midLine.setAttributeNS(null, "x2", this.width/2)
    midLine.setAttributeNS(null, "y2", this.height)

    mySvg.appendChild(board)
    mySvg.appendChild(midLine)
    }
  }
