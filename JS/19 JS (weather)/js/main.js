window.addEventListener('keypress', e => e.key === 'Enter' && generateUrl())
document.getElementById('search').addEventListener('click', generateUrl)



function generateUrl() {
  const cityName = document.getElementById('sityName')
  if(cityName.value.length === 0){
    cityName.style.borderColor = 'red'
  } else {
    const city = cityName.value
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=${navigator.language}&appid=33a4edb2fe337fd387e632012d97d0de`
    fetchWatherByCityName(url)
  }
}

function myPosition() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords
      const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=${navigator.language}&appid=33a4edb2fe337fd387e632012d97d0de`
      fetchWatherByCityName(url)
    })
  }else{
    console.log('Geolocation is not supported.');
  }
}
myPosition()

const test = {
  name: 'test',
  age: 34
}

test.name
test.age

const {name, age} = test

name 
age


async function fetchWatherByCityName(city) {
  try {
    const response = await fetch(city)
    const data = await response.json()
    console.log('✌️data --->', data);
    showWether(data)
  } catch (error) {
    console.log(error);
  }
}

function showWether(data) {
  const box = document.getElementById('genetal')
  const { main, weather, dt_txt, wind} = data.list[0]
  const { grnd_level, humidity, pressure, sea_level, temp, temp_kf, temp_max, temp_min } = main
  const { deg, gust, speed } = wind

  box.innerHTML = `
  <h2>${data.city.name}</h2>
  <h3>${dt_txt}</h3>
  <h4>${temp}</h4>
  <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
  `
}