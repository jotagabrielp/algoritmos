const ehPrimo = (num) => {
  if (isNaN(num)) {
    console.log("Numero invalido");
    return;
  }
  let msg = "eh primo";
  for (let i = 2; i < num; i++) {
    msg = num % i === 0 ? "nao eh primo" : msg;
  }
  console.log(msg);
}

const somatorio = (nums) => {
  if (nums.some((n) => isNaN(n))) {
    console.log("Numeros invalidos");
    return;
  }
  const result = nums.map(Number).reduce((a, b) => (a + b));
  console.log(result);
}

const fibo = (n) => {
  const fibGenerator = function*() {
    var current = 0, next = 1;
    while (true) {
      [next, current] = [next + current, next];
      yield current;
    }
  }
  const fibGen = fibGenerator();
  let msg = "";
  [...Array(n)].forEach(() => msg += fibGen.next().value + " ");
  console.log(msg);
}

const mdc = (a, b) => {
  if (isNaN(a) && isNaN(b)) {
    console.log("numeros inválidos");
    return;
  }
  let d = Math.min(a, b);
  while (d > 1) {
    console.log(d)
    if (a % d === 0 && b % d === 0) {
      break;
    }
    d--;
  }
  console.log(d);
}

const realQuicksort = (array) => {
  return array.sort((a, b) => a - b);
}

const quicksort = (array) => {
  if (array && array.length >= 1) {
    let pivot = array.shift();
    let [menor, maior] = [[], []];
    array.forEach((e) => {
      if (e <= pivot) {
        menor.push(e)
      } else {
        maior.push(e);
      }
    });
    return [quicksort(menor), pivot, quicksort(maior)].flat(Infinity).filter(e => e !== undefined);
  } else {
    return;
  }
}