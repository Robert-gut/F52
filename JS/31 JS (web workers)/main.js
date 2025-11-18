//! 1
// const myWorkers = new Worker('worker.js')

//! 2 
// const mySharedWorkers = new SaharedWorker('worker.js')

//! 3
// navigator.serviceWorker.register('sw.js')

////////////////////////////////////////////////////////////////////////////////


const startButton = document.getElementById('start-calc')
const colorButton = document.getElementById('change-color')
const resultDisplay = document.getElementById('result')


function getRandomColor (){
  const R = Math.floor(Math.random() * 255)
  const G = Math.floor(Math.random() * 255)
  const B = Math.floor(Math.random() * 255)
  return `rgb(${R}, ${G}, ${B})`
}

const worker = new Worker('./worker.js')

startButton.onclick = () => {
  resultDisplay.textContent = 'Обчислення розпочато ... (UI залишається активним)'
  worker.postMessage({command: 'calculate'})
  console.log('Повідомлення відправлено воркеру.');
}

colorButton.onclick = () => {
  document.body.style.backgroundColor = getRandomColor()
  console.log('UI змінений він не завис');
}

worker.onmessage = (event) =>{
  const data = event.data
  if(data.result){
    resultDisplay.textContent = `Результат обчислення: ${data.result}. Час: ${data.time}`
    console.log('Результат отримано від воркера.');
  }
}

// let i = 0
// while(true){
//   console.log(i);
//   i++
//   if(i > 100000) break
// }