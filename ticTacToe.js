//make a board
var Board = function() {
  this.boardObj = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

}

//need logic to check all of the pieces
Board.prototype.check() {
  //need to look for everything in the row to be the same
  //need to look for everything in the columns to be the same
  //need to check for diagonals

  //loop through each row, if every subsequent value in the array is equal to it's predecessor, then game over

  //loop through the rows, check if the columns of each one is equal to it's predecessor

}

//make a trigger
Board.prototype.trigger(row, col, move) {

  if (this.boardObj[row][col] === '' && row <= 2 && col <= 2) {
    this.boardObj[row][col] = move;
    console.log(this.boardObj)
  } else {
    console.log('Please make a valid move');
  }

}
