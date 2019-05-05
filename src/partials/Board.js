import { SVG_NS, SETTINGS } from "../settings"

export default class Board {
    constructor(width, height){
      this.width = width;
      this.height = height;
    }

    render(mySvg){

      let board = document.createElementNS(SVG_NS, 'rect')
      board.setAttributeNS(null, "width", this.width)
      board.setAttributeNS(null, "height", this.height)
      board.setAttributeNS(null, "fill", SETTINGS.boardColor )
      board.setAttributeNS(null, "stroke", 'rgb(0, 102, 51)' )
      board.setAttributeNS(null, "stroke-width", '10' )

      let serviceLineTop = document.createElementNS(SVG_NS, 'line')
      serviceLineTop.setAttributeNS(null, "stroke", "white")
      serviceLineTop.setAttributeNS(null, "stroke-width", 3)
      serviceLineTop.setAttributeNS(null, "x1", this.width/4)
      serviceLineTop.setAttributeNS(null, "y1", this.height/6)
      serviceLineTop.setAttributeNS(null, "x2", this.width/4)
      serviceLineTop.setAttributeNS(null, "y2", (this.height/6)*5)

      let serviceLineBot = serviceLineTop.cloneNode(true)
      serviceLineBot.setAttributeNS(null, "x1", (this.width/4) *3 )
      serviceLineBot.setAttributeNS(null, "x2", (this.width/4) *3 )

      let doublesLineTop = document.createElementNS(SVG_NS, 'line')
      doublesLineTop.setAttributeNS(null, "stroke", "white")
      doublesLineTop.setAttributeNS(null, "stroke-width", 3)
      doublesLineTop.setAttributeNS(null, "x1", 0 )
      doublesLineTop.setAttributeNS(null, "y1", this.height/6)
      doublesLineTop.setAttributeNS(null, "x2", this.width )
      doublesLineTop.setAttributeNS(null, "y2", this.height/6)

      let doublesLineBot = doublesLineTop.cloneNode(true)
      doublesLineBot.setAttributeNS(null, "y1", (this.height/6)*5)
      doublesLineBot.setAttributeNS(null, "y2", (this.height/6)*5)

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

      let netLineLeft = document.createElementNS(SVG_NS, 'line')
      netLineLeft.setAttributeNS(null, "stroke", "black")
      netLineLeft.setAttributeNS(null, "stroke-width", 3)
      netLineLeft.setAttributeNS(null, "x1", this.width/2 + 3)
      netLineLeft.setAttributeNS(null, "y1", 0)
      netLineLeft.setAttributeNS(null, "x2", this.width/2 + 3)
      netLineLeft.setAttributeNS(null, "y2", this.height)

      let netLineRight = netLineLeft.cloneNode(true)
      netLineRight.setAttributeNS(null, "x1", this.width/2 - 3)
      netLineRight.setAttributeNS(null, "x2", this.width/2 - 3)

      mySvg.appendChild(board)
      mySvg.appendChild(serviceLineTop)
      mySvg.appendChild(serviceLineBot)
      mySvg.appendChild(doublesLineTop)
      mySvg.appendChild(doublesLineBot)
      mySvg.appendChild(centreLine)
      mySvg.appendChild(netMidLine)
      mySvg.appendChild(netLineLeft)
      mySvg.appendChild(netLineRight)
      }
    }
