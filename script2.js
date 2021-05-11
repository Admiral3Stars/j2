const pow = (a, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= a;
    }
  
    return result;
}

  //module.js
import module from './module.js';

const calc = module.calc;
console.log(calc(2, 3));

module.exports = {
    entry: './script2',
    output: {
      filename: './build.js'
    }
  }