import { SVG_NS, SETTINGS } from "../settings"

export default class PongBot {
    constructor(boardHeight, width, height, x, y) {
      this.width = width;
      this.height = height;
      this.boardHeight = boardHeight;
      this.x = x;
      this.y = y;
      this.speed = 5;
      this.score = 0;
      this.name = "PongBot";
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

    botAI(ball, board){
        if(ball.x > (board.width* 2/3) && ball.y < this.y){
            this.up()
        }
        else if(ball.x > (board.width* 2/3) && ball.y > this.y){
            this.down()
        }
    }

    render(mySvg, ball, board) {
        let paddle = document.createElementNS(SVG_NS, 'rect')
        paddle.setAttributeNS(null, "width", this.width)
        paddle.setAttributeNS(null, "height", this.height)
        paddle.setAttributeNS(null, "x", this.x)
        paddle.setAttributeNS(null, "y", this.y)
        paddle.setAttributeNS(null, "fill", SETTINGS.paddleColor)

        mySvg.appendChild(paddle)

        this.botAI(ball, board)


    }
}
