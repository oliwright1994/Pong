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


    let serviceLine1 = document.createElementNS(SVG_NS, 'line')
    serviceLine1.setAttributeNS(null, "stroke", "white")
    serviceLine1.setAttributeNS(null, "stroke-width", 3)
    serviceLine1.setAttributeNS(null, "x1", this.width/4)
    serviceLine1.setAttributeNS(null, "y1", this.height/6)
    serviceLine1.setAttributeNS(null, "x2", this.width/4)
    serviceLine1.setAttributeNS(null, "y2", (this.height/6)*5)

    let serviceLine2 = document.createElementNS(SVG_NS, 'line')
    serviceLine2.setAttributeNS(null, "stroke", "white")
    serviceLine2.setAttributeNS(null, "stroke-width", 3)
    serviceLine2.setAttributeNS(null, "x1", (this.width/4) *3 )
    serviceLine2.setAttributeNS(null, "y1", this.height/6)
    serviceLine2.setAttributeNS(null, "x2", (this.width/4) *3 )
    serviceLine2.setAttributeNS(null, "y2", (this.height/6)*5)

    let doublesLine1 = document.createElementNS(SVG_NS, 'line')
    doublesLine1.setAttributeNS(null, "stroke", "white")
    doublesLine1.setAttributeNS(null, "stroke-width", 3)
    doublesLine1.setAttributeNS(null, "x1", 0 )
    doublesLine1.setAttributeNS(null, "y1", this.height/6)
    doublesLine1.setAttributeNS(null, "x2", this.width )
    doublesLine1.setAttributeNS(null, "y2", this.height/6)

    let doublesLine2 = document.createElementNS(SVG_NS, 'line')
    doublesLine2.setAttributeNS(null, "stroke", "white")
    doublesLine2.setAttributeNS(null, "stroke-width", 3)
    doublesLine2.setAttributeNS(null, "x1", 0 )
    doublesLine2.setAttributeNS(null, "y1", (this.height/6)*5)
    doublesLine2.setAttributeNS(null, "x2", this.width )
    doublesLine2.setAttributeNS(null, "y2", (this.height/6)*5)

    let centreLine = document.createElementNS(SVG_NS, 'line')
    centreLine.setAttributeNS(null, "stroke", "white")
    centreLine.setAttributeNS(null, "stroke-width", 3)
    centreLine.setAttributeNS(null, "x1", this.width/4 )
    centreLine.setAttributeNS(null, "y1", this.height/2)
    centreLine.setAttributeNS(null, "x2", (this.width/4) *3 )
    centreLine.setAttributeNS(null, "y2", this.height/2)

    let netMidLine = document.createElementNS(SVG_NS, 'line')
    netMidLine.setAttributeNS(null, "stroke", "white")
    netMidLine.setAttributeNS(null, "stroke-width", 3)
    netMidLine.setAttributeNS(null, "x1", this.width/2)
    netMidLine.setAttributeNS(null, "y1", 0)
    netMidLine.setAttributeNS(null, "x2", this.width/2)
    netMidLine.setAttributeNS(null, "y2", this.height)

    let netLine1 = document.createElementNS(SVG_NS, 'line')
    netLine1.setAttributeNS(null, "stroke", "black")
    netLine1.setAttributeNS(null, "stroke-width", 3)
    netLine1.setAttributeNS(null, "x1", this.width/2 + 3)
    netLine1.setAttributeNS(null, "y1", 0)
    netLine1.setAttributeNS(null, "x2", this.width/2 + 3)
    netLine1.setAttributeNS(null, "y2", this.height)

    let netLine2 = document.createElementNS(SVG_NS, 'line')
    netLine2.setAttributeNS(null, "stroke", "black")
    netLine2.setAttributeNS(null, "stroke-width", 3)
    netLine2.setAttributeNS(null, "x1", this.width/2 - 3)
    netLine2.setAttributeNS(null, "y1", 0)
    netLine2.setAttributeNS(null, "x2", this.width/2 - 3)
    netLine2.setAttributeNS(null, "y2", this.height)

    mySvg.appendChild(board)
    mySvg.appendChild(serviceLine1)
    mySvg.appendChild(serviceLine2)
    mySvg.appendChild(doublesLine1)
    mySvg.appendChild(doublesLine2)
    mySvg.appendChild(centreLine)
    mySvg.appendChild(netMidLine)
    mySvg.appendChild(netLine1)
    mySvg.appendChild(netLine2)
    }
  }
