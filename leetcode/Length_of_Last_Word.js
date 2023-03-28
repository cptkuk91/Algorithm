// 마지막 단어 찾기
// 마지막 단어의 길이 찾기

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let tmp = s.trim().split(" ");
  return tmp[tmp.length - 1].length;
};

//  var lengthOfLastWord = function(s) {
//     let tmp = s.split(" ");
//     console.log(tmp);
//     let result = [];
//     for(let i = 0; i < tmp.length; i++){
//         if(tmp[i] !== ""){
//             result.push(tmp[i]);
//         }
//     }
//     return result[result.length - 1].length;
// };
