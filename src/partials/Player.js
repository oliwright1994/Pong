import { SVG_NS, SETTINGS } from "../settings"

export default class Player {
    constructor(boardHeight, width, height, x, y, upKey, downKey, playerName) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = SETTINGS.speed;
      this.points = 0;
      this.score = "love"
      this.upKey = upKey;
      this.downKey = downKey;
      this.name = playerName


      document.addEventListener('keydown', (event) => {
        if (event.key === this.upKey ){
          this.up()
        }
        else if (event.key === this.downKey){
          this.down()
        }
      })
    }

    up() {
        if (this.y > 0) {
        this.y -= this.speed
        }
    }

    down(){
        if (this.y < this.boardHeight-this.height){
        this.y += this.speed
        }
    }

    render(mySvg) {
        let paddle = document.createElementNS(SVG_NS, 'rect')
        paddle.setAttributeNS(null, "width", this.width)
        paddle.setAttributeNS(null, "height", this.height)
        paddle.setAttributeNS(null, "x", this.x)
        paddle.setAttributeNS(null, "y", this.y)
        paddle.setAttributeNS(null, "fill", SETTINGS.paddleColor)

        let playerHead = document.createElementNS(SVG_NS, 'rect')
        playerHead.setAttributeNS(null, "width", this.width)
        playerHead.setAttributeNS(null, "height", this.height/5)
        playerHead.setAttributeNS(null, "x", this.x)
        playerHead.setAttributeNS(null, "y", this.y)
        playerHead.setAttributeNS(null, "fill", "tan")

        let playerHair = document.createElementNS(SVG_NS, 'rect')
        playerHair.setAttributeNS(null, "width", this.width)
        playerHair.setAttributeNS(null, "height", this.height/10)
        playerHair.setAttributeNS(null, "x", this.x)
        playerHair.setAttributeNS(null, "y", this.y)
        playerHair.setAttributeNS(null, "fill", "black")

        let playerLeg = document.createElementNS(SVG_NS, 'rect')
        playerLeg.setAttributeNS(null, "width", this.width)
        playerLeg.setAttributeNS(null, "height", this.height/6)
        playerLeg.setAttributeNS(null, "x", this.x)
        playerLeg.setAttributeNS(null, "y", this.y + this.height - this.height/4)
        playerLeg.setAttributeNS(null, "fill", "tan")

        mySvg.appendChild(paddle)
        mySvg.appendChild(playerHead)
        mySvg.appendChild(playerLeg)
        mySvg.appendChild(playerHair)
    }
}
