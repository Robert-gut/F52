//? generic

//! 1 приклади встроїних дженеріків

// const a: Array<number> = [1,2,3]
// const b: Array<string> = ['1','2','3']

async function test() {
  const a = await new Promise<number>((res, rej) => {
    res(1)
  })
}

//! Record<K, V>

const check: Record<string, boolean> = {
  drive: true,
  kpp: false
}

//? 2 function з джейнеріками

// function logMiddlewere(data:number):number{
//   console.log(data);
//   return data
// }

// const res = logMiddlewere(33)

//////////////////////////////////////////////

// function logMiddlewere(data:number | string):number | string{
//   console.log(data);
//   return data
// }

// const res = logMiddlewere(33)

//!/ /////////////////////////////

// function logMiddlewere<T>(data: T): T{
//   console.log(data);
//   return data
// }

// const res = logMiddlewere<number>(33)
// const res1 = logMiddlewere<string | number>('33')
// const res2 = logMiddlewere<boolean>(true)
// const res3 = logMiddlewere(true)
// const res4 = logMiddlewere('sdfgsdfgsdf')

//!/ /////////////////////////////


// function getSplitHalf<T>(data: Array<T>): Array<T>{
//   const l = data.length / 2
//   return data.splice(0,1)
// }

// getSplitHalf([1,2,3])
// getSplitHalf([1,2,'3'])
// getSplitHalf<string>(['1','2','3'])


// //? 3 практика

// function toString<T>(data: T): string | undefined{
//   if(Array.isArray(data)){
//     return data.toString()
//   }

//   switch (typeof data){
//     case 'string':
//       return data
//     case 'number':
//     case 'symbol':
//     case 'bigint':
//     case 'boolean':
//     case 'function':
//       return data.toString()
//     case 'object':
//       return JSON.stringify(data)
//     default:
//       return undefined
//   }
// }

// toString(2)
// toString(true)
// toString([1,2,3])
// toString({t:'t'})

//? 4 використання в типах


// function getSplitHalf<T>(data: Array<T>): Array<T>{
//   const l = data.length / 2
//   return data.splice(0,1)
// }

//! fun
// const split: <T>(data: Array<T>) => Array<T> = getSplitHalf

//! interf

// interface ILogLine<T>{
//   timeStamp: Date,
//   data: T
// }

// const logLine: ILogLine<{a: string}> = {
//   timeStamp: new Date(),
//   data: {a: 'test'}
// }
// const logLine1: ILogLine<1>
// const logLine2: ILogLine<'asbs'>


//! type

//  type LogLineType<T> = {
//   timeStamp: Date,
//   data: T
//  }


//? 5 обмеження джейнеріків

class Vehicle{
  run: number
}

// interface Vehicle{
//   run: number
// }

// function kmToMiles<T>(vehicle: T): T{
//   vehicle.run = vehicle.run / 0.62
//   return vehicle
// }

////////////////////////////////////

// function kmToMiles<T extends Vehicle>(vehicle: T): T{
//   vehicle.run = vehicle.run / 0.62
//   return vehicle
// }

// class LCV extends Vehicle{
//   capacity: number
// }

// interface LCV extends Vehicle{
//   capacity: number
// }

// kmToMiles(new Vehicle())
// kmToMiles({a: 1})
// kmToMiles({run: 1})
// kmToMiles(new LCV())

//! примітивні типи

// function logId<T extends string | number>(id: T): T{
//   return id
// }

//! декілька джейнеріків

// function logId<T extends string | number, Y>(id: T, additionlDate: Y): {id: T, data: Y}{
//   return {id: id, data: additionlDate}
// }


//? 6 практики

// const data = [
//   {id: 1, name: 'Ben'},
//   {id: 2, name: 'DEn'},
//   {id: 3, name: 'Paul'},
// ]

// interface ID {
//   id: number
// }

// function sort <T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[]{
//   return data.sort((a,b) => {
//     switch (type){
//       case "asc":
//         return a.id - b.id
//       case "desc":
//         return b.id - a.id
//     }
//   })
// }

// sort(data, 'desc')

//? 7 class

// class Resp<D, E>{
//   data: D
//   error: E
  
//   constructor(data: D, error: E){
//     this.data = data
//     this.error = error
//   }
// }


// new Resp<string, number>('data', 234)

//! наслідуванням

// class HTTPResp<F> extends Resp<string, number>{
//   code: F
// }

/////////////////////////////////////////////////////////

// function test<T,U>(array: (T | U)[]): (T | K)[]

/////////////////////////////////////////////////////////

//! keyof

// interface User{
//   id: number,
//   name: string,
//   email: string
// }

// type UserKeys = keyof User

/////////////////////////////////////////////////////////

// function test<T,U, K extends keyof T>(array: (T | U)[]): (T | K)[]

/////////////////////////////////////////////////////////
