// Each piece has 4 attributes:
// 1. height: tall or short
// 2. color: light or dark
// 3. shape: square or circle
// 4. top: flat or hollow
// it will also have a position on the board, the board is a 4x4 grid
// position: [0,0] through [3,3]
// the piece will have a method that allows it to be placed on the board
// placePiece(position: [number, number]): void

//I need a board class that is a 4x4 grid, each slot in the grid can be empty or have a piece
// board: [[],[],[],[]]
// the board will have a method that allows a piece to be placed on it
// placePiece(piece: Piece, position: [number, number]): void

//someone wins the game when they get 4 in a row, 4 in a column, 4 diagonally or 4 in a adjoining square of the same attributes
//the game will have a method that checks if someone has won

//to start I want the game to just be a flat display of the board and the pieces, I will worry about the user interface later
