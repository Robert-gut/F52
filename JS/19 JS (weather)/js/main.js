window.addEventListener('keypress', e => e.key === 'Enter' && generateUrl())
document.getElementById('search').addEventListener('click', generateUrl)



function generateUrl() {
  const cityName = document.getElementById('sityName')
  if(cityName.value.length === 0){
    cityName.style.borderColor = 'red'
  } else {
    const city = cityName.value
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ua&appid=33a4edb2fe337fd387e632012d97d0de`
    fetchWatherByCityName(url)
  }
}

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
  box.innerHTML = `
  <h2>${data.city.name}</h2>
  <h3>${data.list[0].dt_txt}</h3>
  <h4>${data.list[0].main.temp}</h4>
  <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png">
  `
}