// O(1);

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let tmp = [...new Set(nums)];
  for (let i = 0; i < tmp.length; i++) {
    nums[i] = tmp[i];
  }
  return tmp.length;
};
