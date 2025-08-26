// ? STRING

// const str1 = 'test and test'
// const str2 = "test and test"
// const str3 = `test and test`

// console.log("test test "test" ");//err
// console.log("test test 'test'");//ok
// console.log('test test "test"');//ok


//! ` `

// const str4 = `
// test 
//   test 
//     test
// `
// console.log('✌️str4 --->', str4);


// function add(a,b) {
//   return a + b
// }

// const str5 = `test ${str4} ${1 + 999} ${add(1000, 111)} ${1 === 2} ${1 > 2 ? '1 > 2' : '1 < 2'} ${[1,2,3][0]} ${{name: 'Test'}.name}`

// console.log('✌️str5 --->', str5);


//! Спеціальні символи

// const str6 = 'test te\'st  \n \'test\' \n test \ttest \n  \0test \n test \n\0test'   

// console.log('✌️str6 --->', str6);

//! Юнікоди 

// const str7 = '😎 \uD7DB \uFB23 \uB104'

// console.log('✌️str7 --->', str7);

//! Довжина str .length

// const str8 = 'test'
// console.log('✌️str8 --->', str8.length);

//! як отримати певний символ string

// const str9 = 'test'

// console.log('✌️str9 --->', str9[0]);//t
// console.log('✌️str9 --->', str9[1]);//e
// console.log('✌️str9 --->', str9[2]);//s
// console.log('✌️str9 --->', str9[3]);//t
// console.log('✌️str9 --->', str9[4]);//undefined

//! Регістер текста

// const srt10 = 'Test'

// console.log('✌️srt10 --->', srt10);

// console.log('✌️srt10 --->', srt10.toLowerCase());
// console.log('✌️srt10 --->', srt10.toUpperCase());

//! пошук в str

// const str11 = 'Test'

//* indexof() - індекс першого знайденого ел або -1

// console.log(str11.indexOf('st'));//2
// console.log(str11.indexOf('ste'));//-1

//* includes() - boolean

// console.log(str11.includes('st'));//true
// console.log(str11.includes('ste'));//false

//* startsWith() endsWith() - boolean

// console.log(str11.startsWith('st'));//false
// console.log(str11.endsWith('st'));//true

//! вирізання частини str
//* slice() - вирізає частину стрінги
// console.log(str11.slice(2,3));
// console.log(str11.slice(2,4));
// console.log(str11.slice(0,1));
// console.log(str11.slice(1));

//! Обрізка пробілів .trim()
//trimStart()
//trimEnd()

// const hello = '   Hello   '

// console.log('✌️hello --->', hello);
// console.log('✌️hello trim() --->', hello.trim());

//! Заміна тексту .replace(search, replacement)

// console.log('Hello world'.replace('world', 'JS'));

// console.log('Hello world and Hello JS'.replaceAll('Hello', 'HI'));

//! Повторення рядка repeat()
// console.log('hello '.repeat(3));


// const test = 'test'
// for (let i = 0; i < test.length; i++) {
//   console.log(test[i]);
// }

// ? NUMBER

// const num1 = 5
// const num2 = 5.932874

//! 'e'

// const num3 = 5000000000
// console.log('✌️num3 --->', num3);

// const num4 = 5e9
// console.log('✌️num4 --->', num4);


//! Math

//! округлення чисел

// //* в МЕНШУ сторону Math.floor()
// console.log('5.3590705 --->', Math.floor(5.3590705));
// console.log('-5.3590705 --->', Math.floor(-5.3590705));

// //* в БЛЬШУ сторону Math.ceil()
// console.log('5.3590705 --->', Math.ceil(5.3590705));
// console.log('-5.3590705 --->', Math.ceil(-5.3590705));

// //* в найближче ціле число Math.round()
// console.log('5.3590705 --->', Math.round(5.3590705));
// console.log('-5.3590705 --->', Math.round(-5.3590705));

// //* заберає все що після коми Math.trunc()
// console.log('5.3590705 --->', Math.trunc(5.3590705));
// console.log('-5.3590705 --->', Math.trunc(-5.3590705));

// //* показує певну к-ть чисел після коми toFixed()
// console.log('5.3590705 --->', +5.3590705.toFixed(1));
// console.log('-5.3590705 --->', -5.3590705.toFixed(1));

// //* toPrecision(n) - повертає загальну кількісьть чисел
// console.log(123.456.toPrecision(4));
// console.log(123.456.toPrecision(2));

/////////////////////////////////////////////////////////////////

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);


//! перевірка на нормальне значення

// console.log(145 + +'test');

// console.log(Number(145 + +'test'));
// console.log(isNaN(145 + +'test'));

// if(145 + +'test' === NaN){//fals
//   console.log('ok');
// }
// if(isNaN(145 + +'test')){
//   console.log('ok');
// }
// if(NaN === NaN){//fals
//   console.log('ok');
// }

//! перевірка на число

// console.log(isFinite('145'));
// console.log(isFinite('145skdjjfhglksjdf'));
// console.log(isFinite(145));
// console.log(isFinite(true));
// console.log(isFinite(false));
// console.log(isFinite(undefined));
// console.log(isFinite(null));

//! parsInt() and parsFloat()

// console.log('960');
// console.log(+'960');
// console.log(Number('960'));

// console.log(+'960px');

// console.log(parseFloat('960px'));
// console.log(parseInt('960px'));

// console.log(parseFloat('960.89px'));
// console.log(parseInt('960.89px'));




//! Math

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));

// console.log(Math.floor(Math.random() * 100));
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.floor(Math.random() * 100));

// // min max

// const arr = [1,2,3,4,5]

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// // abs()

// console.log(-111);
// console.log(Math.abs(-111));

// // степінями pow()

// console.log(Math.pow(2,2));
// console.log(Math.pow(2,3));
// console.log(Math.pow(3,3));

//? Boolean

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean('hello'));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));


//? BigInt

let bigNumber = 9007199254740991n

console.log('✌️bigNumber --->', bigNumber);
console.log('✌️bigNumber --->', typeof bigNumber);


let bigfromString = BigInt('9007199254740991')

let a = 100000000000000000000000000000000000000000n
let b = 2n

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a - b);

console.log(Number(10n));


//? Symbol

const obj = {name: 'test'}
console.log(obj['name']);


const id = Symbol('id')
console.log('✌️id --->', id);

// Symbol('id') === Symbol('id') //false

const user = {
  name: 'test',
  [Symbol('id')]: 1234153
}

console.log(Object.keys(user));

