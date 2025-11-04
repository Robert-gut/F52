const GEO_API_KYE = '42e4f1afc5mshf98cca64b27608cp186fa2jsnf46c39352989'
const searchBtn = document.getElementById('search-btn')
const cityInput = document.getElementById('city-input')
const suggestions = document.getElementById('suggestions')

cityInput.addEventListener('input', async () => {
  const query = cityInput.value.trim()
  if(query.length < 2){
    suggestions.innerHTML = ''
    return
  }

  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&namePrefix=${query}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': GEO_API_KYE,
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    suggestions.innerHTML = ''
    result.data.forEach(city => {
      const div = document.createElement('div')
      div.textContent = `${city.city}, ${city.country}, ${city.region}`
      div.addEventListener('click', ()=>{
        cityInput.value = `${city.city}, ${city.country}, ${city.region}`
        suggestions.innerHTML = ''
      })
      suggestions.appendChild(div)
    });

  } catch (error) {
    console.error(error);
  }
})

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim()
  if(!city) return alert(`Please enter a city`)

  try {
    const weatherRes = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=${navigator.language}&appid=33a4edb2fe337fd387e632012d97d0de`) 
    if(!weatherRes.ok) throw new Error('Weather nor found.')
    const weatherData = await weatherRes.json()
    console.log('✌️weatherData --->', weatherData);

    const countryCode = weatherData.city.country
    const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    const countryData = await countryRes.json()
    console.log('✌️countryData --->', countryData);

    
  } catch (error) {
    console.error(error);
  }
})