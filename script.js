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
			z[i] = z[i] * -1;
		}
		z[i] = z[i] - target;
	}

	let min_index = 0;
	let m = z[0];
	for(let i=0;i<z.length;i++){
		for(let j=i+1;j<z.length;j++){
			if(z[j]<m){
				m=z[j];
				min_index=j;
			}
		}
	}
	min = a[min_index];
	return min;
}

module.exports = threeSum;
