var rotate = function (nums, k) {

    k = k % nums.length;

    const rotatedPart = nums.splice(nums.length - k);

    console.log('rotatedPart',rotatedPart);

    console.log('unshift',nums);


    nums.unshift(...rotatedPart)


};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
rotate(nums1, k1);

nums1.forEach(data => console.log(data))
