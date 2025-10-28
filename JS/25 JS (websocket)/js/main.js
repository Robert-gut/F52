const messagesDiv = document.getElementById('messages')
const sendButton = document.getElementById('sendButton')
const connectButton = document.getElementById('connect')
const disconnectButton = document.getElementById('disconnect')
const messageInput = document.getElementById('messageInput')
let websocket

function displayMessage(message){
  const p = document.createElement('p')
  p.textContent = message
  messagesDiv.appendChild(p)
  messagesDiv.scrollTop = messagesDiv.scrollHeight
}

connectButton.addEventListener('click', () => {

  if(!websocket || websocket.readyState === WebSocket.CLOSED){
    websocket = new WebSocket('wss://echo.websocket.org')

    websocket.onopen = (e) => {
      console.log(`З'єднання встановлено`);
      displayMessage(`Системне повідомлення: З'єднання встановлено`)
      connectButton.disabled = true
      disconnectButton.disabled = false
    }

    websocket.onmessage = (e) => {
      console.log(`Отримано повідомлення`);
      displayMessage(`Сервер: ${e.data}`)
    }

    websocket.onclose = (e) => {
      console.log(`З'єднання закрито`);
      displayMessage(`Системне повідомлення: З'єднання закрито (код: ${e.code}, причина: ${e.reason})`)
    }
  }else{
    displayMessage(`Системне поввідомлення: З'єднання вже встановлено`)
  }
})

disconnectButton.addEventListener('click', () => {
  if(websocket && websocket.readyState === WebSocket.OPEN){
    websocket.close()
    connectButton.disabled = false
    disconnectButton.disabled = true
  }else{
    displayMessage(`Системне поввідомлення: З'єднання не встановлено`)
  }
})

sendButton.addEventListener('click', () => {
  if(websocket && websocket.readyState === WebSocket.OPEN){
    const message = messageInput.value
    websocket.send(message)
    displayMessage(`Ви: ${message}`)
  }else{
    displayMessage(`Системне поввідомлення: З'єднання не встановлено`)
  }
})