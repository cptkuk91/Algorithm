function solution(name, yearning, photo) {
  let result = new Array(photo.length).fill(null);

  function makeObject(name, yearning) {
    const obj = {};
    for (let i = 0; i < name.length; i++) {
      obj[name[i]] = yearning[i];
    }
    return obj;
  }

  const checkPoint = makeObject(name, yearning);

  for (let i = 0; i < photo.length; i++) {
    let tmpSum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (checkPoint[photo[i][j]] !== undefined) {
        tmpSum += checkPoint[photo[i][j]];
      } else {
        tmpSum = tmpSum;
      }
    }
    result[i] = tmpSum;
  }
  return result;
}
