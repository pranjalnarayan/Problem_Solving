/**
 * 
 * sum(1)(2)() // 3
 * sum(1)(2)(5)() // 8
 * sum(1)(2)(5)(9)() // 17
 * 
 */

// ES6
let sum = num1 => num2 => (num2 ? sum(num1 + num2) : num1);

// ES5
function add(num1) {
    return function(num2) {
        if (num2) {
            return add(num1 + num2);
        }
        return num1;
    }
}