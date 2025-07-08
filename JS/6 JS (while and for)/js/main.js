// function fibonacci(n){
//   if(n < 0){
//     return 'дані не можуть бути відємними'
//   }else if(n === 0){
//     return 0
//   }else if(n === 1){
//     return 1
//   }else{
//     let a = 0
//     let b = 1
//     for (let i = 2; i <= n; i++) {
//       let sum = a + b
//       a = b
//       b = sum
//     }
//     return b
//   }
// }

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(10))
// console.log(fibonacci(15))

//!  ЦИКЛИ В JS

//? while , do while , for , for of , for in


// console.log('hello i`m loops');
// console.log('hello i`m loops');
// console.log('hello i`m loops');
// console.log('hello i`m loops');
// console.log('hello i`m loops');
// console.log('hello i`m loops');
// console.log('hello i`m loops');
// console.log('hello i`m loops');
// console.log('hello i`m loops');

//! синтаксис loops

//* for(початкове значення; умова(поки умова === true); крок){
//* тіло цикла
//* }

// for(let i = 1; i <= 10; i++){
//   console.log(`Ми присіли ${i}`);
// }

////////////////////////////////////////////////////////////////////////////////

// const arr = [
//     // Електроніка
//     "Смартфон Samsung Galaxy S25",
//     "Ноутбук Apple MacBook Air M3",
//     "Планшет iPad Pro 13 (2024)",
//     "Смарт-годинник Garmin Fenix 8",
//     "Бездротові навушники Sony WH-1000XM6",
//     "Телевізор LG OLED C5 65 дюймів",
//     "Ігрова консоль PlayStation 6",
//     "Відеокамера GoPro Hero 13 Black",
//     "Дрон DJI Mavic 4 Pro",
//     "Розумна колонка Google Nest Hub Max 2",
//     "Зовнішній жорсткий диск Seagate Expansion 8TB",
//     "Маршрутизатор TP-Link Archer AXE300",
//     "Принтер Epson EcoTank L8180",
//     "Монітор Dell UltraSharp U4025QW",
//     "Камера Canon EOS R1",

//     // Побутова техніка
//     "Холодильник Bosch KGN86AI40",
//     "Пральна машина Siemens iQ700",
//     "Посудомийна машина Beko DIN28431",
//     "Мікрохвильова піч Samsung MS23F301TAS",
//     "Пилосос Dyson V15 Detect Absolute",
//     "Кавомашина De'Longhi Dinamica Plus",
//     "Мультиварка Tefal Cook4Me Touch",
//     "Електричний чайник Philips HD9350/90",
//     "Праска Braun SI 9281 BK",
//     "Соковижималка Philips HR1863/20",
//     "Блендер NutriBullet Pro 900",
//     "Фен Dyson Supersonic",
//     "Електробритва Philips Series 9000",
//     "Машинка для стрижки волосся Remington HC5880",
//     "Очищувач повітря Coway Airmega AP-1512HH",

//     // Одяг та аксесуари
//     "Чоловіча куртка The North Face Nuptse",
//     "Жіночі джинси Levi's 501 Original Fit",
//     "Кросівки Nike Air Force 1 '07",
//     "Спортивний костюм Adidas Tiro 23",
//     "Сорочка Lacoste Classic Fit Polo",
//     "Сумка-месенджер Calvin Klein",
//     "Рюкзак Fjallraven Kanken",
//     "Чоловічий годинник Tissot PRX Powermatic 80",
//     "Жіночі сонцезахисні окуляри Ray-Ban Wayfarer",
//     "Шапка Beanie Carhartt WIP Acrylic Watch",
//     "Рукавички The North Face Etip Recycled",
//     "Шкарпетки Smartwool Hike Light Cushion Crew",
//     "Шарф Burberry Classic Check Cashmere",
//     "Ремень Fossil Derrick",
//     "Галстук Hugo Boss T-Scottas",

//     // Товари для дому та саду
//     "Комплект постільної білизни IKEA Dvala",
//     "Набір посуду Luminarc Carine Black & White",
//     "Сковорідка Tefal Ingenio Expertise",
//     "Набір ножів Victorinox Swiss Classic",
//     "Килим IKEA Langsted",
//     "Комплект для пікніка Outwell Denver",
//     "Парасолька Doppler Carbonsteel",
//     "Набір інструментів Bosch UniversalImpact 18",
//     "Газонокосарка Gardena PowerMax 1200/32",
//     "Садовий шланг Karcher PrimoFlex 20m",
//     "Набір для барбекю Weber Master-Touch GBS E-5750",
//     "Парова швабра Karcher SC 3 EasyFix",
//     "Розумна лампочка Philips Hue White and Color Ambiance",
//     "Дзеркало IKEA Hovet",
//     "Ваза IKEA Gradvis",

