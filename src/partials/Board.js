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




    let netMidLine = document.createElementNS(SVG_NS, 'line')
    netMidLine.setAttributeNS(null, "stroke", "white")
    netMidLine.setAttributeNS(null, "stroke-width", 5)
    netMidLine.setAttributeNS(null, "stroke-dasharray", 10)
    netMidLine.setAttributeNS(null, "x1", this.width/2)
    netMidLine.setAttributeNS(null, "y1", 0)
    netMidLine.setAttributeNS(null, "x2", this.width/2)
    netMidLine.setAttributeNS(null, "y2", this.height)

    mySvg.appendChild(board)
    mySvg.appendChild(netMidLine)

    }
  }
