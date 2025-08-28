//? DOM - document object model

// console.log(window.document);

// console.log(window.document.documentElement);
// console.log(window.document.body);
// console.log(window.document.head);

//! навігація по вузлам

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.childNodes);

// console.log(document.body.parentNode);

// console.log(document.body.previousSibling);
// console.log(document.body.nextSibling);

//! навігація по ЕЛЕМЕНТАМ

// console.log(document.body.children);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.parentElement);

// console.log(document.body.previousElementSibling);
// console.log(document.body.nextElementSibling);

//? пошук елементів в DOM

//!1 чіткий пошук по певному селектору - querySelectorAll()
// console.log(document.querySelectorAll('li'));
// console.log(document.querySelectorAll('.li'));
// console.log(document.querySelectorAll('#li4'));
// console.log(document.querySelectorAll('ol [name]'));
// console.log(document.querySelectorAll('ol [name="li6"]'));
// console.log(document.querySelectorAll('article'));

//!2 querySelector() - вертає перший знайдений елемент по селектору

// console.log(document.querySelector('li'));
// console.log(document.querySelector('.li'));

//!3 getElementById() - шукає елемент по id
// console.log(document.getElementById('li4'));

//!4 getElementsByTagName() - шукає по тегу вертає колекцію елементів
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByTagName('title'));

//!5 getElementsByClassName() - шукає по class вертає колекцію елементів
// console.log(document.getElementsByClassName('li'));

//!6 getElementsByName() - шукає по атрибуту name
// console.log(document.getElementsByName('li'));

//? види колекцій ЖИВА і СТАТИЧНА

// console.log(document.querySelectorAll('.li'));// статична колекція 

// console.log(document.getElementsByClassName('li'));// жива колекція

// document.querySelector('ol').insertAdjacentHTML(
//   'beforeend',
//   `<li class='li'>3</li><li class='li'>3</li><li class='li'>3</li>`
// )

//! //////////////////////////////////////////////////////////////////////////

//! пошук нащадка closest()

// console.log(
//   document.querySelector('#li4').closest('body')
// );

//! перевірка на атрибут metches()

// console.log(
//   document.querySelector('#li4').matches('#li4')
// );


//? РЕДАГУВАННЯ ЕЛЕМЕНТІВ

// const text = document.querySelector('p')

//!1 inerHTML - змінювати наповнення нашого тега включно з його тегами
// console.log(text.innerHTML);

// text.innerHTML = 'test test test'

// text.innerHTML = `test <a href='#'>link</a> <br> test <hr> <br> test`

//!2 outerHTML - змінювати наповнення нашого тега І ЙОГО САМОГО включно з його тегами

// console.log(text.outerHTML);

// text.outerHTML = `<h1>test <a href='#'>link</a> <br> test <hr> <br> test</h1>`

//!3 textContent -

// console.log(text.textContent);

// text.textContent = `test <a href='#'>link</a> <br> test <hr> <br> test`

//? СТВОРЕННЯ ЕЛЕМЕНТІВ

//! createElement() - створює елементи

const newEl = document.createElement('select')
console.log('✌️newEl --->', newEl);

//! вставити елемент в DOM

const div = document.querySelector('div')

// div.before(newEl)//перед відкриваючим
// div.after(newEl)// після закриваючого
// div.prepend(newEl)//після відкриваючого тега(в середині 1)
// div.append(newEl)// перед закривіаючим тегом(в середині останє)

//! insertAdjacentHTML()
div.insertAdjacentHTML(
  'beforebegin',
  `<h3>insertAdjacentHTML</h3>`
)

//! insertAdjacentElement()
div.insertAdjacentElement(
  'beforeend',
  newEl
)

//! insertAdjacentText()

div.insertAdjacentText(
  'afterend',
  'text text text text'
)