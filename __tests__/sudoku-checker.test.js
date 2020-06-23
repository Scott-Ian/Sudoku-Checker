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
    expect(sampleGrid.returnRow(3).length).toEqual(9);
    expect(sampleGrid.returnRow(3)[0].row).toEqual(3);
    expect(sampleGrid.returnRow(3)[0].column).toEqual(1);
    expect(sampleGrid.returnRow(3)[0].value).toEqual(null);
  });
});