//! if else 
//! if(умова){
//!   тоді виконається цей код в середині
//! }

// if(true){
//   console.log('+');
// }
// if(false){
//   console.log('-');
// }

//! оператори

//! = => оператор присвоєння

//! >   => оператор більше менше  1 > 2 => false 2>1 => true
//! <   => оператор менше більше  => boolean 
//! <=  => оператор менше більше дорівнює  => boolean 1 >= 1 true
//! >=  => оператор менше більше дорівнює  => boolean 

// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 <= 5);
// console.log(10 >= 5);

//! ==    => не сувора рівність (перевіряє по значенню)
//! ===   => сувора рівність (перевіряє по типу а потім по значенню)

// console.log( 1 == 1);
// console.log( 1 == 2);
// console.log( 1 == '1');
// console.log( true == '1');
// console.log( true == 1);
// console.log( false == 0);

// console.log(1 === 1);
// console.log(1 === 2);
// console.log(1 === '1');


//! && => and (і)
//! || => or (або)

// console.log(3 > 2 && 3 > 1 && 3 > 0);//true
// console.log(3 > 2 && 3 > 1 && 3 > 0 && 3 > 4);//false

// console.log(3 > 1 || 3 > 4 || 3 === 1); //true

// console.log(3 > 2 && (3 > 4 || 3 > 1));//true
// console.log(3 > 2 && 3 > 4 || 6 > 5 && 5 > 2);//true

// console.log(true && true && true && false && true && true && true);//false
// console.log(false || false || true || false || false || false || false);//true









// const a = +prompt('Enter 1 number')
// const b = +prompt('Enter 2 number')

// if(a > b){
//   console.log(`${a} > ${b}`);
// }else if(a < b){
//   console.log(`${a} < ${b}`);
// } else if(a === b){
//   console.log(`${a} = ${b}`);
// } else{
//   console.error('invalid number')
// }

// const m = +prompt('Enter "m" number')
// const n = +prompt('Enter "n" number')
// const k = +prompt('Enter "k" number')

// if(m > n && m > k){
//   console.log(`m > n and m > k`);
// } 
// else if(n > m && n > k){
//   console.log(`n > m and n > k`);
// }
// else if(k > m && k > n){
//   console.log(`k > m and k > n`);
// } else {
//   console.log(`k = m = n`);
// }

// /////////////////////////////////////////////////////////

const password = prompt('Enter password')
const confirmPassword = prompt('Enter confirm password')


if(password.length < 8 || confirmPassword.length < 8){
  console.log('Less then 8');
} else if(password.length > 16 || confirmPassword.length > 16){
  console.log('More then 16');
} else if (password === confirmPassword){
  console.log('Welcome!');
} else{
  console.log('Diferent passwords');
}