// 1.	Given an integer x, return true if x is a palindrome, and false otherwise.
// Example
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore, it is not a palindrome.


const palindrome = (x)=> {

    //convert to string
    //Reverse string
    //check if reverse is equal to the original string
    let Tostring = x.toString()
    let res;
    res = Tostring === Tostring.split("").reverse().join("")
    console.log(res);

    // or

     return x.toString()=== x.toString().split("").reverse().join("") ? true : false
}

palindrome(-121)