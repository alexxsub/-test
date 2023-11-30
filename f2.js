// 0 1 2 3 4 5 8 13 21
// 0 1 2 3 4 5 6 7  8

function f2(n) {
    let prev=0, cur=1
    if (n===0) return perv
    
    while(n>1){
      [cur,prev]=[cur+prev,cur]
      n-=1
    }
    return cur
  }
  console.log(f2(40))
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`Memory: ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }