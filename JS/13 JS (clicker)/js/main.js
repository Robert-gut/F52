const startGameBtn = document.getElementById('startGameBtn')
const gameContainer = document.getElementById('game-container')

let score = 0
let timer = 10
let gameActive = false
let interval

startGameBtn.addEventListener('click', startGame)

function startGame(){
  startGameBtn.style.display = 'none'
  gameActive = true
  score = 0
  timer = parseInt(document.getElementById('duration').value) || 10

  updateScore()
  updateTimer()
  
  interval = setInterval(()=> {
    if(timer > 0){
      timer--
      updateTimer()
    }else{
      endGame()
    }
  },1000)
  createSquare()
}

function endGame(){
  gameActive = false
  clearInterval(interval)
  alert(`Гра закінчена! Ваш рахунокЖ ${score}`)
  clearGameContainer()
  startGameBtn.style.display = 'block'
}

function clearGameContainer(){
  gameContainer.lastElementChild.remove() 
}

function createSquare(){
  const square = document.createElement('div')
  square.classList.add('square')
  const {x, y} = getRandomPosition()
  square.style.left = `${x}px`
  square.style.top = `${y}px`
  square.addEventListener('click',()=>{
    if(gameActive){
      score++
      updateScore()
      square.remove()
      createSquare()
    }
  })
  gameContainer.appendChild(square)
}

function getRandomPosition(){
  const maxX = gameContainer.clientWidth - 50
  const maxY = gameContainer.clientHeight - 50
  const x = Math.floor(Math.random() * maxX)
  const y = Math.floor(Math.random() * maxY)
  return {x, y}
}

function updateScore(){
  document.getElementById('score').textContent = `Score: ${score}`
}

function updateTimer() {
  document.getElementById('timer').textContent = `Time: ${timer}`
}




