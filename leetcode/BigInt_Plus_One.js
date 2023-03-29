// BigInt를 활용한 숫자 더하기
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = BigInt(digits.join("")) + BigInt(1);
  return result.toString().split("");
};

// 아래 코드의 문제점 parseInt보다 큰 경우의 숫자가 나오는 경우 문제를 발생시킨다.
// Input: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
// Expected: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

//  var plusOne = function(digits) {
//     let tmp = digits.join("");
//     let result = parseInt(tmp) + 1;
//     return result.toString().split("");
// };
