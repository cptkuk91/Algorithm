function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let cnt = 1;
    let tmpStr = s.substr(0, i);
    let idx = 0;

    // idx += i를 해야하는 이유는 i를 1개로 묶냐, 2개로 묶냐, 3개로 묶냐 등을 생각해야한다.
    for (let idx = i; idx <= s.length; idx += i) {
      let nextStr = s.substr(idx, i);

      if (tmpStr === nextStr) {
        cnt++;
      } else {
        if (cnt === 1) str = str + tmpStr;
        else str = str + cnt + tmpStr;

        cnt = 1;
        tmpStr = nextStr;
      }
    }
    if (cnt === 1) str = str + tmpStr;
    else str = str + cnt + tmpStr;
    answer = Math.min(answer, str.length);
  }
  return answer;
}

// 아직 못풀었다...
