function solution(phoneNumber) {
  let result = "*".repeat(phoneNumber.length - 4) + phoneNumber.slice(-4);
  return result;
}
