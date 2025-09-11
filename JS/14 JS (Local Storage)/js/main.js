//! LOCAL STORAGE
//? BR  5-15Mб  !string!  url(https://google.com)
//! Зберігає дані між сесіями

// const frontEnd = 'Fron-end F52'

// const age = 1

//! 1 Як записати дані в LS => setItem()

// localStorage.setItem('ourGroup', frontEnd)

// localStorage.setItem('age', age)

//! 2 Як прочитати дані з LS => getItem()

// localStorage.getItem('test')//null

// console.log(localStorage.getItem('ourGroup'));
// console.log(localStorage.getItem('age'));

//! 3 Як видалити дані з LS => removeItem(key)

// localStorage.removeItem('age')

//! 4 Як видалити ВСІ дані з LS => clear()

// localStorage.clear()


//! Array, Object

// const car = {
//   brand: 'Renault',
//   model: 'megan',
//   engin: ['1.5tdci', '1.9tdi', '1.6mpi']
// }

////////////////////////////////////////////////
// localStorage.setItem('car', car)//error
// console.log(localStorage.getItem('car'));//error
///////////////////////////////////////////////

// localStorage.setItem('car', JSON.stringify(car))

// const carLS = JSON.parse(localStorage.getItem('car'))
// console.log('✌️carLS --->', carLS);

/////////////////////////////////////////////////////////////////////////////////


const form = document.getElementById('refistrationForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target[0].value);
  const user = {
    firstName: e.target[0].value,
    lastName: e.target[1].value,
    email: e.target[2].value,
    date: e.target[3].value,
    password: e.target[4].value,
    confirmPassword: e.target[5].value,
  }
  localStorage.setItem('user', JSON.stringify(user))
})

const user = JSON.parse(localStorage.getItem('user'))
document.getElementById('firstName').value = user.firstName
document.getElementById('lastName').value = user.lastName
document.getElementById('email').value = user.email
document.getElementById('date').value = user.date
document.getElementById('password').value = user.password
document.getElementById('confirmPassword').value = user.confirmPassword
