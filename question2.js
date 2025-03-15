function sumArray(numbers) {
    return numbers.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0); // 0 is the initial value of the accumulator
  }
  
  // Example usage:
  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result); // Output: 15
  