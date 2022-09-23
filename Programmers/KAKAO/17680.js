function solution(cacheSize, cities) {
  let result = 0;

  let checkCache = [];

  if (!cacheSize) return 5 * cities.length;

  cities.forEach((city) => {
    city = city.toLowerCase();
    if (checkCache.includes(city)) {
      checkCache.splice(checkCache.indexOf(city), 1);
      result += 1;
    } else {
      if (checkCache.length === cacheSize) checkCache.shift();
      result += 5;
    }
    checkCache.push(city);
  });

  return result;
}
