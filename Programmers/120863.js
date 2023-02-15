function solution(polynomial) {
  let splitWord = polynomial.split(" + ");

  let xResult = 0,
    pureResult = 0;

  splitWord.forEach((item) => {
    console.log(item);
    if (item.includes("x")) {
      let tmp = item.split("x");
      console.log(tmp);
      if (tmp[0] === "") {
        xResult += 1;
      } else if (tmp[0] !== "") {
        xResult += Number(tmp[0]);
      }
    } else {
      pureResult += Number(item);
    }
  });

  // xResult 가 1인 경우를 생각해야 한다. 만약 xResult가 1인 경우, 1x가 아니라 x다.
  if (xResult !== 0 && pureResult !== 0) {
    return xResult === 1 ? `x + ${pureResult}` : `${xResult}x + ${pureResult}`;
  } else if (xResult !== 0 && pureResult === 0) {
    return xResult === 1 ? `x` : `${xResult}x`;
  } else if (xResult === 0 && pureResult !== 0) {
    return `${pureResult}`;
  } else if (xResult === 0 && pureResult === 0) {
    return "0";
  }
}
