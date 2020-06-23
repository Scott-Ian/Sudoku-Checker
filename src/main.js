import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Grid } from './grid.js';

function gatherRow(rowNumber) {
  const row = [];
  for (let columnNumber = 1; columnNumber <= 9; columnNumber++) {
    row.push(parseInt($(`#row${rowNumber}column${columnNumber}`).val()));
  }
  return row;
}

function gatherUserInputs() {
  const row1 = gatherRow(1);
  const row2 = gatherRow(2);
  const row3 = gatherRow(3);
  const row4 = gatherRow(4);
  const row5 = gatherRow(5);
  const row6 = gatherRow(6);
  const row7 = gatherRow(7);
  const row8 = gatherRow(8);
  const row9 = gatherRow(9);
  return [row1, row2, row3, row4, row5, row6, row7, row8, row9];
}

function assignValues(inputArrays, grid) {
  for (let rowNumber = 1; rowNumber <= 9; rowNumber++) {
    grid.assignValuesByRow(inputArrays[rowNumber-1], rowNumber);
  }
}

function displaySolvedOrNot(solved) {
  if (solved) {
    $("#solved").show();
  } else {
    $("#notSolved").show();
  }
}

$(document).ready(function() {
  $("#checkSudoku").click(function(event) {
    event.preventDefault();
    $("#solved").hide();
    $("#notSolved").hide();

    let grid = new Grid();
    const inputArrays = gatherUserInputs();
    assignValues(inputArrays, grid);
    displaySolvedOrNot(grid.isSolved());
  })
})