//! LocalStorage, cookies , sessionStorage

//? LocalStorage  => Постійно => 5-10 МБ => дані які повинні бути доступні між сеансами користувача
//? SessionStorage => До закриття браузера => 5-10 МБ => дані які повинні бути доступні лише протягом сеанса користувача
//? cookies => вказуємо при створення => 4кб => Зберігання індефікаторів сесій

const saveDataBtn = document.getElementById('saveData')
saveDataBtn.addEventListener('click', saveData)

function saveData() {
  const data = document.getElementById('dataInput').value
  console.log('✌️data --->', data);

  //LS
  localStorage.setItem('LSData', data)
  displayLS()
  //SS
  sessionStorage.setItem('SSData', data)
  displaySS() 
  //Cookies
  document.cookie = `cookieData=${data}; expires=${new Date(Date.now() + 86400000).toUTCString()}; secure;`
  displayCookie()
}


function displayLS() {
  const data = localStorage.getItem('LSData')
  document.getElementById('localStorageOutput').innerText = data
}

function displaySS() {
  const data = sessionStorage.getItem('SSData')
  document.getElementById('sessionStorageOutput').innerText = data
}

function displayCookie() {
  const cookie = document.cookie.split(';')
  const cookieData = cookie.find(cookie => cookie.trim().startsWith('cookieData='))
  document.getElementById('cookieData').innerText = cookieData.split('=')[1]
}


function clear() {
  localStorage.clear()
  sessionStorage.clear()
  document.cookie = 'cookieData=; max-age=-1'
}

document.getElementById('clearBtns').addEventListener('click', clear)