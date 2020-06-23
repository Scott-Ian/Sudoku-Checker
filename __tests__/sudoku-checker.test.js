import { Cell } from './../src/cell.js'
import { Grid } from './../src/grid.js'

describe ('cell', ()=> {

  test('should determine whether a cell has been created', () => {
    const sampleCell = new Cell(1, 1, 1);
    expect(sampleCell.value).toEqual(1);
    expect(sampleCell.row).toEqual(1);
    expect(sampleCell.column).toEqual(1);
  });

  test('should determine whether a grid has been created', () => {
    const sampleGrid = new Grid();
    expect(sampleGrid).toBeDefined();
  })
});