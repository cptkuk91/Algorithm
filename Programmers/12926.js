function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el === " ") {
        return el;
      }
      const result = el.charCodeAt();
      return el.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(result + n - 90)
        : String.fromCharCode(result + n);
    })
    .join("");
}
