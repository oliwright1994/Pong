import { SVG_NS, KEYS, GAMEOPTIONS } from "../settings.js";
import Board from "./Board.js";
import Player from "./Player.js";

export default class Game {
  constructor(elementID, width, height) {
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(elementID)
    this.board = new Board(this.width, this.height)

    this.paddleWidth = GAMEOPTIONS.paddleWidth;
    this.paddleHeight = GAMEOPTIONS.paddleHeight;
    this.boardGap = GAMEOPTIONS.boardGap;

    this.player1 = new Player(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      KEYS.w,
      KEYS.s,
    )

    this.player2 = new Player (
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width - this.paddleWidth - this.boardGap),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down,
    )
  }

  render() {
    this.gameElement.innerHTML = ""

    let svg = document.createElementNS(SVG_NS, "svg")
    svg.setAttributeNS(null, "width", this.width)
    svg.setAttributeNS(null, "height", this.height)
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`)
    this.gameElement.appendChild(svg)

    this.board.render(svg)
    this.player1.render(svg)
    this.player2.render(svg)

  }
}

