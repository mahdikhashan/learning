function sumFibs(num) {
  function* generateFibo() {
    let prev = 0;
    let curr = 1;
  
    yield prev;
    yield curr;
    
    while (true) {
      let next = prev + curr;
      yield next;

      prev = curr;
      curr = next;
    }
  }

  const fibo = generateFibo()

  let start = 0;
  let sum = 0;

  while (start <= num) {
    let fibo_number = fibo.next()

    if (
        (fibo_number.value % 2 === 1) && 
        (fibo_number.value <= num)
      ) {
      sum += fibo_number.value
    }

    start++
  }

  return sum;
}

console.log(sumFibs(75025));
