export function calculateWinner(squares) {
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
  let arr = [];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      let obj = { winner: squares[a], line: lines[i] };
      return obj;
    } else if (
      [squares[a], squares[b], squares[c]].includes("X") &&
      [squares[a], squares[b], squares[c]].includes("O")
    ) {
      arr.push(lines[i]);
      if (arr.length === 8) {
        return { winner: "draw", line: null };
      }
    }
  }
  return { winner: null, line: null };
}
