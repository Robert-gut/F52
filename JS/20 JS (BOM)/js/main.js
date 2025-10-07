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

if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(position => {  
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
  })
}else{
  console.log('Geolocation is not supported.');
}




