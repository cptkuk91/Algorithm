function solution(numbers) {
  let result = [];
  let nums = numbers.split("");

  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  // 순열 조합에 대한 이해가 필요하다.
  function getPermutation(arr, fixed) {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        let newNum = fixed + arr[i];
        let copyArr = [...arr];
        // 사용 된 값을 제한다. (splice에 대한 이해가 필요하다.)
        copyArr.splice(i, 1);
        if (!result.includes(+newNum) && isPrime(+newNum)) {
          result.push(+newNum);
        }
        getPermutation(copyArr, newNum);
      }
    }
  }

  getPermutation(nums, "");
  return result.length;
}
