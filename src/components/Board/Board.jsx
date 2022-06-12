import React, { useEffect, useState } from "react";
import "./style/style.css";
import Square from "../Square/Square";
import { calculateWinner } from "../../helper/calculateWinner";
import { lineWinner } from "../../helper/lineWinner";
import ModalName from "../modals/ModalNames";
import ModalAlert from "../modals/ModalAlert";

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  let winner = calculateWinner(square);

  useEffect(() => {
    if (winner.winner === "X") {
      setScore((prev) => ({ ...prev, X: prev.X + 1 }));
    } else if (winner.winner === "O") {
      setScore((prev) => ({ ...prev, O: prev.O + 1 }));
    }
    if (!winner.winner) return;
    const timer = setTimeout(() => {
      setSquare(Array(9).fill(null));
    }, 2000);
    if (winner.winner === "draw") {
      setScore({ X: 0, O: 0 });
    }
    return () => clearTimeout(timer);
  }, [winner.winner]);

  function clickHandler(data) {
    const newSquare = [...square];
    if (winner.winner || newSquare[data]) return;
    newSquare[data] = isNext ? "X" : "O";
    setSquare(newSquare);
    setIsNext(!isNext);
  }

  return (
    <div className="board_center">
      <div className="board_background">
        <ModalName setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
        {winner.winner === "draw" && <ModalAlert />}
        <table
          width={350}
          style={{
            borderCollapse: "collapse",
            fontSize: "5vw",
            textAlign: "center",
            margin: 20,
            position: "relative",
          }}
        >
          <tbody>
            <tr>
              <Square
                className={"square board_square_right"}
                styleLine={lineWinner(winner.line)}
                data={0}
                clickHandler={clickHandler}
                square={square[0]}
              />

              <Square
                className={"square board_square_right "}
                data={1}
                clickHandler={clickHandler}
                square={square[1]}
              />
              <Square
                className={"square "}
                data={2}
                clickHandler={clickHandler}
                square={square[2]}
              />
            </tr>
            <tr>
              <Square
                className={"square board_square_center board_square_right"}
                data={3}
                clickHandler={clickHandler}
                square={square[3]}
              />
              <Square
                className={"square board_square_center board_square_right"}
                data={4}
                clickHandler={clickHandler}
                square={square[4]}
              />
              <Square
                className={"square board_square_center"}
                data={5}
                clickHandler={clickHandler}
                square={square[5]}
              />
            </tr>
            <tr>
              <Square
                className={"square board_square_right"}
                data={6}
                clickHandler={clickHandler}
                square={square[6]}
              />
              <Square
                className={"square board_square_right"}
                data={7}
                clickHandler={clickHandler}
                square={square[7]}
              />
              <Square
                className={"square"}
                data={8}
                clickHandler={clickHandler}
                square={square[8]}
              />
            </tr>
          </tbody>
        </table>
        <div className="board_info">
          <div>Score</div>
          <div style={{ marginTop: 10 }}>
            {player1} (X): {score.X}
          </div>
          <div style={{ marginTop: 10 }}>
            {player2} (O): {score.O}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Board;
