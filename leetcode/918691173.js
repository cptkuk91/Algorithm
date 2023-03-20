let isPalindrome = function (x) {
  let rv = x.toString().split("").reverse().join("");

  if (+rv === x) return true;
  else return false;
};
