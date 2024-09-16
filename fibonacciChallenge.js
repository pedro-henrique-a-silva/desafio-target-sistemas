function isFibonacci(num) {
  let a = 0, b = 1;

  if (num === 0 || num === 1) return true;

  while (b <= num) {
      const next = a + b;

      if (next === num) return true;

      a = b;
      b = next;
  }
  
  return false;
}

const num = 54;

const result = isFibonacci(num);

console.log(result);