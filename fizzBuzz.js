//let pass the num in the function
//if its divisible by 3 = fizz;
//if its divisible by 5 = Buzz;
//if its divisible by 3&5 = fizzBuzz;
function fizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
      //if its divisible by 3 & 5 it should logout fizzBuzz;
      //we can write(i%15);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(20);
