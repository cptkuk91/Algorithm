function solution(id_pw, db) {
  const loginFilter = db.find((el) => el[0] === id_pw[0] && el[1] === id_pw[1]);
  const wrongPwFilter = db.find(
    (el) => el[0] === id_pw[0] && el[1] !== id_pw[1]
  );

  if (loginFilter) {
    return "login";
  } else if (wrongPwFilter) {
    return "wrong pw";
  } else {
    return "fail";
  }
}

// Case2 is better
function solution(id_pw, db) {
  let result = "fail";
  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0]) {
      if (id_pw[1] !== db[i][1]) {
        result = "wrong pw";
        break;
      } else {
        result = "login";
        break;
      }
    }
  }
  return result;
}
