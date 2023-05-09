function solution(record) {
  let answer = [];
  let splitRecord = new Map();

  for (let i = 0; i < record.length; i++) {
    let [active, uid, name] = record[i].split(" ");
    if (active === "Enter" || active === "Change") {
      splitRecord.set(uid, name);
    }
  }

  for (let i = 0; i < record.length; i++) {
    let [active, uid] = record[i].split(" ");
    if (active === "Enter") {
      answer.push(`${splitRecord.get(uid)}님이 들어왔습니다.`);
    } else if (active === "Leave") {
      answer.push(`${splitRecord.get(uid)}님이 나갔습니다.`);
    }
  }

  return answer;
}
