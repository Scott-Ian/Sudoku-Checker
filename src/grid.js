import { Cell } from './cell.js';

export function Grid() {
  this.cells = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      this.cells.push(new Cell(null, i, j));
    }
  }
}

Grid.prototype.returnRow = function(rowNumber) {
  let rowArray = [];
  for(const cell of this.cells) {
    if (cell.row === rowNumber) {
      rowArray.push(cell);
    }
  }
  return rowArray;
}

Grid.prototype.returnColumn = function(columnNumber) {
  let columnArray = [];
  for (const cell of this.cells) {
    if (cell.column === columnNumber) {
      columnArray.push(cell);
    }
  }
  return columnArray;
}

Grid.prototype.returnBox = function(boxNumber) {
  let boxArray = [];
  let minRow, maxRow, minColumn, maxColumn;
  switch (boxNumber) {
    case (1):
      minRow = 1;
      maxRow = 3;
      minColumn = 1;
      maxColumn = 3;
      break;
    case (2):
      minRow = 1;
      maxRow = 3;
      minColumn = 4;
      maxColumn = 6;
      break;
    case (3):
      minRow = 1;
      maxRow = 3;
      minColumn = 7;
      maxColumn = 9;
      break;
    case (4):
      minRow = 4;
      maxRow = 6;
      minColumn = 1;
      maxColumn = 3;
      break;
    case (5):
      minRow = 4;
      maxRow = 6;
      minColumn = 4;
      maxColumn = 6;
      break;
    case (6):
      minRow = 4;
      maxRow = 6;
      minColumn = 7;
      maxColumn = 9;
    break;
    case (7):
      minRow = 7;
      maxRow = 9;
      minColumn = 1;
      maxColumn = 3;
      break;
    case (8):
      minRow = 7;
      maxRow = 9;
      minColumn = 4;
      maxColumn = 6;
      break;
    case (9):
      minRow = 7;
      maxRow = 9;
      minColumn = 7;
      maxColumn = 9;
      break;
  }
  for (const cell of this.cells) {
    if (cell.column >= minColumn && cell.column <= maxColumn && cell.row <= maxRow && cell.row >= minRow) {
      boxArray.push(cell);
    }
  }
  return boxArray;
}

Grid.prototype.assignValuesByRow = function (numberArray, rowNumber) {
  const rowToBeAssigned = this.returnRow(rowNumber);
  for(let i = 0; i < 9; i++) {
    rowToBeAssigned[i].value = numberArray[i];
  }
}

Grid.prototype.retrieveValues = function(cellsArray) {
  const valueArray = cellsArray.map(function(cell) {
    return cell.value;
  });
  return valueArray;
}

Grid.prototype.isLegal = function(cellsArray) {
  const cellArrayValue = this.retrieveValues(cellsArray);
  for (let i = 1; i < 10; i++) {
    if (!cellArrayValue.includes(i)) {
      return false;
    }
  }
  return true;
}

Grid.prototype.isSolved = function() {
  for (let i = 1; i <= 9; i++) {
    const valueArrayRow = this.returnRow(i);
    const valueArrayColumn = this.returnColumn(i);
    const valueArrayBox = this.returnBox(i);
    if (!(this.isLegal(valueArrayRow) && this.isLegal(valueArrayColumn) && this.isLegal(valueArrayBox))) {
      return false;
    }
  }
  return true;
}