//     // Книги та медіа
//     "Книга 'Дюна' Френка Герберта",
//     "Книга '1984' Джорджа Орвелла",
//     "Книга 'Гаррі Поттер і філософський камінь' Дж.К. Роулінг",
//     "Аудіокнига 'Атомні звички' Джеймса Кліра",
//     "Електронна книга Kindle Paperwhite",
//     "Вінілова платівка Pink Floyd 'The Dark Side of the Moon'",
//     "DVD 'Володар перснів: Повернення короля'",
//     "Підписка на стрімінговий сервіс Netflix",
//     "Відеогра 'The Witcher 3: Wild Hunt'",
//     "Набір кольорових олівців Faber-Castell Polychromos",
//     "Мольберт Royal & Langnickel",
//     "Набір акварельних фарб Winsor & Newton Cotman",
//     "Журнал 'National Geographic' (річна передплата)",
//     "Набір для вишивання хрестиком Dimensions",
//     "Пазл Ravensburger 1000 деталей",

//     // Товари для дітей та іграшки
//     "Конструктор LEGO City Great Vehicles",
//     "Лялька Barbie Dreamhouse",
//     "Машинка на радіокеруванні Maisto Tech R/C",
//     "М'яка іграшка Squishmallows",
//     "Настільна гра Ticket to Ride",
//     "Велосипед Puky LR M",
//     "Самокат Micro Mini Deluxe",
//     "Розвиваючий килимок Fisher-Price Kick & Play Piano Gym",
//     "Книга 'Дуже голодна гусениця' Еріка Карла",
//     "Набір для малювання Crayola Ultimate Crayon Collection",
//     "Ігровий набір Play-Doh Kitchen Creations",
//     "Дитячий рюкзак Deuter Schmusebär",
//     "Крісло-гойдалка Nuna Leaf Grow",
//     "Автокрісло Maxi-Cosi Pebble 360",
//     "Коляска Bugaboo Fox 5"
// ]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].toUpperCase());
// }

///////////////////////////////////////////////////////////////////////////////

//! вічний цикл

// for(let i = 0; i < 10; i){
//   console.log('вічний цикл');
// }

// for(let i = 0; true; i++){
//   console.log('вічний цикл');
// }

////////////////////////////////////////////////////////////////

//! WHILE

//!СИНТАКСИС

//* while(умова === true){
//*   тіло цикла 
//* }

// let a = 1
// while(a <= 10){
//   console.log(`Ми присіли ${a}`);
//   a++
// }

//! вічний цикл

// let i = 0
// while(true){
// console.log(i);
// i++
// }


//! break - зупиняє цикл

// while(true){
//   let i = 0
//   i++
//   console.log(i);
//   break 
// }

// let a = 0

// while(true){
//   console.log(a);
//   a++
//   if(a === 101) break
// }

/////////////////////////////////////////////////////////////////////////////////////////

// const factorial = (n) => {
//   if(n < 0){
//     return 'лише для позитивних чисел'
//   }
//   let result = 1
//   while(n > 0){
//     result *= n
//     n--
//   }
//   return result
// }


// const number = 10
// const result = factorial(number)
// console.log(`факторіал числа ${number} => ${result}`);

/////////////////////////////////////////////////////////////////////////////////////////

//? do while (спочатку виконує потім перевіряє)

// let y = 50
// do {
//   console.log(y);
//   y++
// } while (y < 5);


// let t = 5
// while(t < 5){
//   console.log(t);
//   t++
// }



//! for of (для масивів)

// const arr = ['Renault', 'Audi', 'BMW', 'MB', 'Seat', 'WV', 'Citroen', 'Ferrari']


// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// // ////////////////////////
// // робота з масивами
// for (const auto of arr) {
//   console.log(auto);
// }

//! for in (для обєктів)

// const person = {
//   firstName: 'Artur',
//   lastName: 'White',
//   age: 30,
//   isMerried: true,
//   auto: 'VW'
// }

// console.log(person.firstName);
// console.log(person['lastName']);


// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

//////////////////////////////////////////////////////////////////////

const randomNumber = Math.floor(Math.random() * 100) + 1

for (let index = 15; index > 0; index--) {
  
  
}
