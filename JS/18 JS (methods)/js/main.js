//////////////////////////////////////////////////////////////////////////


//! Methods http

//? GET - ДАЙ ДАНІ
//? POST - СТВОРИ ДАНІ
//? POP/PATH - РЕДАГУЙ ДАНІ
//? DELETE - ВИАЛИ ДАНІ

//? URL

// 123.123.123.123/api/user  | GET => [{},{},{}]
// 123.123.123.123/api/user  | POST {} => 201
// 123.123.123.123/api/user  | POP {} => 200 {}
// 123.123.123.123/api/user/jfdhsklsdjfhgkjdfg  | DELETE => 200


// //? params

// //! uri param
// 123.123.123.123/api/user/jfdhsklsdjfhgkjdfg  | DELETE => 200
// 123.123.123.123/api/user/alskdjhfskljadfh  | GET => {}

// //! query param

// 123.123.123.123/api/user?start=0&end=59  | GET => {}
// hhtps://123.123.123.123:3000/api/user?start=60&end=119  | GET => {}


////////////////////////////////////////////////////////////////////////////////////////

const URL_API = 'http://localhost:3000/api'



//! get
async function getCar() {
  try {
    const response = await fetch(
      URL_API + '/car',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const data = await response.json()
    console.log(data);
  
  } catch (error) {
    console.log(error);
  }
}





//! post
async function createCar(car) {
  try {
    const response = await fetch(
      URL_API + '/car',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
      }
    )

    const data = await response.json()
    console.log(data);
  
  } catch (error) {
    console.log(error);
  }
}


//! delete
async function deleteCar(id) {
  try {
    const response = await fetch(
      URL_API + '/car/' + id,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data = await response.json()
    console.log(data);
  
  } catch (error) {
    console.log(error);
  }
}




const test = {
  brand: 'BMW',
  model: 'm5',
  year: 2016,
}

// createCar(test)

// deleteCar("68dc1348912cb5d8a215b758")

getCar()