const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // count를 1로 설정한 이유는 k 번 째 수를 따질 때, 0부터 시작한게 아니기 때문이다.
  let count = 1;
  let left = 0;
  let right = 0;
  let result = 0;

  while (count <= k) {
    if (arr1[left] < arr2[right]) {
      result = arr1[left];
      left++;
    } else {
      result = arr2[right];
      right++;
    }
    count++;
  }
  return result;
};
