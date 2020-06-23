import { Cell } from './cell.js';

export function Grid() {
  this.cells = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      this.cells.push(new Cell(null, i, j));
    }
  }
}