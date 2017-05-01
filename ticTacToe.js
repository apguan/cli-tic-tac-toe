//make a board
var Board = function() {
  this.boardObj = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

}

//make a trigger
Board.prototype.trigger(row, col, move) {
  if (this.boardObj[row][col] === '' && row <= 2 && col <= 2) {
    this.boardObj[row][col] = move;
  } else {
    console.log('Please make a valid move');
  }
}

//need logic to check all of the pieces
Board.prototype.check() {

}
