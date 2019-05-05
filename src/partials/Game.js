import { SVG_NS, KEYS, SETTINGS } from "../settings.js";
import Board from "./Board.js";
import Player from "./Player.js";
import Ball from "./Ball.js";
import Scoreboard from "./Scorboard.js";

export default class Game {
  constructor(elementID, width, height) {
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(elementID)
    this.board = new Board(this.width, this.height)
    this.paused = false


    this.paddleWidth = SETTINGS.paddleWidth;
    this.paddleHeight = SETTINGS.paddleHeight;
    this.boardGap = SETTINGS.boardGap;

    this.player1 = new Player(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      KEYS.w,
      KEYS.s,
      SETTINGS.player1Name,
    )

    this.player2 = new Player (
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width - this.paddleWidth - this.boardGap),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down,
      SETTINGS.player2Name,
    )

    this.gameBall = new Ball (
      this.height,
      this.width,
      SETTINGS.ballSize,
      KEYS.spaceBar,
      )

    this.scoreBoard = new Scoreboard (
      this.width,
      this.height,
      )



      document.addEventListener('keydown', (event) => {
        if (event.key === KEYS.pauseKey ){
          this.paused = !this.paused
        }
      })

      document.addEventListener('keydown', (event) => {
        if (event.key === KEYS.newGameKey ){
          this.paused = false
          this.gameBall.reset()
          this.player1.points = 0
          this.player2.points = 0
        }
      })
  }

  render() {
    if (this.paused) return
    this.gameElement.innerHTML = ""

    let svg = document.createElementNS(SVG_NS, "svg")
    svg.setAttributeNS(null, "width", this.width)
    svg.setAttributeNS(null, "height", this.height)
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`)
    this.gameElement.appendChild(svg)

    this.board.render(svg)
    this.player1.render(svg)
    this.player2.render(svg)
    this.scoreBoard.render(svg, this.player1, this.player2)

    if (this.player1.points < SETTINGS.pointsToWin && this.player2.points < SETTINGS.pointsToWin ){
    this.gameBall.render(svg, this.player1, this.player2)
    }

    if (this.player1.points === SETTINGS.pointsToWin){
    this.scoreBoard.winScreen(svg, this.player1)
    this.scoreBoard.render(svg, this.player1, this.player2)
    this.paused = true
    }
    else if (this.player2.points === SETTINGS.pointsToWin){
      this.scoreBoard.winScreen(svg, this.player1)
      this.scoreBoard.render(svg, this.player1, this.player2)
      this.paused = true
    }


}
}

