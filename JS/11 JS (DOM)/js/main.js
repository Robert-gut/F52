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
// console.log(document.querySelectorAll('li')[2]);
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

//!3 textContent - просто вводить текст

// console.log(text.textContent);

// text.textContent = `test <a href='#'>link</a> <br> test <hr> <br> test`

//? СТВОРЕННЯ ЕЛЕМЕНТІВ

//! createElement() - створює елементи

// const newEl = document.createElement('select')
// console.log('✌️newEl --->', newEl);

//! вставити елемент в DOM

// const div = document.querySelector('div')

// div.before(newEl)//перед відкриваючим
// div.after(newEl)// після закриваючого
// div.prepend(newEl)//після відкриваючого тега(в середині 1)
// div.append(newEl)// перед закривіаючим тегом(в середині останє)

//! insertAdjacentHTML()
// div.insertAdjacentHTML(
//   'beforebegin',
//   `<h3>insertAdjacentHTML</h3>`
// )

//! insertAdjacentElement()
// div.insertAdjacentElement(
//   'beforeend',
//   newEl
// )

//! insertAdjacentText()

// div.insertAdjacentText(
//   'afterend',
//   'text text text text'
// )

//? ////////////////////////////////////////////////////////////////////


//! перенос з одного місця на інше ел

// const li4 = document.querySelector('#li4')
// const li2 = document.querySelector('.li')


// li4.previousElementSibling.previousElementSibling.after(li4)

//! копіювання елементів


// const ol = document.querySelector('ol')

// const copy_ol = ol.cloneNode()
// console.log('✌️copy_ol --->', copy_ol);

// const copy_ol = ol.cloneNode(true)
// console.log('✌️copy_ol --->', copy_ol);

// ol.after(copy_ol)

//! видалення елмента
// const li6 = document.querySelector('[name="li6"]')

// li6.remove()


//? керування css and class

//! Керування class

// const ol = document.querySelector('ol')
// console.log('✌️ol --->', ol);

// console.log(ol.className);

// ol.className = 'test'

// ol.className = ol.className + ' test'

//! ClassList

// const ol = document.querySelector('ol')

// console.log(ol.classList);
// console.log(ol.classList[0]);
// console.log(ol.classList[1]);
// console.log(ol.classList[2]);

//! МЕТОДИ ОБЄКТА CLASSLIST
/////////////////////////////////////////////////////

//*1 добавляння класів
// ol.classList.add('red', 'size') 

//*2 видалення класів
// ol.classList.remove('red')

//*3 якщо є true якщо немає вертає false (перевірка на клас)
// console.log(ol.classList.contains('red'));
// console.log(ol.classList.contains('size'));

//*4 видаляє клас якщо він є і добавляє якщо немає
// ol.classList.toggle('red')

// ol.addEventListener('click', ()=>{
//   ol.classList.toggle('red')
// })

//! style

const h1 = document.querySelector('h1')

h1.style.fontSize = '45px'
h1.style.color = 'green'
h1.style.fontFamily = `Verdana, Geneva, Tahoma, sans-serif`

//! cssText

const h2 = document.querySelector('h2')

h2.style.cssText = `
  font-size: 35px;
  color: blue;
  text-align: center;
`

//! getComputedStyle() - для полечення значення якїсь властивості

// console.log(h1.style.margin);
// console.log(getComputedStyle(h1).margin);
// console.log(getComputedStyle(h1).color);
// console.log(getComputedStyle(h1).fontSize);
// console.log(getComputedStyle(h1, '::after').margin);

//! получіти число для оброхунків

// console.log(getComputedStyle(h1).fontSize / 2);
// console.log(parseInt(getComputedStyle(h1).fontSize) / 2);

// h1.style.fontSize = parseInt(getComputedStyle(h1).fontSize) / 2 + 'px'

//! АТРИБУТИ

const input = document.querySelector('input')
const a = document.querySelector('a')

// console.log(input.type);
// console.log(a.href);

// a.href = 'https://google.com'
// input.value = 'text text text'

// console.dir(a);

//! Attribute() has get remove set

//*1 has  перевірка чи є такий атрибут => true false
console.log(input.hasAttribute('value'));

//*2 get  повертає значення
console.log(input.getAttribute('value'));

//*3 set добавляє значення атрибута
input.setAttribute('value', 'super man')

//*4 remove видаляє
input.removeAttribute('value')  






