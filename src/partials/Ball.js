import { SVG_NS, SETTINGS } from "../settings"
import helpers from "./helpers.js"
import forehandSound1 from "../../public/sounds/forehand.wav";
import forehandSound2 from "../../public/sounds/forehand2.wav";
import pongSound from "../../public/sounds/ball-bounce.wav";
import pointSound from "../../public/sounds/applause.wav";

export default class Ball {
    constructor(boardHeight, boardWidth, size, spaceKey, player1, player2) {
      this.boardHeight = boardHeight;
      this.boardWidth = boardWidth;
      this.size = size;
      this.direction = 1;
      this.vx = 0;
      this.vy = 0;
      this.spaceKey = spaceKey;
      this.ping = new Audio
      this.reset()
      this.moving = false
      this.paddlePing1 = new Audio(forehandSound1);
      this.paddlePing2 = new Audio(forehandSound2);
      this.wallPing = new Audio(pongSound)
      this.pointSound = new Audio(pointSound)

      document.addEventListener('keydown', (event) => {
        if (event.key === this.spaceKey && this.moving === false ){
          this.ballMovementStart();
          this.moving = true
        }
    })
}

    reset(){
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        this.vy = 0;
        this.vx = 0;
        this.moving = false
    }

    ballMovementStart(){
        this.vy = Math.floor(Math.random() * 10 - 5);
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    wallBounce(player1, player2) {
        const hitTop = this.y - this.size <= 0
        const hitBot = this.y + this.size >= this.boardHeight

        const hitLeft = this.x <= 0
        const hitRight = this.x >= this.boardWidth

        if (hitTop || hitBot) {
           this.vy = -this.vy
           this.wallPing.play()
       }

       else if (hitRight) {
           player1.points += 1
           this.pointSound.play()
           this.reset()
           switch (player1.points) {
            case 1:
              player1.score = "15";
              break;
            case 2:
              player1.score = "30";
              break;
            case 3:
              player1.score = "40";
              break;
            case 4:
              player1.score = "Game";
              break;
           }

       }
       else if (hitLeft) {
           player2.points += 1;
           this.pointSound.play()
           this.reset()
           switch (player2.points) {
            case 1:
              player2.score= "15";
              break;
            case 2:
              player2.score= "30";
              break;
            case 3:
              player2.score= "40";
              break;
            case 4:
              player2.score= "Game";
              break;
           }
       }
    }

    paddleBounce(player1, player2){

        if (this.vx > 0){

            const [leftX, _, topY, bottomY] = helpers.coordinates(
                player2.x,
                player2.y,
                player2.width,
                player2.height
            )

            if (
                this.x + this.size >= leftX &&
                (this.y >= topY && this.y <= bottomY)
            )
            {
              this.paddlePing1.play()
                this.vx = -this.vx - 1;
            }
        }

        else {
            const [_, rightX, topY, bottomY] = helpers.coordinates(
                player1.x,
                player1.y,
                player1.width,
                player1.height
            )

            if (
                this.x - this.size <= rightX &&
                (this.y >= topY && this.y <= bottomY)
            )
            {
              this.paddlePing2.play()
                this.vx = -this.vx + 1;
            }
        }
    }

    render(mySvg, player1, player2){

      this.x += this.vx;
      this.y += this.vy;

      let ball = document.createElementNS(SVG_NS, 'circle')
      ball.setAttributeNS(null, "r", this.size)
      ball.setAttributeNS(null, "cx", this.x)
      ball.setAttributeNS(null, "cy", this.y)
      ball.setAttributeNS(null, "fill", SETTINGS.ballColor)

      let whiteLineTop = document.createElementNS(SVG_NS, 'path')
      whiteLineTop.setAttributeNS(null, "d", `M ${this.x} ${(this.y - this.size)} Q ${this.x} ${this.y} ${(this.x + this.size)} ${this.y}`)
      whiteLineTop.setAttributeNS(null, "stroke-width", 3)
      whiteLineTop.setAttributeNS(null, "stroke", "white")
      whiteLineTop.setAttributeNS(null, "fill", "transparent")

      let whiteLineBot = whiteLineTop.cloneNode(true)
      whiteLineBot.setAttributeNS(null, "d", `M ${this.x} ${(this.y + this.size)} Q ${this.x} ${this.y} ${(this.x - this.size)} ${this.y}`)

      mySvg.appendChild(ball)
      mySvg.appendChild(whiteLineTop)
      mySvg.appendChild(whiteLineBot)

      this.wallBounce(player1, player2)
      this.paddleBounce(player1, player2)
  }
}

