import Square from "@/components/Square";

import { useEffect, useState } from "react";
type Plalyer = "X" | "O" | null | "BOTH";

function calculateWinner(squares: Plalyer[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
      "O"
  );
  const [winner, setWinner] = useState<Plalyer>(null);
  function reset() {
    setSquare(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer("X");
  }

  function setSquareValue(index: number) {
    const newData = squares.map((val, i) => {
      console.log(val, i, "from funtion");
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquare(newData);
    console.log(newData, "this is new data");
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }
  useEffect(() => {
    const win = calculateWinner(squares);
    if (win) {
      setWinner(win);
    }
    if (!win && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });

  return (
    <div>
      <p>hey {currentPlayer}, its your turn</p>
      {winner && winner !== "BOTH" && <p> Congratulations {winner}</p>}
      {winner && winner === "BOTH" && <p> Congratulations {winner}</p>}
      <div className="grid">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}
export default Board;
