// @ts-check
function addMoney(sum, user){
  user.money = user.money + sum
}

addMoney('123', {name: 'Ben'})

/////////////////////////////////

interface User{
  name: String
  money: Number
}

function addMoney(sum: Number, user: User){
  user.money = user.money + sum
}

addMoney('123', {name: 'Ben'})
