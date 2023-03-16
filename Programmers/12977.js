function solution(nums) {
  let answer = 0;
  let tmp = 0;

  function isPrime(num) {
    // for(let i = 2; num > i; i++) {
    //     if(num % i === 0) {
    //         return false;
    //     }
    // }
    // return num > 1;

    // 아래 Math.sqrt 사용하는게 빠르다.
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        tmp = nums[i] + nums[j] + nums[k];
        if (isPrime(tmp)) answer++;
      }
    }
  }

  return answer;
}
