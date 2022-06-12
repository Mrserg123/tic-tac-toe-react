export function lineWinner(array) {
  let arr = array && array.join();
  switch (arr) {
    case "0,1,2":
      return "line_horizontally_1";
    case "3,4,5":
      return "line_horizontally_2";
    case "6,7,8":
      return "line_horizontally_3";
    case "0,3,6":
      return "line_vertically_1";
    case "1,4,7":
      return "line_vertically_2";
    case "2,5,8":
      return "line_vertically_3";
    case "0,4,8":
      return "line_rotate_45";
    case "2,4,6":
      return "line_rotate__45";
    default:
      return null;
  }
}
