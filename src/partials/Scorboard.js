import { SVG_NS, GAMEOPTIONS } from "../settings"

export default class Scoreboard {
    constructor(width, height,){
        this.width = width;
        this.height = height;

      }


  render(mySvg, player1, player2){

    let score1 = document.createElementNS(SVG_NS, 'text')
    score1.setInnerHTML(player1.score)

    let score2 = document.createElementNS(SVG_NS, 'text')
    score2.setInnerHTML(player2.score)

    mySvg.appendChild(score1)
    mySvg.appendChild(score2)


    }
  }
