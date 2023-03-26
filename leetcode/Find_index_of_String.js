// 주어진 문자열에서 단어의 위치 찾기
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let len = needle.length;
  if (haystack.includes(needle)) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, len + i) === needle) {
        return i;
      }
    }
  } else {
    return -1;
  }
};
