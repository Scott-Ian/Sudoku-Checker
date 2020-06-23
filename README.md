# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

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

9. Behavior: Program should be able to check if any returned row, column, or box has duplicate values or not.
  * Input: box = [1,2,3,4,5,6,7,8,9]
  * Output: "no duplicates"
  * isComplete: _False_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

https://choosealicense.com/
https://en.wikipedia.org/wiki/MIT_License
https://en.wikipedia.org/wiki/GNU_General_Public_License

Copyright (c) 2016 **_{List of contributors or company name}_**