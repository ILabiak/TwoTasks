const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

const curry = (f) => {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f(...args);
    } else {
      return (...additionalArgs) => curried(...args, ...additionalArgs);
    }
  };
};

console.log(curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5)); // should be true
console.log(curry(multiply)(1)(2)(3) == multiply(1, 2, 3)); // should be true
