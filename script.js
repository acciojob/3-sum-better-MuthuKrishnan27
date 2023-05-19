function threeSum(arr, target) {
// write your code here
	let a = [];
	let sum = 0;
	for(let i=0;i<arr.length-2;i++){
		let k = i+3;
		for(let j=i;j<arr.length && j<k;j++){
			sum+=arr[j];
		}
		a.push(sum);
	}
	
	let z = [];
	let min;
	for(let i=0;i<a.length;i++){
		if(a[i]<0){
			min = a[i] * -1;
		}
		z.push(min - target);
	}

	let min_index = 0;
	let m = z[0];
	for(let i=1;i<z.length;i++){
		if(z[i]<m){
			m = z[i];
			min_index = i;
		}
	}
	let mn = a[min_index];
	return mn;
}

module.exports = threeSum;
