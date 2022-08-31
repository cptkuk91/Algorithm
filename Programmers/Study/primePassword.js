const checkPrime = (num) => {
  if (num % 2 === 0) return false;
  let sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

// 번호를 split 하는 방법
const splitNum = (num) => {
  const digits = num.toString().split("");
  return digits.map((el) => Number(el));
};

// 번호를 join 하는 방법
const joinDigits = (digits) => Number(digits.join(""));

const primePassword = (curPwd, newPwd) => {
  // 만약 비밀 번호 바꿀 필요가 없다면
  if (curPwd === newPwd) {
    return 0;
  }
  let head = 0;
  let tail = 0;
  let queue = [];

  let enQueue = (queue, item) => {
    queue.push(item);
    tail++;
  };

  const deQueue = (queue) => queue[head++];

  const isEmpty = (queue) => head === tail;

  enQueue(queue, [0, curPwd]);
  const isVisited = Array(10000).fill(false);
  isVisited[curPwd] = true;

  while (!isEmpty(queue)) {
    const [step, num] = deQueue(queue);
    for (let i = 0; i < 4; i++) {
      const digits = splitNum(num);
      for (let j = 0; j < 10; j++) {
        if (j !== digits[i]) {
          digits[i] = j;
          const next = joinDigits(digits);
          if (next === newPwd) {
            return step + 1;
          }
          if (next > 1000 && checkPrime(next) && !isVisited[next]) {
            isVisited[next] = true;
            enQueue(queue, [step + 1, next]);
          }
        }
      }
    }
  }
  return -1;
};
