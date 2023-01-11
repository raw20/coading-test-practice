function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let bridge_weight = 0;

  bridge.shift();
  bridge.push(truck_weights[0]);
  bridge_weight += truck_weights.shift();
  count++;
  while (bridge.length > 0) {
    bridge_weight -= bridge.shift();
    if (bridge_weight + truck_weights[0] > weight) {
      bridge.push(0);
      count++;
    } else if (bridge_weight + truck_weights[0] <= weight) {
      bridge.push(truck_weights[0]);
      bridge_weight += truck_weights.shift();
      count++;
    } else if (truck_weights.length === 0) {
      count++;
    }
  }
  return count;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(
  solution(
    100,
    100,
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10,
    ]
  )
);
