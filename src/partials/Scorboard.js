import { SVG_NS, SETTINGS } from "../settings"
import winSound from "../../public/sounds/win-01.wav";
import pongBotWinSound from "../../public/sounds/pong-04.wav";

export default class Scoreboard {
    constructor(width, height,){
        this.width = width;
        this.height = height;
        this.taDa = new Audio(winSound)
        this.pongBotWinSound = new Audio(pongBotWinSound)

      }

      winScreenPongBot(mySVG) {
        let endGameMessage = "Something has gone wrong :/"
        switch (Math.round(Math.random() * 3)) {
            case 1:
              endGameMessage = "THE FLESH IS WEAK!";
              break;
            case 2:
              endGameMessage = "PONGBOT IS TOO STRONG!";
              break;
            default:
              endGameMessage = "TRY AGAIN PUNY MORTAL!";
        }
        let winner = document.createElementNS(SVG_NS, 'text')
        winner.setAttributeNS(null, 'fill', 'black')
        winner.setAttributeNS(null, 'x', (this.width/2))
        winner.setAttributeNS(null, 'y', (this.height/2))
        winner.setAttributeNS(null, 'font-size', (this.width/15))
        winner.setAttributeNS(null, 'text-anchor', 'middle')

        let winnerText = document.createTextNode(`${endGameMessage}`)
        winner.appendChild(winnerText);

        let winnerBackground = document.createElementNS(SVG_NS, 'rect')
        winnerBackground.setAttributeNS(null, "width", this.width)
        winnerBackground.setAttributeNS(null, "height", this.height)
        winnerBackground.setAttributeNS(null, "fill", SETTINGS.boardColor )

        mySVG.appendChild(winnerBackground);
        mySVG.appendChild(winner);

        this.pongBotWinSound.play()


      }

      winScreen(mySVG, player) {
        let winner = document.createElementNS(SVG_NS, 'text')
        winner.setAttributeNS(null, 'fill', 'black')
        winner.setAttributeNS(null, 'x', (this.width/2))
        winner.setAttributeNS(null, 'y', (this.height/2))
        winner.setAttributeNS(null, 'font-size', (this.width/15))
        winner.setAttributeNS(null, 'text-anchor', 'middle')

        let winnerText = document.createTextNode(`WINNER! ${player.name}`)
        winner.appendChild(winnerText);

        let winnerBackground = document.createElementNS(SVG_NS, 'rect')
        winnerBackground.setAttributeNS(null, "width", this.width)
        winnerBackground.setAttributeNS(null, "height", this.height)
        winnerBackground.setAttributeNS(null, "fill", SETTINGS.boardColor )

        mySVG.appendChild(winnerBackground);
        mySVG.appendChild(winner);

        this.taDa.play()
    }



  render(mySvg, player1, pongBot){

    let score1 = document.createElementNS(SVG_NS, 'text')
    score1.setAttributeNS(null, 'fill', 'white')
    score1.setAttributeNS(null, 'x', (this.width/2) - (this.height/8))
    score1.setAttributeNS(null, 'y', (this.height/5))
    score1.setAttributeNS(null, 'font-size', (this.height/5))
    score1.setAttributeNS(null, 'text-anchor', 'middle')

    let newScore1 = document.createTextNode(player1.score);
    score1.appendChild(newScore1);

    let score2 = document.createElementNS(SVG_NS, 'text')
    score2.setAttributeNS(null, 'fill', 'white')
    score2.setAttributeNS(null, 'x', (this.width/2) + (this.height/8))
    score2.setAttributeNS(null, 'y', (this.height/5))
    score2.setAttributeNS(null, 'font-size', (this.height/5))
    score2.setAttributeNS(null, 'text-anchor', 'middle')

    let newScore2 = document.createTextNode(pongBot.score);
    score2.appendChild(newScore2);

    mySvg.appendChild(score1)
    mySvg.appendChild(score2)
    }
  }
