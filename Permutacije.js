const prompt = require("prompt-sync")();

const niz = prompt("Unesite niz brojeva odmaknut razmacima: ")
  .split(" ")
  .map((broj) => Number(broj));

function permutator(nums, arr = [], res = []) {
  if (nums.length === 0) {
    res.push([...arr]);
  }

  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((n, index) => index !== i);
    arr.push(nums[i]);
    permutator(rest, arr, res);
    arr.pop();
  }

  return res;
}

console.log(permutator(niz));
