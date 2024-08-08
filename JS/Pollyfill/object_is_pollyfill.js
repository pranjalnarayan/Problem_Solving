if (!Object.is /*|| true */) {

    // Not using in built Number.isNan intentionally
    const isItNan = val => val !== val;

    const isBothNan = (firstValue, secondValue) => isItNan(firstValue) && isItNan(secondValue);

    const isItNegativeZero = v => v == 0 && (1/v) == -Infinity;

    Object.is = function ObjectIs(firstValue, secondValue) {
        if (isItNegativeZero(firstValue) || isItNegativeZero(secondValue)) {
            return isItNegativeZero(firstValue) && isItNegativeZero(secondValue);
        } else if (isBothNan(firstValue, secondValue)) {
            return true;
        } else {
            return firstValue === secondValue; 
        }
    }
}

console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);