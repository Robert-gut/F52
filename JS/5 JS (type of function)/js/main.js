//! FUNCTION

// function show(text) {
//   return text
// }

// alert(show('hello'))
// alert(show('test'))

// function test (num){
//   const is = num % 2 === 0
//   alert(`${num} => ${is}`)
// }

// test(1)
// test(2)
// test(3)
// test(4)

// function test(num1, num2) {
//   const a = num1 % 2 === 0
//   const b = num2 % 2 === 0
//   return `num1 ---> ${a}, num2 ---> ${b}`
// }


// console.log(test(5,2));
// console.log(test(2,4));
// console.log(test(1,7));

//! TYPE OF FUNCTION

//!1 Функції оголошення (function declaration)

//* 1 виклик до ініцілізації
// console.log(add(5,2));//!можемо викликати до її описання

// function add (a, b){
//   return a + b
// }

// console.log(add(1,2));

///////////////////////////////////////////////////////////////////
// console.log(add(5,2));//!можемо викликати до її описання
// console.log(num);
// const num = 5
// console.log(num);

// function add (a, b){
//   return a + b * num
// }
// console.log(add(1,2));
///////////////////////////////////////////////////////////////////
//* 2 аргументс - дозволяє получіти достуа до всіх агрументів

// function argum() {
//   console.log(arguments);
//   let res = 0
//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i]
//   }
//   console.log(res);
// }

// argum(1,2,34,45,5,6,7,78,76,54,4)
// argum(1,2,34,45,5,6,7,1)

//////////////////////////////////////////////////////////////////////////
//! a,b - параметри функції
// function add(a, b) {}

//! 5,7 - аргументами функції
// add(5,7)

//////////////////////////////////////////////////////////////////////////
//! return - вихід з функції

// function log(a) {
//   console.log('start');
//   if(a === 10){
//     return a
//   }
//   console.log('finish');
//   return a
// }

// log(10)

//////////////////////////////////////////////////////////////////////////

//!2 Функції вирази (function expression)

// sayHello(1,2,3)//err

// const sayHello = function () {
//   console.log(arguments);
// }

// sayHello(1,2,3)//ok

//! 3 Стрілкові функції (Arrow Functions)

// sayBye()//err

// const sayBye = () => {
//   console.log(arguments);
//   console.log('Bye');
//   return 0
// }

// sayBye()//ok

//! скорочення 

// const arrowFun = (a) => {
//   return a % 2 === 0
// }

// const arrowFun1 = a => a % 2 === 0 

// console.log(arrowFun1(2));
// console.log(arrowFun1(3));

//! 4 Самовикликаючи функцій IIFE (Immediately Invoked Function Expressions)

// (function (name) {
//   console.log(`Hello ${name}`);
// })('Robert')

// (function (name) {
//   console.log(`Hello ${name}`);
// }('Robert'))

//* ////////////////////////////////////////////////////////////////////////////////////

//? Рекурсивні функції (Recursive function) 

// function count(num) {
//   console.log(num);
//   if(num === 100) return
//   count(++num)
// }

// count(0)

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 0! = 1

// function factorial(f) {
//   if(f === 0) {
//     return 1
//   } else {
//     return f * factorial(f - 1)
//   }
// }

// console.log(`5! => ${factorial(5)}`);
// console.log(`1! => ${factorial(1)}`);
// console.log(`7! => ${factorial(7)}`);
// console.log(`7! => ${factorial(70)}`);


///////////////////////////////////////////////////////

// let counter = 1

// function recursion(number){
//   console.log(counter);
//   if (counter < number) {
//     console.log('inside');
//     counter++
//     recursion(number)
//   }
// }

// recursion(99)
// recursion(1000)


function generateNestedList(depth, items) {
  if(depth === 0) return ''

  const openTag = `<ul>`
  const closeTag = `</ul>`
  let listItem = ''

  for (let i = 0; i < items; i++) {
    listItem += `<li>${generateNestedList(depth - 1, items)}</li>`
  }

  return `${openTag}${listItem}${closeTag}`
}

const nestedList = generateNestedList(2,5)

console.log('✌️nestedList --->', nestedList);


//* ////////////////////////////////////////////////////////////////////////////////////



