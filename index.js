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

module.exports = {
  ehPrimo: (num) => {
    if (isNaN(num)) {
      return ("Numero invalido");
      return;
    }
    let msg = "eh primo";
    for (let i = 2; i < num; i++) {
      msg = num % i === 0 ? "nao eh primo" : msg;
    }
    return (msg == "eh primo");
  },

somatorio: (nums) => {
    if (nums.some((n) => isNaN(n))) {
      return ("Numeros invalidos");
    }
    const result = nums.map(Number).reduce((a, b) => (a + b));
    return (result);
  },

fibo: (n) => {
    const fibGenerator = function* () {
      var current = 0, next = 1;
      while (true) {
        [next, current] = [next + current, next];
        yield current;
      }
    }
    const fibGen = fibGenerator();
    let msg = "";
    [...Array(n)].forEach(() => msg += fibGen.next().value + " ");
    return (msg);
  },

mdc: (a, b) => {
    if (isNaN(a) && isNaN(b)) {
      return ("numeros inválidos");
    }
    let d = Math.min(a, b);
    while (d > 1) {
      if (a % d === 0 && b % d === 0) {
        break;
      }
      d--;
    }
    return (d);
  },

quicksort,
contar: (n) => {
  if(isNaN(n)) {
    return;
  }
    let msg = "";
    for (let i = 1; i <= n; i++) {
      msg += i + " ";
    }
    return (msg);
  }
}