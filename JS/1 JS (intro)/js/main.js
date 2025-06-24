// console.log('I am JS') 

//! ТИПИ ЗМІННИХ АБО КОНСТАНТИ

//? 1 var - !!!застарілий варян і вже не використовується!!!

// console.log(password);//! ГЛОБАЛЬНУ ЗОНУ ВИДИМОСТІ І МИ МОЖЕМО ЙОГО ВИКЛИКАТИ ПЕРЕД ОБЯВЛЕННЯМ ЗМІННОЇ

// var password = 'Qwerty-1'

// console.log(password);


//? 2 let - змінна(ми можемо протягом використання програми змінювати значення)


let number = 0

console.log(number);

number = 1
console.log(number);

number = 2
console.log(number);

//? 3 const - константа (ми не можемо змінювати значення)


const pi = 3.14

console.log(pi);

// pi = 3.141 // Error
// console.log(pi);


/////////////////////////////////////////////////////////////////////////////////////////////////////

//! ТИПИ ДАНИХ 

//! 1 STRING - це 'текст цифри спец символи...'  => '' and "" and ``

//1 ''
const firstName = 'Robert'
console.log(firstName);
console.log(typeof firstName);


//2 ""
const lastName = "Barnabishvili"
console.log(lastName);
console.log(typeof lastName);



//3 ``
const email =  `admin@gmail.com`
console.log(email);
console.log(typeof email);


console.log("test 'test' test");
console.log('test "test" test');
console.log(`'test' "test" 'test' ${pi} ${1+1}`);

//!2 NUMBER - ЧИСЛА

const age = 20
console.log(age);
console.log(typeof age);

const value = 3.14
const value2 = 0.14

//!3 BOOLEAN - true or false 

let isActivate = false
console.log(isActivate);
console.log(typeof isActivate);

isActivate = true
console.log(isActivate);
console.log(typeof isActivate);


// console.log(1 === 2);
// console.log(1 === 1);

//! 4 undefaint - це коли нічого не визначено , це тип який зачасту дає сам JS при тому випвдку якщо змінна вбо константа оголошена але не ініцілізована


const test = undefined
console.log('✌️test --->', test);

let any
console.log('✌️any --->', any);
console.log('✌️any --->', typeof any);

//! 5 null - це коли ми спеціально кажемо що тут нічого немає но в майбутньому тут щось можливо зявиться

let port = null
console.log('✌️port --->', port);
console.log('✌️port --->',typeof port);




////////////////////////////////////////////////////////////

// матиматичні дії

const a = 2 
const b = 3 

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(b / a);
console.log(b % a);

console.log((a + b) * 2);
console.log(a + b * 2);


// //////////////////////////////////////////////////////////

const hello = 'hello js'
// alert(hello)

const num1 = +prompt('enter your namber 1')
const num2 = +prompt('enter your namber 2')
alert(num1 + num2)

// document.writeln(num1 + num2)

const name = 'robert'

// alert(`test test ${name} test`)
// alert(`Hello ${name} !`)
alert('Hello ' + name + ' !')
