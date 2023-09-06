// function greetUser(greetingPrefix, userName = 'user'){
//     console.log('hi there'+userName+'!');
// }
// greetUser('Nikola');
// greetUser();


// function sumUp(num1,num2,num3){
//     return num1 + num2 + num3;
// }
// console.log(sumUp(1,2));
// //like this we get not a number, but if we add a default numeber to num3 we will ofc get a number;
// function sumUp(num1,num2,num3 = 0){
//     return num1 + num2 + num3;
// }
// console.log(sumUp(1,2));

function sumUp(numbers){
    let result = 0;

    for (const number of numbers){
        result += number; //result = result+number
    }

    return result;
}
console.log(sumUp([1,2,3,4,5]));