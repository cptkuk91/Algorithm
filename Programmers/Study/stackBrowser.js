function solution(actions, start) {
  let prevStack = [];
  let nextStack = [];
  let current = start;

  // 시작값이 string 타입이 아닐 경우 false를 리턴한다.
  if (typeof start !== "string") {
    return false;
  }

  for (let i = 0; i < actions.length; i++) {
    // -1(뒤로가기) 그리고 뒤로 갈 페이지가 존재하는 경우
    if (actions[i] === -1 && prevStack.length !== 0) {
      let prevPage = prevStack.pop();
      nextStack.push(current);
      current = prevPage;
    } else if (actions[i] === 1 && nextStack.length !== 0) {
      let nextPage = nextStack.pop();
      prevStack.push(current);
      current = nextPage;
    } else if (typeof actions[i] === "string") {
      prevStack.push(current);
      current = actions[i];
      nextStack = [];
    }
  }

  return [prevStack, current, nextStack];
}
