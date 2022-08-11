function solution(num1, num2) {
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }

  while (num1 >= num2) {
    num1 -= num2;
  }

  return num1;
}
