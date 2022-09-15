function solution(people, limit) {
  let count = 0;
  left = 0;
  right = people.length - 1;

  const sorted = people.sort((a, b) => a - b);

  while (left < right) {
    if (sorted[left] + sorted[right] <= limit) {
      left++;
      right--;
      count++;
    } else {
      right--;
    }
  }
  return people.length - count;
}
