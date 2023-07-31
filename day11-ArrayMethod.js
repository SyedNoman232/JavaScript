//method in Array

let num = [1,2,45,56,45,60]

//to string
/* .tostring() is function
let b =  num.toString() // b now string
console.log(b)
*/

//let c = num.join(" and ") // u can join the array by .join
//console.log(c,typeof c)

//num.pop() // by using this u can pop the last element of array

//let r = num.pop()
//console.log(num,r)  // it return the what poped from the array
 
//let t = num.push(99) // push add the element in the array in last
//console.log(t,num)

//let p = num.shift() // shift method remove  element from the start of array 
//console.log(p,num)

//let q = num.unshift("NOMAN")  // add the new  array at begining of array 
//console.log(q,num)

//console.log(num.length)
//delete num[4]   // delete not a method its oprator the length of num array will same with one empty item
//console.log(num.length)

/* let num2 = ["syed",8,9,0,6,4]  // concat you can add the array with the help of concat method
 let num3 = ["noman",8,9,0,6,4]

  let newArray = num.concat(num2,num3)
  console.log(newArray)
 console.log(num,num2,num3)
*/ 

// sort

// let example = [9,2,1,7,8,6,66,555,789,5432,876]

// let compare = (a ,b)=>{
//     return b-a
// }

// example.sort(compare)
// example.reverse()
// console.log(example)

// splice and slice
// splice is used in Array to add new value
let nbr = [0,5,23,1023,1024,1025,1026]

//nbr.splice(2,4,1111,2222,3333,4444,5555)
//console.log(nbr)
 let newnum = nbr.slice(2,5) // it slice the array value  first value where to start second is where to end
 console.log(newnum)
