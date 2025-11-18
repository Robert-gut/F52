function performHeavyCalculation() {
  let sum = 0

  const limit = 5000000000
  for (let i = 0; i < limit; i++) {
    sum += i
  }
  return sum
}

onmessage = (event) => {
  const data = event.data

  if(data.command === 'calculate'){
    const start = performance.now()
    
    const result = performHeavyCalculation()

    const end = performance.now()
    const timeTaken = (end - start).toFixed(2)
    
    postMessage({
      result: result,
      time: timeTaken
    })
  }

}