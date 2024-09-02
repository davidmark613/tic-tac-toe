import { FC } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard: FC = () => {
    return (
        <ol id='game-board'>
            {initialGameBoard.map((row: Array<string | null>, rowIndex: number) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col: string | null, colIndex: number) => (
                            <li key={colIndex}>
                                <button>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
};

export default GameBoard;