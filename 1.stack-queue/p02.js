function solution(progresses, speeds) {
  let count = progresses.map((ele, index) =>
    Math.ceil((100 - ele) / speeds[index])
  );
  let result = {};
  for (let i = 0; i < count.length; i++) {
    if (count[i] < count[i - 1]) {
      count[i] = count[i - 1];
    }
  }
  count.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  return Object.values(result);
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
