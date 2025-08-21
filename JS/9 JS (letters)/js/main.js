const inputText = document.getElementById('userText')
const btnStart = document.getElementById('btnStart')
const ul = document.querySelector('ul')

window.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') start()
})

function start(){
  const startTime = performance.now()

  ul.innerHTML = ''
  const letters = {}

  for (let i = 0; i < inputText.value.length; i++) {
    for (let b = 0; b <= Object.keys(letters).length ; b++) {
      if(inputText.value[i] !== Object.keys(letters)[b]){
        letters[inputText.value[i]] = 0
      }
    }
  }
  
  for(let b = 0; b <= Object.keys(letters).length; b++){
    for (let i = 0; i < inputText.value.length; i++) {
      if(inputText.value[i] === Object.keys(letters)[b]){
        letters[Object.keys(letters)[b]] += 1
      }     
    }
  }

  for (let i = 0; i < Object.keys(letters).length; i++) {
    const percent = letters[Object.keys(letters)[i]] / inputText.value.length  * 100
    ul.insertAdjacentHTML('beforeend',
      `<li>"${Object.keys(letters)[i]}": ${letters[Object.keys(letters)[i]]} - ${percent.toFixed(3)}%</li>`
    )
  }
  inputText.value = ''

  const endTime = performance.now()
  console.log(`${(endTime - startTime)} мс.`);
}
btnStart.addEventListener('click', start)






