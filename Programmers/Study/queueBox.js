function solution(boxes) {
  let result = [];

  while (boxes.length > 0) {
    let checkBoxes = boxes.findIndex((el) => el > boxes[0]);

    if (checkBoxes === -1) {
      result.push(boxes.length);
      boxes.splice(0, boxes.length);
    } else {
      result.push(checkBoxes);
      boxes.splice(0, checkBoxes);
    }
  }
  return Math.max(...result);
}
