import { Board } from "./Board";
import { Piece } from "./Piece";

class Game {
  board = new Board();
  pieces: Piece[] = [];
  player1: string;
  player2: string;
  currentPlayer: "player1" | "player2";
  winner: "player1" | "player2" | "draw" | null;
  constructor(player1: string, player2: string) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = "player1";
    this.winner = null;
    this.pieces = this.makePieces();
  }
  makePieces() {
    let pieces: Piece[] = [];

    // Define the attributes
    const heights = ["short", "tall"] as const;
    const shapes = ["circle", "square"] as const;
    const colors = ["light", "dark"] as const;
    const tops = ["flat", "hollow"] as const;

    // Create each unique piece
    for (const height of heights) {
      for (const shape of shapes) {
        for (const color of colors) {
          for (const top of tops) {
            pieces.push(new Piece(height, color, shape, top));
          }
        }
      }
    }
    if (pieces.length !== 16) {
      throw new Error("Wrong number of pieces");
    }

    // Shuffle the array
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    return pieces;
  }
}
