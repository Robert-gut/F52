//! BOM (Browser object model)

//? 1 navigator

// console.log(navigator);

// console.log('Назва браузера',navigator.appCodeName);
// console.log('Версі браузера',navigator.appVersion);
// console.log('Назва браузера та платформи',navigator.userAgent);
// console.log('Мова браузера',navigator.language);
// console.log('Мови браузера',navigator.languages);
// console.log('Cookies',navigator.cookieEnabled);
// console.log('Оперційна система',navigator.platform);

// console.log('плагіни',navigator.plugins);
// console.log('плагіни',navigator.plugins);
// console.log('CPU',navigator.hardwareConcurrency);
// console.log('Інтернет',navigator.onLine);
// console.log('Клава',navigator.keyboard.appCodeName);

// console.log('Дозволи',navigator.permissions.query({name: 'geolocation'}));

//! получіти дані геолокації

// if('geolocation' in navigator){
//   navigator.geolocation.getCurrentPosition(position => {  
//     console.log(position.coords.longitude);
//     console.log(position.coords.latitude);
//   })
// }else{
//   console.log('Geolocation is not supported.');
// }

//! швидкісьть зєднання інтернета

// if('connection' in navigator){
//   const connection = navigator.connection
//   console.log('Effective network type:', connection.effectiveType)
//   console.log('Downlink Speed (Mbps):', connection.downlink);
//   console.log('Downlink Speed (Mbps):', connection);
// }

//! video

const videoElement = document.getElementById('cameraFeed')
const startCamera = document.getElementById('startCamera')

startCamera.addEventListener('click', () => {
  if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
    navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        videoElement.srcObject = stream
      })
  } else {
    console.error('getUserMedia is not supported in this browser');
  }
})



//! audio

const audioElement = document.getElementById('audioFeed')
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const recordingIndicator = document.getElementById('recordingIndicator')
const recordingsList = document.getElementById('recordingsList')

let mediaRecorder;
let chunks = []
let recordings = []

async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true})
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = e => chunks.push(e.data)
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(chunks, {type: 'audio/ogg; codecs=opus'})
      const audioUrl = URL.createObjectURL(audioBlob)
      chunks = []
      const recording = {url: audioUrl, blob: audioBlob}
      recordings.push(recording)
      displayRecordings()
      startButton.disabled = false
      stopButton.disabled = true
      recordingIndicator.style.display = 'none'
    }

    mediaRecorder.start()

    startButton.disabled = true
    stopButton.disabled = false
    recordingIndicator.style.display = 'block'
  } catch (error) {
    console.error(error);
  }
}

function stopRecording() {
  if(mediaRecorder && mediaRecorder.state !== 'inactive'){
    mediaRecorder.stop()
  }
}

function displayRecordings() {
  recordingsList.innerHTML = ''

  recordings.forEach((recording, index)=>{
    const listItem = document.createElement('li')
    listItem.textContent = `Recording ${index + 1}`

    const playButton = document.createElement('button')
    playButton.textContent = 'play'
    playButton.addEventListener('click', () => {
      audioElement.src = recording.url
      audioElement.play()
    } )

    const downloadButton = document.createElement('button')
    downloadButton.textContent = 'Download'
    downloadButton.addEventListener('click', ()=>{
      const downloadLink = document.createElement('a')
      downloadLink.href = recording.url
      downloadLink.download = `recorded_audio_${index + 1}.ogg`
      downloadLink.click()
    })

    listItem.appendChild(playButton)
    listItem.appendChild(downloadButton)
    
    recordingsList.appendChild(listItem)
  })
}

startButton.addEventListener('click', startRecording)
stopButton.addEventListener('click', stopRecording)