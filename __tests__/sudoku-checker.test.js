import { Cell } from './../src/cell.js'
import { Grid } from './../src/grid.js'

describe ('cell', ()=> {
  let sampleCell;
  let sampleGrid;

  beforeEach(() => {
    sampleCell = new Cell(1,1,1);
    sampleGrid = new Grid();
    sampleGrid.assignValuesByRow([8, 2, 7, 1, 5, 4, 3, 9, 6], 1)
    sampleGrid.assignValuesByRow([9, 6, 5, 3, 2, 7, 1, 4, 8], 2)
    sampleGrid.assignValuesByRow([3, 4, 1, 6, 8, 9, 7, 5, 2], 3)
    sampleGrid.assignValuesByRow([5, 9, 3, 4, 6, 8, 2, 7, 1], 4)
    sampleGrid.assignValuesByRow([4, 7, 2, 5, 1, 3, 6, 8, 9], 5)
    sampleGrid.assignValuesByRow([6, 1, 8, 9, 7, 2, 4, 3, 5], 6)
    sampleGrid.assignValuesByRow([7, 8, 6, 2, 3, 5, 9, 1, 4], 7)
    sampleGrid.assignValuesByRow([1, 5, 4, 7, 9, 6, 8, 2, 3], 8)
    sampleGrid.assignValuesByRow([2, 3, 9, 8, 4, 1, 5, 6, 7], 9)
  });
  
  test('should determine whether a cell has been created', () => {
    expect(sampleCell.value).toEqual(1);
    expect(sampleCell.row).toEqual(1);
    expect(sampleCell.column).toEqual(1);
  });

  test('should determine whether a grid has been created', () => {
    expect(sampleGrid).toBeDefined();
  });

  test('should check that grid array has 81 cells', () => {
    expect(sampleGrid.cells.length).toEqual(81);
    expect(sampleGrid.cells[0].row).toEqual(1);
    expect(sampleGrid.cells[0].column).toEqual(1);
    expect(sampleGrid.cells[0].value).toBeTruthy();
  });

  test('should return all cells within a given row', () => {
    const testRow = sampleGrid.returnRow(3);
    expect(testRow.length).toEqual(9);
    for (const cell of testRow) {
      expect(cell.row).toEqual(3);
      expect(cell.value).toBeTruthy();
    }
  });

  test('should return all cells within a given column', () => {
    const testColumn = sampleGrid.returnColumn(3);
    expect(testColumn.length).toEqual(9);
    for (const cell of testColumn) {
      expect(cell.column).toEqual(3);
      expect(cell.value).toBeTruthy();
    }
  });

  test('should return all cells with a given box', () => {
    const testBox = sampleGrid.returnBox(5);
    expect(testBox.length).toEqual(9);
    for (const cell of testBox) {
      expect(cell.row).toBeGreaterThanOrEqual(4);
      expect(cell.row).toBeLessThanOrEqual(6);
      expect(cell.column).toBeGreaterThanOrEqual(4);
      expect(cell.column).toBeLessThanOrEqual(6);
      expect(cell.value).toBeTruthy();
    }
  });

  test('should assign values to a given row', () => {
    const assignRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    sampleGrid.assignValuesByRow(assignRow, 3);
    for (let i = 0; i < 9; i++) {
      expect(sampleGrid.returnRow(3)[i].value).toEqual(assignRow[i]);
    }
  });

  test('should check whether a given array of cells can have its values retrieved', () => {
    const testVals = [3, 4, 7, 9, 1, 2, 5, 6, 8];
    sampleGrid.assignValuesByRow(testVals, 3);
    const valueArray = sampleGrid.retrieveValues(sampleGrid.returnRow(3));
    for (let i = 0; i < 9; i++) {
      expect(valueArray[i]).toEqual(testVals[i]);
    }
  })

  test('should check whether a given row, column or box contains the numbers one through 9, with no duplicates', () => {
    const testVals = [3, 4, 7, 9, 1, 2, 5, 6, 8];
    sampleGrid.assignValuesByRow(testVals, 3);
    const row3 = sampleGrid.returnRow(3);
    expect(sampleGrid.isLegal(row3)).toBe(true);
  });

  test('should return false if a duplicate does exist', () => {
    const testVals = [3,4,6,9,1,2,2,7,8];
    sampleGrid.assignValuesByRow(testVals, 3);
    const row3 = sampleGrid.returnRow(3);
    expect(sampleGrid.isLegal(row3)).toBe(false);
  });

  test('should check that an illegal sudoku is evaluated as illegal', () => {
    const dummyRow = [1,2,3,4,5,6,7,8,9];
    for (let i = 1; i <= 9; i++) {
      sampleGrid.assignValuesByRow(dummyRow, i);
    }
    expect(sampleGrid.isSolved()).toBe(false);
  });

  test('should determine that every row of a correct sudoku is legal', () => {
    for (let i = 1; i <= 9; i++) {
      expect(sampleGrid.isLegal(sampleGrid.returnRow(i))).toBe(true);
    }
  });

  test('should determine that every column of a correct sudoku is legal', () => {
    for (let i = 1; i <= 9; i++) {
      expect(sampleGrid.isLegal(sampleGrid.returnColumn(i))).toBe(true);
    }
  });

  test('should determine that every box of a correct sudoku is legal', () => {
    for (let i = 1; i <= 9; i++) {
      expect(sampleGrid.isLegal(sampleGrid.returnBox(i))).toBe(true);
    }
  });

  test('should determine that a fully legal sudoku is solved', () => {
    expect(sampleGrid.isSolved()).toBe(true);
  })
});


// const row1 = [8, 2, 7, 1, 5, 4, 3, 9, 6];
// const row2 = [9, 6, 5, 3, 2, 7, 1, 4, 8];
// const row3 = [3, 4, 1, 6, 8, 9, 7, 5, 3];
// const row4 = [5, 9, 3, 4, 6, 8, 2, 7, 1];
// const row5 = [4, 7, 2, 5, 1, 3, 6, 8, 9];
// const row6 = [6, 1, 8, 9, 7, 2, 4, 3, 5];
// const row7 = [7, 8, 6, 2, 3, 5, 9, 1, 4];
// const row8 = [1, 5, 4, 7, 9, 6, 8, 2, 3];
// const row9 = [2, 3, 9, 8, 4, 1, 5, 6, 7];