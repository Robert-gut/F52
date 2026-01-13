//! 1 Оптимізація DOM

// function addItemsToUnorderedListBad(count){
//   const ul = document.getElementById('myListBad')
//   for (let i = 0; i < count; i++) {
//     const li = document.createElement('li')
//     li.textContent = `Element ${i + 1}`
//     ul.appendChild(li)
//   }
// }

// addItemsToUnorderedListBad(50)

//! ++++++++++++++++++++++++++++++++++++++++++++++

// function addItemsToUnorderedList(count){
//   const ul = document.getElementById('myListBad')
//   const fragment = document.createDocumentFragment()

//   for (let i = 0; i < count; i++) {
//     const li = document.createElement('li')
//     li.textContent = `Element ${i + 1}`
//     fragment.appendChild(li)
//   }
//   ul.appendChild(fragment)
// }

// addItemsToUnorderedList(100)

//! 2 Оптимізація циклів

// function processArrayBad(arr){
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     const squared = Math.pow(element, 2)
//     const multiplied = squared * Math.PI
//     result.push(multiplied)
//   }
//   return result
// }

// const dataArray = Array.from({length: 1000}, (_, i) => i + 1)

// console.time('processArrayBad')
// console.log(processArrayBad(dataArray));
// console.timeEnd('processArrayBad')

//! +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function processArrayGoog(arr){
//   const result = []
//   const pi = Math.PI
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     const squared = Math.pow(element, 2)
//     const multiplied = squared * pi
//     result.push(multiplied)
//   }
//   return result
// }


// console.time('processArrayGoog')
// console.log(processArrayGoog(dataArray));
// console.timeEnd('processArrayGoog')

//! 3 Делегування подій

// const itemsBad = document.querySelectorAll('#myLementistBad li')
// console.log('✌️itemsBad --->', itemsBad);

// itemsBad.forEach(item => {
//   item.addEventListener('click', () => {
//     console.log(item.textContent);
//   })
// })

//! +++++++++++++++++++++++++++++++++++++++++++++++++++++

// const itemsBad = document.getElementById('myLementistBad')
// console.log('✌️itemsBad --->', itemsBad);

// itemsBad.addEventListener('click', function (e) {
//   console.log(e);
  
//   if(e.target && e.target.nodeName === 'LI'){
//     console.log(`${e.target.textContent}`);
//   }
// })

//! 4 Рядкі

// function buildString(count){
//   let result = ''
//   for (let i = 0; i < count; i++) {
//     result += `Element ${i + 1}, `
//   }
//   return result
// }

// console.time('buildString')
// console.log(buildString(10000000));
// console.timeEnd('buildString')

//! +++++++++++++++++++++++++++++++++++++++

// function buildStringGoog(count){
//   let result = []
//   for (let i = 0; i < count; i++) {
//     result.push(`Element ${i + 1}, `)
//   }
//   return result.join('')
// }

// console.time('buildStringGoog')
// console.log(buildStringGoog(1000000));
// console.timeEnd('buildStringGoog')


//! 5 умовні оператори

// function getColorName(code){
//   if (code === 1) {
//     return 'red'
//   } else if(code === 2){
//     return 'blue'
//   } else if(code === 3){
//     return 'orange'
//   } else if(code === 4){
//     return 'yellow'
//   } else if(code === 5){
//     return 'white'
//   } else {
//     return 'black'
//   }
// }

// console.log(getColorName(3));
// console.log(getColorName(1));

//! ++++++++++++++++++++++++++++++

// function getColorNameGood(code){
//   const color = {
//     1: 'red',
//     2: 'blue',
//     3: 'orange',
//     4: 'yellow',
//     5: 'white',
//     6: 'black',
//   }
//   return color[code]
// }

// console.log(getColorNameGood(3));
// console.log(getColorNameGood(1));


//! 6 arrya

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const evenSquares = []

// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 === 0){
//     evenSquares.push(numbers[i] * numbers[i])
//   }
// }

//! ++++++++++++++++++++++++++++++++++++++++++++

// const evenSquaresGood = numbers.filter(number => number % 2 === 0).map(number => number * number)

//! 7 Лінива ініцілізація

// function processData(extra){
//   const expectData = {
//     a: 1,
//     b: 2,
//     c: 3,
//     //.......
//   }

//   if(extra){
//     console.log(expectData);
//   } else {
//     console.log('додаткових даних не потрібно');
//   }
// }

//! ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function processData(extra){
  
//   if(extra){
//     const expectData = {
//       a: 1,
//       b: 2,
//       c: 3,
//       //.......
//     }
//     console.log(expectData);
//   } else {
//     console.log('додаткових даних не потрібно');
//   }
// }

///////////////////////////////////////////////


// Вхід: nums = [2,7,11,15], target = 9
//  Вихід: [0,1]
//  Пояснення: Оскільки nums[0] + nums[1] == 9, ми повертаємо [0, 1].
// Приклад 2:
// Вхід: числа = [3,2,4], ціль = 6
//  Вихід: [1,2]
// Приклад 3:
// Вхід: числа = [3,3], ціль = 6
//  Вихід: [0,1]

const arr = [2,11,15,7]
const tar = 9

// const twoSum = (nums, target) => {
//   let num = nums[0]
//     nums.forEach((el,index)=>{
//        console.log(num + el === target );
//     })
// }



var twoSum = function(nums, target) {
  const map = new Map(); // value -> index
  
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSum(arr, tar));
