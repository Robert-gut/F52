//! PROMISE

// console.log('ok1');
// console.log('ok2');
// console.log('ok3');



// const res = (/////////////////////////) => [{},{},{}]

// res.forEach(el => {
//   console.log(el);
// })

// setTimeout(()=>{
//   console.log('Request number 1');
//   setTimeout(()=>{
//     console.log('Request number 2');
//     setTimeout(()=>{
//       console.log('Request number 3');
//     },3000)
//   },4000)
// }, 5000)


// console.log('ok1');
// console.log('ok2');

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))

// console.log('ok3');
// console.log('ok4');


// const promise = new Promise(function(resolve, reject){
//   setTimeout(()=>{
//     console.log('Start process');
//     resolve('Goot idea!')
//     // reject('Bad idea!')
//   },2000)
// })
// .then(function(){
//   return new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//       const car = {
//         brand: 'Tesla',
//         model: 'X'
//       }
//       console.log('You want to buy: ' + `${car.brand} ${car.model}`);
//       resolve(car)
//       // reject('Not enough money!')
//     }, 2000)
//   })
// })
// .then(function(car) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(()=>{
//       console.log('CTO checking...');
//       const carWithTechStatus = {
//         ...car,
//         techStatus: 'checked'
//       }
//       console.log(`Techmical status: ${carWithTechStatus.brand} ${carWithTechStatus.model} ${carWithTechStatus.techStatus}`);
//       resolve(carWithTechStatus)
//       // reject('Technical status bad!')
      
//     }, 2000)
//   })
// })
// .then(function(car){
//   return new Promise(function(resolve, reject){
//     setTimeout(()=>{
//       console.log('Police checking...');
//       const carWithPoliceStatus = {
//         ...car,
//         policeStatus: 'checked'
//       }
//       console.log(`Police status: ${carWithPoliceStatus.brand} ${carWithPoliceStatus.model} ${carWithPoliceStatus.policeStatus}`);
//       resolve(carWithPoliceStatus)
//       // reject('Police status bad!')
//     },2000)
//   })
// })
// .then(car => {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('Car status...');
//       const carWithFinalStatus = {
//         ...car,
//         status: 'bougth'
//       }
//       console.log(`Car status: ${carWithFinalStatus.brand} ${carWithFinalStatus.model} ${carWithFinalStatus.status}`);
//       resolve(carWithFinalStatus)
//       // reject('opsss!')
//     },2000)
//   })
// })
// .then(car => {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log(`You bought a car!!!!!!!!`);
//       console.log(car);
//       resolve(car)
//     },2000)
//   })
// })
// .catch(function(error){
//   console.error(error);
// })
// .finally(() => console.log('Finish process'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const API_URL = 'https://jsonplaceholder.typicode.com/todos'

// const todosListElement = document.getElementById('todos-list')

// function displayTodos(todos){
//   todos.forEach(todo => {
//     const listItem = document.createElement('li')
//     listItem.textContent = todo.title.charAt(0).toUpperCase() + todo.title.slice(1)
//     if(todo.completed){
//       listItem.style.textDecoration = 'line-through'
//       listItem.style.color = 'gray'
//     }
//     todosListElement.appendChild(listItem)
//   })
// }

// fetch(API_URL)
//   .then(response => {
//     if(!response.ok){
//       throw new Error('Error network!')
//     }
//     return response.json()
//   })
//   .then(data => {
//     displayTodos(data)
//   })
//   .catch(error => {
//     console.error(error);
//     todosListElement.textContent = `Не вдалося завантажити дані: ${error.message}`
//   })



  // async function name(params) {
  //   try {
  //     const res = await fetch()
  //     const data = await res.json()
  //   } catch (error) {
  //     console.error();
  //   }
  // }