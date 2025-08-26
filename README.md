# Tic-Tac-Toe Game

## Description
A simple and interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Players take turns placing X and O marks on a 3x3 grid, with the goal of getting three in a row horizontally, vertically, or diagonally.

## How to Play
1. The game starts with Player X's turn
2. Click on any empty cell to place your mark
3. Players alternate turns between X and O
4. The first player to get three of their marks in a row wins
5. If all cells are filled with no winner, the game ends in a draw
6. Click the "Restart Game" button to start a new game

## Project Structure
```
Tic-Tac-Toe/
├── index.html      # Main HTML file with game board structure
├── style.css       # CSS styles for the game interface
├── main.js         # JavaScript logic for game functionality
└── README.md       # Project documentation
```

## Bugs Fixed

### 1. Message Function Calls
**Issue**: The game won and game draw messages were not being displayed correctly because the message functions were not being called (missing parentheses).

**Before**:
```javascript
statusDisplay.textContent = messages.gameWon;
statusDisplay.textContent = messages.gameDraw;
```

**After**:
```javascript
statusDisplay.textContent = messages.gameWon();
statusDisplay.textContent = messages.gameDraw();
```

### 2. Restart Button Functionality
**Issue**: The restart button was defined in the HTML but had no event listener attached to it in JavaScript, making it non-functional.

**Before**: No event listener for the restart button

**After**: Added event listener to connect the restart button to the restart function
```javascript
restartButton.addEventListener('click', handleRestartGame);
```

## Features
- Clean and responsive UI
- Win detection with highlighted winning cells
- Draw detection
- Player turn indicator
- Restart functionality
- Visual feedback for game state

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
