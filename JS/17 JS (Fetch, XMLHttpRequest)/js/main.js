//! REST API => Http => JSON => get,put,post,delete

//! 1 xmlHttpRequest

// const API_URL_USERS = 'https://jsonplaceholder.typicode.com/users'

// const sendReq = (method, url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.responseType = 'json'
//     xhr.onload = () => {
//       if(xhr.status >= 400){
//         reject(xhr.response)
//       }else{
//         resolve(xhr.response)
//       }
//     }
//     xhr.send()
//   })
// }

// sendReq('GET', API_URL_USERS)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


//! 2 fetch 
// const API_URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'

// fetch(API_URL_POSTS)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


//? try catch - (заміняє логіку зенів....)
// try {
//   // головна чстина логіки запита
// } catch (error) {
//   //опрацювання помилок
// }

//? async await (async - говоримо що ця функція є асинхроною, await- ми говоримо покай не переходь до другого кроку....)

const btn = document.getElementById('load')
btn.addEventListener('click', showPosts)

const API_URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'

async function showPosts() {
  try {
    const response = await fetch(API_URL_POSTS)
    const data = await response.json()
    btn.setAttribute('disabled', true)
    showData(data)
  } catch (error) {
    console.log('Error:', error);
  }
}


function showData(data) {
  const list = document.getElementById('list')
    const elem = data.map(item => {
      return `
      <div class="card mb-5">
        <h5 class="card-header">${item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h5>
        <div class="card-body">
          <p class="card-text">${item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `
    })
    list.insertAdjacentHTML('afterbegin', elem.join(' '))
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const btnPrivat = document.getElementById('loadPrivat')
const date = document.getElementById('date')
btnPrivat.addEventListener('click', showPrivat)

// const API_URL_PRIVAT = `https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2024`
const API_URL_PRIVAT = `https://api.privatbank.ua/p24api/exchange_rates?json&date=`

async function showPrivat() {

  
  try {
    const response = await fetch(API_URL_PRIVAT + date.value.split('-').reverse().join('.'))
    const data = await response.json()
    console.log('✌️data --->', data);
    btn.setAttribute('disabled', true)
  } catch (error) {
    console.log('Error:', error);
  }
}