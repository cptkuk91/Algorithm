function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  const length = answer.length;
  return length > 2
    ? answer
    : answer + answer.charAt(length - 1).repeat(3 - length);
}
