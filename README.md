# _Sudoku Checker_

#### _An app to check for sudoku legality, 06.23.20_

#### By _**Ian Scott and Micheal Hansen**_

## Description

_This app will check the legality of a Sudoku; just type in the relevant numbers into the boxes, then click 'Check Sudoku'_

## Setup/Installation Requirements

_To setup this project, you'll need a browser (we used Chrome), a package manager (we used node.js), and git. To alter the text, you'll need a word processor (we used Visual Studio Code)_

* _Download the repo from `https://github.com/Scott-Ian/Sudoku-Checker` or clone with `git clone https://github.com/Scott-Ian/Sudoku-Checker`_
* _Navigate into the Sudoku-Checker directory_
* _Install the necessary packages `npm install`_
* _Build the project with `npm run build`, then open dist/index.html in your browser of choice_
* _Alternately, open a live development server in your browser with `npm run start`_

## Known Bugs

_None currently known_

## Support and contact details

_Send a message on Github._

## Technologies Used

_Created in visual studio code. Utilizes node.js and webpack to bundle the javascript and css_

## Specifications

1. Behavior: Program should be able to define a cell
  * Input: Cell(x,y,z);
  * Output: Cell object created
  * isComplete: _True_

2. Behavior: Cell should have value, row, and column attributes
  * Input: Cell(3, 1, 1);
  * Output: Cell = {this.value = 3; this.row = 1; this.column = 1;}
  * isComplete: _True_
  
3. Behavior: Program should define a grid
  * Input: none necessary
  * Output: Grid object created
  * isComplete: _True_

4. Behavior: Grid should contain 81 cells, each with a unique column and row combination
* Input: none necessary
* Output: Grid = {cells = [_81 cells_]}
* isComplete: _True_

5. Behavior: Grid object should be able to return all cells in a given row
  * Input: grid.returnRow(3);
  * Output: row = [_9 cells where cell.row = 3_]
  * isComplete: _True_

6. Behavior: Grid object should be able to return all cells in a given column
  * Input: grid.returnColumn(3);
  * Output: column = [_9 cells where cell.column = 3_]
  * isComplete: _True_

7. Behavior: Grid object should be able to return all cells in a given 3x3 box
  * Input: grid.returnBox(1);
  * Output: box = [_9 cells where 1 <= cell.row <= 3 and 1 <= cell.column <= 3]
  * isComplete: _True_

8. Behavior: Program should be able to assign values to a given row.
  * Input: Grid.assignValuesByRow([1,2,3,4,5,6,7,8,9], 3)
  * Output: Grid.returnRow(3) = [1,2,3,4,5,6,7,8,9];
  * isComplete: _True_

9. Behavior: Program should be able to retrive values from the cells array.
  * Input: Grid.retriveValues(Grid.returnRow(3));
  * Output: [1,2,3,4,5,6,7,8,9];
  * isComplete: _True_

10. Behavior: Program should be able to check if any returned row, column, or box has values 1-9.
  * Input: box = [1,2,3,4,5,6,7,8,9]
  * Output: true
  * isComplete: _True_

11. Behavior: Program should be able to check if a completed sudoku puzzle is legal.
 * Input: *sample completed sudoku*
 * Output: This is a completed and legal sudoku!
 * isComplete: _False_

### License

_This software is available under the MIT License_

Copyright (c) 2020 **_{Ian Scott and Micheal Hansen}_**