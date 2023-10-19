var getMaximumGenerated = function (n) {
  if (n < 2) return n;

  let nums = [];
  nums.push(0, 1);
  for (let i = 1; i < n / 2; i++) {
    nums[2 * i] = nums[i];
    nums[2 * i + 1] = nums[i] + nums[i + 1];
  }

  return Math.max(...nums);
};

const output = getMaximumGenerated(7);

console.log(output);
