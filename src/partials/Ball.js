import { SVG_NS, GAMEOPTIONS } from "../settings"

export default class Ball {
    constructor(boardHeight, boardWidth, size, spaceKey) {
      this.boardHeight = boardHeight;
      this.boardWidth = boardWidth;
      this.size = size;
      this.direction = 1;
      this.vx = 0;
      this.vy = 0;
      this.spaceKey = spaceKey;
      this.reset()


      document.addEventListener('keydown', (event) => {
        if (event.key === this.spaceKey ){
          this.reset();
          this.ballMovementStart();
        }
    })
}

    reset(){
            this.x = this.boardWidth / 2;
            this.y = this.boardHeight / 2;
          }

    ballMovementStart(){
    this.vy = Math.floor(Math.random() * 10 - 5);
    this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    wallBounce() {
        const hitTop = this.y - this.size <= 0
        const hitBot = this.y + this.size >= this.boardHeight

        const hitLeft = this.x - this.size <= 0
        const hitRight = this.x + this.size >= this.boardWidth

        if (hitLeft || hitRight) {
            this.vx = -this.vx
        }
         else if (hitTop || hitBot) {
            this.vy = -this.vy
        }
    }

    render(mySvg){

        this.x += this.vx;
        this.y += this.vy;

        let ball = document.createElementNS(SVG_NS, 'circle')
        ball.setAttributeNS(null, "r", this.size)
        ball.setAttributeNS(null, "cx", this.x)
        ball.setAttributeNS(null, "cy", this.y)
        ball.setAttributeNS(null, "fill", GAMEOPTIONS.ballColor)

        mySvg.appendChild(ball)

        this.wallBounce()
    }
}
