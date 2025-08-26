document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const statusDisplay = document.querySelector('.player-turn');
    const restartButton = document.querySelector('.restart-btn');

    let gameActive = true;
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const messages = {
        playerTurn: () => `Player ${currentPlayer}'s Turn`,
        gameWon: () => `Player ${currentPlayer} Won!`,
        gameDraw: () => `Game ended in a Draw!`
    };

    function handleCellClick(e) {
        const clickedCell = e.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) return;

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        
        // Add class for styling based on current player
        clickedCell.classList.add(currentPlayer === 'X' ? 'x-player' : 'o-player');

        checkWin();
    }

    function checkWin() {
        let roundWon = false;
        let winningCombo = null;

        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                roundWon = true;
                winningCombo = winningConditions[i];
                break;
            }
        }

        if (roundWon) {
            statusDisplay.textContent = messages.gameWon();
            gameActive = false;
            highlightWinningCells(winningCombo);
            return;
        }

        if (!gameState.includes('')) {
            statusDisplay.textContent = messages.gameDraw();
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = messages.playerTurn();
    }

    function highlightWinningCells(winningCombo) {
        winningCombo.forEach(index => {
            cells[index].classList.add('winner');
        });
    }

    function handleRestartGame() {
        gameActive = true;
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        statusDisplay.textContent = messages.playerTurn();
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('winner', 'x-player', 'o-player');
        });
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartButton.addEventListener('click', handleRestartGame);
    
    // Initialize the game status
    statusDisplay.textContent = messages.playerTurn();
});