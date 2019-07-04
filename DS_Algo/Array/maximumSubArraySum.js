
const max = (num1, num2) => (num1 > num2 ? num1 : num2);

const maxSubArray = arr => {
	let maxSum = arr[0];
	let curSum = arr[0];

	for(let i = 1, len = arr.length; i < len; i++) {
		let curNum = arr[i];
        	curSum = max(curNum, (curNum + curSum));
		curSum > maxSum && (maxSum = curSum);
    	}

	return maxSum;
}
