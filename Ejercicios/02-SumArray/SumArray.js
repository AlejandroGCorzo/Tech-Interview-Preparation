function SumArray(arr, n) {
  // Your code here:
  for (let i = 0; i < arr.length; i++) {
    if (arr.some((el) => el != arr[i] && el + arr[i] === n)) return true;
  }
  return false;
}

module.exports = SumArray;
