export class Piece {
  height: "tall" | "short";
  color: "light" | "dark";
  shape: "circle" | "square";
  top: "flat" | "hollow";
  position: [number, number] | [null, null];

  constructor(
    height: "tall" | "short",
    color: "light" | "dark",
    shape: "circle" | "square",
    top: "flat" | "hollow"
  ) {
    this.height = height;
    this.color = color;
    this.shape = shape;
    this.top = top;
    this.position = [null, null];
  }

  placePiece(position: [number, number]) {
    this.position = position;
  }
}
