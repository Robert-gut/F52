//! FUNCTION

//! СИНТАКСИС

// function nameFunction (params){
//   // body function
//   // body function
//   // body function
//   // body function
//   return 'test'
// }

//! як викликати function

// function showMyName(){
//   console.log('my name is Robert');
// }


// showMyName()
// showMyName()
// showMyName()

//! ПАРАМЕТРИ ФУНКЦІЇ (ВХІДНІ ДАНІ)

// function plus(a = 0,b = 0){
//   const c = a + b
  // console.log(c);
// }

// plus(1,5)
// plus(5,5)
// plus(10,20)
// plus(13,27)
// plus('1','12')
// plus(true,'12')
// plus(true, 12)
// plus()

/////////////////////////////////////////

// function test() {
//   console.log();
// }
// test() 

//! вертання результату виконання функції (ВИХІДНІ ДАНІ)

//! void
// function plus(a, b) {
//   console.log(a + b);
// }

// plus(1,5)

// const testFunction = plus(10,5)
// let test1Function = plus(11,111)

// console.log('✌️testFunction --->', testFunction);
// console.log('✌️test1Function --->', test1Function);


//! return

// function plusRetrun(a, b){
//   const result = a + b
//   return result
// }

// const testReturn = plusRetrun(11, 111)
// console.log('✌️testReturn --->', testReturn);


/////////////////////////////////////////////////////////////////////////////
// function bgColor() {
//     const color1 = Math.floor(Math.random() * 255)
//     const color2 = Math.floor(Math.random() * 255)
//     const color3 = Math.floor(Math.random() * 255)
//     document.body.style.background = `rgb(${color1},${color2},${color3})`
//   }
  
  // document.querySelector('button').addEventListener('click', bgColor)
  /////////////////////////////////////////////////////////////////////////////


//! Зона видимості змінних і констант з функціями

// const testconst = 1
// let testlet = 9

// function test() {
//   console.log(testconst);//ok
//   console.log(testlet);//ok

//   const testIntoFunConst = 1111
//   let testIntoFunLet = 9999

//   function test2() {
//     console.log(testIntoFunConst);
//     console.log(testIntoFunLet);
    
//   }
// }

// test()

// console.log(testIntoFunConst);
// console.log(testIntoFunLet);


/////////////////////////////////////////////////////////////////

// function math(number1 , number2, symbol) {
//   if(symbol === '+'){
//     return number1 + number2
//   }else if(symbol === '-'){
//     return number1 - number2
//   }else if(symbol === '*'){
//     return number1 * number2
//   }else if(symbol === '/'){
//     return number1 / number2
//   } else{
//     console.error('invalid symbol')
//     return 'invalid symbol'
//   }
// }

// console.log(math(5,5,'+'));
// console.log(math(10,5,'-'));
// console.log(math(10,5,'*'));
// console.log(math(10,2,'/'));
// console.log(math(10,2,'error'));


