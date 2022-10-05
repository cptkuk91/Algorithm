function solution(operations) {
  let result = [];

  operations.forEach((operation) => {
    let [command, num] = operation.split(" ");
    num = parseInt(num);
    switch (command) {
      case "I":
        result.unshift(num);
        break;
      case "D":
        if (result.length === 0) break;
        if (num === 1) result.sort((a, b) => b - a);
        if (num === -1) result.sort((a, b) => a - b);
        result.shift();
        break;
    }
  });
  if (!result.length) {
    return [0, 0];
  }

  result.sort((a, b) => b - a);
  return [result[0], result[result.length - 1]];
}
