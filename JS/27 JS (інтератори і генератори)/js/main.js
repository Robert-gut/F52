// ! генератори і інтератори


// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

function* generateNumvers() {
  for (let i = 1; i <= 5; i++) {
    yield i
  }
}


const numbers = generateNumvers()

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());


function* inficiteNumbers(){
  let i = 1
  while(true){
    yield i
    i++
  }
}

const numvers1 = inficiteNumbers()

console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
console.log(numvers1.next());
