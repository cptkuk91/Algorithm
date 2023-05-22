function solution(plans) {
  var answer = [];
  let stack = [];
  //시간을 기준으로 오름차순 정렬
  plans.sort((a, b) =>
    parseInt(a[1].replace(":", "")) > parseInt(b[1].replace(":", "")) ? 1 : -1
  );
  for (var i = 0; i < plans.length; i++) {
    if (i == plans.length - 1) {
      answer.push(plans[i][0]);
    } else {
      //a는 현재 시간에 할 일
      let a = plans[i];
      //b는 다음시간에 시작해야하는 일
      let b = plans[i + 1];
      //a와b의 시간차이를 구하자.
      let timeDifMs =
        new Date(`2023-04-11 ${b[1]}:00`).getTime() -
        new Date(`2023-04-11 ${a[1]}:00`).getTime();
      // 시간차이를 분으로 나누어 dif에 저장
      let dif = timeDifMs / (1000 * 60);
      // 시간차이가 걸리는 시간보다 크면
      if (dif >= a[2]) {
        //완료했으므로 answer에 넣고
        answer.push(a[0]);
        //남은 시간에 할 수 있는 일을 다 처리해주자.
        let remainTime = dif - a[2];
        while (stack.length > 0 && remainTime > 0) {
          let popped = stack.pop();
          if (popped[1] > remainTime) {
            stack.push([popped[0], popped[1] - remainTime]);
            remainTime = 0;
          } else {
            answer.push(popped[0]);
            remainTime -= popped[1];
          }
        }
      } else {
        //시간차이가 걸리는시간보다 작으면 stack에 남은시간과 함께 넣어주자.
        stack.push([a[0], a[2] - dif]);
      }
    }
  }
  //모든 일이 끝나고 남은일들 처리
  while (stack.length !== 0) {
    let p = stack.pop();
    answer.push(p[0]);
  }
  return answer;
}
