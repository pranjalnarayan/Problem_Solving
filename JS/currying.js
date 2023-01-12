// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/implement-curry

/* const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3' */

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return (...args) => {
    let maxTotalArgs = 3;
    let currentArgs = [];

    function curried(...args2) {
      currentArgs = [...currentArgs, ...args2];
      if (currentArgs.length >= maxTotalArgs) {
        return fn(...currentArgs);
      }
      return curried;
    }
    return curried(...args);
  };
}
