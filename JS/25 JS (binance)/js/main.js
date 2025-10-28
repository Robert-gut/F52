const messagesDiv = document.getElementById('messages')
const websocketUrl = 'wss://fstream.binance.com/ws/ethusdt@aggTrade'
let websocket

function displayMessage(message){
  const p = document.createElement('p')
  p.textContent = message
  messagesDiv.appendChild(p)
  messagesDiv.scrollTop = messagesDiv.scrollHeight
}

function connectBinanceWebsocket(){
  websocket = new WebSocket(websocketUrl)

  websocket.onopen = (e) => {
    console.log(`З'єднання встановлено з Binance`);
    displayMessage(`Системне повідомлення: З'єднання встановлено з Binance`)
  }

  websocket.onmessage = (e) => {
    try {
      const tradeData = JSON.parse(e.data)
      console.log('✌️tradeData --->', tradeData);
      const price = parseFloat(tradeData.p).toFixed(5)
      const quantity = parseFloat(tradeData.q).toFixed(5)
      const timestamp = new Date(tradeData.T).toLocaleTimeString()
      const message = `Час: ${timestamp}, Ціна: ${price} USDT, Кількість: ${quantity} BTC`
      const p = document.createElement('p')
      p.classList.add('trade')
      p.textContent = message
      messagesDiv.appendChild(p)
      messagesDiv.scrollTop = messagesDiv.scrollHeight
    } catch (error) {
      console.error(error)
    }
  }
}

connectBinanceWebsocket()