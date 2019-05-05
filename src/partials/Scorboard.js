import { SVG_NS, SETTINGS } from "../settings"
import winSound from "../../public/sounds/win-01.wav";

export default class Scoreboard {
    constructor(width, height,){
        this.width = width;
        this.height = height;
        this.taDa = new Audio(winSound)

      }

      winScreen(mySVG, player) {
        let winner = document.createElementNS(SVG_NS, 'text')
        winner.setAttributeNS(null, 'fill', 'black')
        winner.setAttributeNS(null, 'x', (this.width/2))
        winner.setAttributeNS(null, 'y', (this.height/2))
        winner.setAttributeNS(null, 'font-size', (this.height/7))
        winner.setAttributeNS(null, 'text-anchor', 'middle')

        let winnerText = document.createTextNode(`WINNER! ${player.name}`)
        winner.appendChild(winnerText);
        mySVG.appendChild(winner);

        this.taDa.play()
    }


  render(mySvg, player1, player2){

    let score1 = document.createElementNS(SVG_NS, 'text')
    score1.setAttributeNS(null, 'fill', 'yellow')
    score1.setAttributeNS(null, 'x', (this.width/2) - 10)
    score1.setAttributeNS(null, 'y', (this.height/4))
    score1.setAttributeNS(null, 'font-size', (this.height/5))
    score1.setAttributeNS(null, 'text-anchor', 'end')

    let newScore1 = document.createTextNode(player1.score);
    score1.appendChild(newScore1);

    let score2 = document.createElementNS(SVG_NS, 'text')
    score2.setAttributeNS(null, 'fill', 'yellow')
    score2.setAttributeNS(null, 'x', (this.width/2) + 10)
    score2.setAttributeNS(null, 'y', (this.height/4))
    score2.setAttributeNS(null, 'font-size', (this.height/5))
    score2.setAttributeNS(null, 'text-anchor', 'start')


    let newScore2 = document.createTextNode(player2.score);
    score2.appendChild(newScore2);

    let sponsor = document.createElementNS(SVG_NS, 'text')
    sponsor.setAttributeNS(null, 'fill', 'yellow')
    sponsor.setAttributeNS(null, 'x', (this.width/2))
    sponsor.setAttributeNS(null, 'y', (this.height/12))
    sponsor.setAttributeNS(null, 'font-size', 14)
    sponsor.setAttributeNS(null, 'text-anchor', 'middle')


    let rolex = document.createTextNode('Rolex');
    sponsor.appendChild(rolex);

    let scoreDash = document.createElementNS(SVG_NS, 'text')
    scoreDash.setAttributeNS(null, 'fill', 'yellow')
    scoreDash.setAttributeNS(null, 'x', (this.width/2))
    scoreDash.setAttributeNS(null, 'y', (this.height/4))
    scoreDash.setAttributeNS(null, 'font-size', this.height/6)
    scoreDash.setAttributeNS(null, 'text-anchor', 'middle')


    let dash = document.createTextNode('-');
    scoreDash.appendChild(dash);

    let scoreBoardBoard = document.createElementNS(SVG_NS, 'rect')
    scoreBoardBoard.setAttributeNS(null, 'fill', 'rgb(0, 102, 51)')
    scoreBoardBoard.setAttributeNS(null, 'x', (this.width/2) - (this.height/6)*2)
    scoreBoardBoard.setAttributeNS(null, 'y', -2)
    scoreBoardBoard.setAttributeNS(null, "width", this.width/3)
    scoreBoardBoard.setAttributeNS(null, "height", this.height/3)
    scoreBoardBoard.setAttributeNS(null, "stroke", "black")
    scoreBoardBoard.setAttributeNS(null, "stroke-width", 3)


    let scoreBoardStripeTop = document.createElementNS(SVG_NS, 'line')
    scoreBoardStripeTop.setAttributeNS(null, "stroke", "rgb(84, 0, 139)")
    scoreBoardStripeTop.setAttributeNS(null, "stroke-width", 3)
    scoreBoardStripeTop.setAttributeNS(null, "x1", (this.width/2) - (this.height/6)*2 +2)
    scoreBoardStripeTop.setAttributeNS(null, "y1", 10)
    scoreBoardStripeTop.setAttributeNS(null, "x2", (this.width/2) + (this.height/6)*2 -2)
    scoreBoardStripeTop.setAttributeNS(null, "y2", 10)

    let scoreBoardStripeBot = document.createElementNS(SVG_NS, 'line')
    scoreBoardStripeBot.setAttributeNS(null, "stroke", "rgb(84, 0, 139)")
    scoreBoardStripeBot.setAttributeNS(null, "stroke-width", 3)
    scoreBoardStripeBot.setAttributeNS(null, "x1", (this.width/2) - (this.height/6)*2 +2)
    scoreBoardStripeBot.setAttributeNS(null, "y1", this.height/3 - 10)
    scoreBoardStripeBot.setAttributeNS(null, "x2", (this.width/2) + (this.height/6)*2 -2)
    scoreBoardStripeBot.setAttributeNS(null, "y2", this.height/3 - 10)

    mySvg.appendChild(scoreBoardBoard)
    mySvg.appendChild(scoreBoardStripeBot)
    mySvg.appendChild(scoreBoardStripeTop)
    mySvg.appendChild(score1)
    mySvg.appendChild(score2)
    mySvg.appendChild(sponsor)
    mySvg.appendChild(scoreDash)

    }
  }
