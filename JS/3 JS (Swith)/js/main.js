//! Оператори

//! =  
//! ==  
//! ===  

//! Матиматичні оператори
// console.log('+', 1 + 1);
// console.log('-', 1 - 1);
// console.log('*', 1 * 1);
// console.log('/', 1 / 1);
// console.log('Остача від ділення', 5 % 2);
// console.log('Степінь 3**2', 3 ** 2);

//! матиматичні оператори з різними типами даних

// console.log('Yes' + ' or' + ' not');
// console.log('Number' + 2);// все буде зводитися до string
// console.log('2' + 2);// пріоритет string
// console.log(2 + '4' + true + null + undefined);// пріоритет string


// // true = 1 false =0
// console.log(2 + true);// пріоритет намбер
// console.log(2 + false);// пріоритет намбер
// console.log(2 + null + undefined);// пріоритет намбер

// // * / - => пріоритет number
// console.log('Yes' * ' or' - ' not');// пріоритет намбер
// console.log('10' * '2' - '5');// пріоритет намбер

//! Унарний оператор +

// console.log(+'245');
// console.log(+'400');
// console.log(+'test');
// console.log(+true);
// console.log(+false);
// console.log(+null);
// console.log(+undefined);


//! Оператор присвоєння
// const pi = 3 + 0.14

//! мат скорочення

// let a  = 1
// a = a + a
// console.log(a);

// let b = 10
// console.log(b += 1);
// console.log(b -= 1);
// console.log(b *= 2);
// console.log(b /= 2);
 
//! Інкременти і декременти

//* інкремент ++1

// let d = 100
// d++
// d++
// d++
// console.log('✌️d --->', d);

//* декремент --1

// let i = 100
// i--
// i--
// i--
// console.log('✌️d --->', i);

//! постфіксний і префіксне розміщення (Інкременти і декременти)

//*постфіксний
// let f = 999
// console.log(f++);
// console.log(f);


//*префіксне
// let j = 999
// console.log(++j);
// console.log(j);


//! оператори порівняння

//* >
//* <
//* >=
//* <=
//* == рівність
//* === сувора рівність
//* != НЕ рівність
//* !== НЕ сувора рівність

// console.log(1 === 2); //flase
// console.log(1 !== 2);// true

//! порівняння різних типів

// console.log('2' > 1);
// console.log('1' == 1);

// console.log(true == 1);
// console.log(false == 0);

// console.log(1 === true);
// console.log(1 !== true);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(undefined == 1);
// console.log(null == 1);

//! порівння string

// console.log('a' === 'a');
// console.log('A' > 'a');
// console.log('A' < 'a');
// console.log('b' > 'a');
// console.log('abc' === 'abcd');
// console.log('abc' < 'abcd');


//! // &&

// console.log(true || false || false || false); // true
// console.log(false && true && true && true); // false


//! тернальний оператор 
// let c = 1
// 1 === c ? console.log('c === 1') : console.log('c !== 1');



//! SWITHC CASE

// const j = 34

// switch (j) {
//   case 1:
//     console.log(1);
//     break
//   case 2:
//     console.log(2);
//     break
//   case 3: 
//     console.log(3);
//     break
//   default:
//     console.log(9999999);
// }


// if(j === 1){
//   console.log(1);
// }
// else if(j === 2){
//   console.log(2);
// }
// else if(j === 3){
//   console.log(3);
// }
// else{
//   console.log(9999999999);
// }


// //////////////////////////////////////////////////////////////////////////////
// function month(){
//   const monthNumber = +document.querySelector('.monthNumber').value
  
//   if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12){
//     console.log('Winter!');
//   }
//   else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
//     console.log('Spring!');
//   }
//   else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
//     console.log('Summer!');
//   }
//   else if(monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
//     console.log('Autumn!');
//   }
//   else{
//     console.log('Invalid input');
//   }  
// }


// function month(){
//   const monthNumber = +document.querySelector('.monthNumber').value

//   switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('Winter!');
//         break
//     case 3:
//     case 4:
//     case 5:
//         console.log('Spring!');
//         break
//     case 6:
//     case 7:
//     case 8:
//         console.log('Summer!');
//         break
//     case 9:
//     case 10:
//     case 11:
//         console.log('Autumn!');
//         break
//     default:
//         console.log('Invalid input');
//   }
// }


// const select = document.getElementById('bg')
// const body = document.body

// select.addEventListener('change', () => {
//   const selectedValue = select.value

//   switch (selectedValue){
//     case 'blue':
//       body.style.background = 'blue'
//       break
//     case 'green':
//       body.style.background = 'green'
//       break
//     case 'red':
//       body.style.background = 'red'
//       break
//     case 'yellow':
//       body.style.background = 'yellow'
//       break
//     default:
//       body.style.background = 'black'
//   }
// })

////////////////////////////////////////////////////////////////

//! next day

let day = +prompt('day')
let month = +prompt('month')
let year = +prompt('year')

day++

if( month === 1 || 3 || 5 || 7 || 8 || 10 || 12){
  if(day > 31){
    day = 1
    month++
  }
} else if(month === 4 || 6 || 9 || 11){
  if(day > 30){
    day = 1
    month++
  }
} else {
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    if(day > 29){
      day = 1
      month++
    }
  }else{
    if(day > 28){
      day = 1
      month++
    }
  }
}

if(month > 12){
  month = 1
  year++
}

console.log(`next day ${day}:${month}:${year}`);



