// This is a JavaScript coding problem from BFE.dev 
/* const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4] */

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  const results = [];
  // your imeplementation here
  if (depth === 0) {
    return arr;      
  }
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      results.push(...flat(ele, depth - 1))
    } else {
      results.push(ele);   
    }
  });

   return results;
}
