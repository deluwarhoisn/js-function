/**
 * 
 * objectiv:writ a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the functun is called properly
 * step-3:set a parameter(s)
 * step-4:pas the parameter(s,) check whether parameter is passed isn a proper format
 * step-5:do the function tasks (step by step)
 */

function sumOfNumbers(numbers){
    // console.log(numbers)
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const nums = [ 54,62,12,6]
const sum = sumOfNumbers(nums);
console.log('sum of numbers is', sum);