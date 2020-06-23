import { Cell } from './../src/cell.js'
import { Grid } from './../src/grid.js'

describe ('cell', ()=> {
  let sampleCell;
  let sampleGrid;

  beforeEach(() => {
    sampleCell = new Cell(1,1,1);
    sampleGrid = new Grid();
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
    expect(sampleGrid.cells[0].value).toEqual(null);
  });

  test('should return all cells within a given row', () => {
    const testRow = sampleGrid.returnRow(3);
    expect(testRow.length).toEqual(9);
    for (const cell of testRow) {
      expect(cell.row).toEqual(3);
      expect(cell.value).toEqual(null);
    }
  });

  test('should return all cells within a given column', () => {
    const testColumn = sampleGrid.returnColumn(3);
    expect(testColumn.length).toEqual(9);
    for (const cell of testColumn) {
      expect(cell.column).toEqual(3);
      expect(cell.value).toEqual(null);
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
      expect(cell.value).toEqual(null);
    }
  })
});