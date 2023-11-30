// https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/

// 0 1 2 3 4 5 8 13 21
// 0 1 2 3 4 5 6 7  8
function f(n) {
  if (n===0) return 0
  if (n===1) return 1
  return f(n-1)+f(n-2)
}

console.log(f(40))
const used = process.memoryUsage();
for (let key in used) {
  console.log(`Memory: ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}