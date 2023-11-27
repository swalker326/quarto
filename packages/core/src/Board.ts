import { Piece } from "./Piece";

export class Board {
  board: Piece[][];

  constructor() {
    this.board = [[], [], [], []];
  }

  placePiece(piece: Piece, position: [number, number]) {
    this.board[position[0]][position[1]] = piece;
  }
  getBoard() {
    return this.board;
  }
  isWinner() {
    let board = this.board;
    let winner = false;
    //check rows
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      let rowWinner = true;
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j].height !== row[j + 1].height) {
          rowWinner = false;
        }
      }
      if (rowWinner) {
        winner = true;
      }
    }
    //check columns
    for (let i = 0; i < board.length; i++) {
      let columnWinner = true;
      for (let j = 0; j < board.length - 1; j++) {
        if (board[j][i].height !== board[j + 1][i].height) {
          columnWinner = false;
        }
      }
      if (columnWinner) {
        winner = true;
      }
    }
    //check diagonals
    let diagonalWinner = true;
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i][i].height !== board[i + 1][i + 1].height) {
        diagonalWinner = false;
      }
    }
    if (diagonalWinner) {
      winner = true;
    }
    //check reverse diagonals
    let reverseDiagonalWinner = true;
    for (let i = 0; i < board.length - 1; i++) {
      if (
        board[i][board.length - 1 - i].height !==
        board[i + 1][board.length - 2 - i].height
      ) {
        reverseDiagonalWinner = false;
      }
    }
    if (reverseDiagonalWinner) {
      winner = true;
    }
    return winner;
  }
}
