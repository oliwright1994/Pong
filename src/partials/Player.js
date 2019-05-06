import { SVG_NS, SETTINGS } from "../settings"

export default class Player {
    constructor(boardHeight, width, height, x, y, upKey, downKey, playerName) {
      this.width = width;
      this.height = height;
      this.boardHeight = boardHeight;
      this.x = x;
      this.y = y;
      this.speed = SETTINGS.speed;
      this.score = 0;
      this.upKey = upKey;
      this.downKey = downKey;
      this.name = playerName;


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

        mySvg.appendChild(paddle)
    }
}
