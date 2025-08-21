const inputText = document.getElementById('userText')
const btnStart = document.getElementById('btnStart')
const ul = document.querySelector('ul')

window.addEventListener('keypress', e => e.key === 'Enter' && start())

function start(){
  const startTime = performance.now()
  ul.innerHTML = ''
  const letters = {};
  [...inputText.value].forEach(letter => letters[letter] = (letters[letter] || 0) + 1)

  ul.innerHTML = Object.keys(letters).map(leter => {
    const percent = letters[leter] / inputText.value.length  * 100
    return `<li>"${leter}": ${letters[leter]} - ${percent.toFixed(3)}%</li>`
  })
  inputText.value = ''
  const endTime = performance.now()
  console.log(`${(endTime - startTime)} мс.`);
}
btnStart.addEventListener('click', start)

//100 0000

//1 116314.5 мс.
//2 56.89999997615814 


