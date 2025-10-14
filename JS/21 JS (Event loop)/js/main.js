//! Event loop
// window.addEventListener('click', () => {console.log('click')})

// setTimeout(()=>{
//   console.log('set timeout 3s');
  
// }, 3000)

// setInterval(()=>{
//   console.log('set Interval 5s');
  
// }, 5000)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');

//! ///////////////////////////////////////////////////////////////// call stack

// function one(){
//   console.log('error');
// }

// function two(){
//   one()
// }

// function three() {
//   two()
// }

// three()

// let count = 0
// function test() {
//   console.log(++count);
//   test()
// }
// test()



window.addEventListener('click', () => {console.log('click')})
window.addEventListener('click', function(){})
window.addEventListener('click', nameFun)
window.addEventListener('click',  () => {nameFun(123)})

window.addEventListener('')
function nameFun (a){

}