import React from "react";
import "./style/style.css";

function Square({ className, clickHandler, data, square, styleLine }) {
  return (
    <>
      <td
        className={styleLine ? className + " " + styleLine : className}
        onClick={() => clickHandler(data)}
      >
        {square}
      </td>
    </>
  );
}
export default Square;
