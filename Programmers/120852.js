function solution(n) {
  let answer = [];
  let result = [];

  while (n % 2 === 0) {
    answer.push(2);
    n /= 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }

  if (n > 2) answer.push(n);

  answer.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  return result;
}
