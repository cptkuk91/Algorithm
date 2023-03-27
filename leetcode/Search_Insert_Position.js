// 배열내 target(타겟)값의 위치 찾기

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] < target ? count++ : 0;
  }
  return count;
};

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* var searchInsert = function(nums, target) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < target){
            count++;
        } else {
            break;
        }
    }
    return count;
};
*/
