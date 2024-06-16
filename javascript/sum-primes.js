const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

function sumPrimes(num) {
  return [...Array(num + 1).keys()]
    .reduce((acc, value) => 
      isPrime(value) ? acc + value : acc
    , 0)
}

sumPrimes(977);