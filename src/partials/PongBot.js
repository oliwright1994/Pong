import { SVG_NS, SETTINGS } from "../settings"

export default class PongBot {
    constructor(boardHeight, height, x, y) {
      this.width = 32;
      this.height = height;
      this.boardHeight = boardHeight;
      this.x = x;
      this.y = y;
      this.speed = SETTINGS.pongBotSpeed;
      this.score = 0;
      this.name = "PongBot";
      this.level = 1;
    }

    up() {
        if (this.y > 0) {
        this.y -= this.speed*this.level
        }
    }

    down(){
        if (this.y < this.boardHeight-this.height){
        this.y += this.speed*this.level
        }
    }

    botAI(ball, board){
        if (Math.sign(ball.vx) > 0){
        if(ball.x > (board.width - (board.width/6 * this.level)) && ball.y < this.y ){
            this.up()
        }
        else if(ball.x > (board.width - (board.width/6 * this.level)) && ball.y > (this.y +this.height)){
            this.down()
        }
    }
    }

    render(mySvg, ball, board) {
        let head = document.createElementNS(SVG_NS, 'rect')
        head.setAttributeNS(null, "width", this.width)
        head.setAttributeNS(null, "height", this.height)
        head.setAttributeNS(null, "x", this.x)
        head.setAttributeNS(null, "y", this.y)
        head.setAttributeNS(null, "fill", "white")

        let leftEye = document.createElementNS(SVG_NS, 'rect')
        leftEye.setAttributeNS(null, "width", this.width/8)
        leftEye.setAttributeNS(null, "height", this.height/4)
        leftEye.setAttributeNS(null, "x", this.x+(this.width/4))
        leftEye.setAttributeNS(null, "y", this.y+this.height/5)
        leftEye.setAttributeNS(null, "fill", "black")
        leftEye.setAttributeNS(null, "rx", 3)


        let rightEye = leftEye.cloneNode(true)
        rightEye.setAttributeNS(null, "x", this.x+ this.width*0.75 - this.width/8)

        let mouth = document.createElementNS(SVG_NS, 'path')
        mouth.setAttributeNS(null, "stroke", "black")
        mouth.setAttributeNS(null, "stroke-width", 3)
        mouth.setAttributeNS(null, "stroke-linecap", "round")
        mouth.setAttributeNS(null, "fill", "transparent")

        let eyeBrowLeft = document.createElementNS(SVG_NS, 'line')
        eyeBrowLeft.setAttributeNS(null, "stroke", "none")
        eyeBrowLeft.setAttributeNS(null, "stroke-width", "3")
        eyeBrowLeft.setAttributeNS(null, "stroke-linecap", "round")
        eyeBrowLeft.setAttributeNS(null, "x1", this.x+this.width/4)
        eyeBrowLeft.setAttributeNS(null, "y1", this.y+this.height/3)
        eyeBrowLeft.setAttributeNS(null, "x2", this.x+this.width/2)
        eyeBrowLeft.setAttributeNS(null, "y2", this.y+this.height/2)

        let eyeBrowRight = eyeBrowLeft.cloneNode(true)

        eyeBrowLeft.setAttributeNS(null, "x1", this.x+this.width*3/4)
        eyeBrowLeft.setAttributeNS(null, "y1", this.y+this.height/3)
        eyeBrowLeft.setAttributeNS(null, "x2", this.x+this.width/2)
        eyeBrowLeft.setAttributeNS(null, "y2", this.y+this.height/2)

        switch(this.level) {

            case 2:
            mouth.setAttributeNS(null, "d", `M ${this.x+(this.width/4)},${this.y + (this.height* 2/3)} Q ${this.x+(this.width/2)},${this.y+this.height*2/3} ${this.x+ this.width*0.75},${this.y + (this.height*2/3)}`)
            head.setAttributeNS(null, "fill", "#ffb2b2")
            break;

            case 3:
            mouth.setAttributeNS(null, "d", `M ${this.x+(this.width/4)},${this.y + (this.height* 3/4)} Q ${this.x+(this.width/2)},${this.y+this.height*2/3} ${this.x+ this.width*0.75},${this.y + (this.height*3/4)}`)
            head.setAttributeNS(null, "fill", "#ff6666")
            break;

            case 4:
            mouth.setAttributeNS(null, "d", `M ${this.x+(this.width/4)},${this.y + (this.height* 6/7)} Q ${this.x+(this.width/2)},${this.y+this.height*2/3} ${this.x+ this.width*0.75},${this.y + (this.height*6/7)}`)
            leftEye.setAttributeNS(null, "height", this.height/6)
            rightEye.setAttributeNS(null, "height", this.height/6)
            head.setAttributeNS(null, "fill", "#ff1919")
            break;

            case 5:
            mouth.setAttributeNS(null, "d", `M ${this.x+(this.width/4)},${this.y + (this.height* 6/7)} Q ${this.x+(this.width/2)},${this.y+this.height*2/3} ${this.x+ this.width*0.75},${this.y + (this.height*6/7)}`)
            leftEye.setAttributeNS(null, "height", this.height/6)
            rightEye.setAttributeNS(null, "height", this.height/6)
            leftEye.setAttributeNS(null, "y", this.y+this.height/2)
            rightEye.setAttributeNS(null, "y", this.y+this.height/2)
            eyeBrowLeft.setAttributeNS(null, "stroke", "black")
            eyeBrowRight.setAttributeNS(null, "stroke", "black")
            head.setAttributeNS(null, "fill", "#b20000")
            break;

            default:
            mouth.setAttributeNS(null, "d", `M ${this.x+(this.width/4)},${this.y + (this.height* 2/3)} Q ${this.x+(this.width/2)},${this.y+this.height} ${this.x+ this.width*0.75},${this.y + (this.height*2/3)}`)
            head.setAttributeNS(null, "fill", "white")
        }

        mySvg.appendChild(head)
        mySvg.appendChild(leftEye)
        mySvg.appendChild(rightEye)
        mySvg.appendChild(mouth)
        mySvg.appendChild(eyeBrowLeft)
        mySvg.appendChild(eyeBrowRight)

        this.botAI(ball, board)

    }
}
