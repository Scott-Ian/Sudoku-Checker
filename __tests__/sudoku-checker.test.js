import { Cell } from './../src/cell.js'

describe ('cell', ()=> {

  test('should determine whether a cell has been created', () => {
    const sampleCell = new Cell (1, 1, 1);
    expect(sampleCell.value).toEqual(1);
    expect(sampleCell.row).toEqual(1);
    expect(sampleCell.column).toEqual(1);
  });
});