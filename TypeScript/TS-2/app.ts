//! типи 

// const a = 1
// const b = -10
// const c = 3.14
// const d = 10_000_000

// const a = "test"
// const b = 'test'
// const c = `test`

// const a = true
// const b = false

// const c: number = a + b

//! fun and arr fun, type "any"

// function getFullName(firstName: string, lastName: string):string{
//   if (typeof firstName !== 'string') {
//     throw new Error('!!!!!!!!!!!')
//   }
//   return `${firstName} ${lastName}`
// }

// const getFullNameArrow = (firstName: string, lastName: string):string => {
//   if (typeof firstName !== 'string') {
//     throw new Error('!!!!!!!!!!!')
//   }
//   return `${firstName} ${lastName}`
// }
// getFullName('test', 'test')
// getFullName(1, true)\

//! any
// const getFullNameArrow = (firstName: any, lastName: any):any => {
//   if (typeof firstName !== 'string') {
//     throw new Error('!!!!!!!!!!!')
//   }
//   return `${firstName} ${lastName}`
// }

// getFullNameArrow('test', 'test')
// getFullNameArrow(1, true)
// getFullNameArrow({}, [true])
// getFullNameArrow({}, undefined)


//! обєкти

// function getFullName(userEntity: {firstName: string, lastName: string}):string{
//   return `${userEntity.firstName} ${userEntity.lastName}`
// }

const user = {
  firstName: 'test',
  lastName: 'test',
  age: 25,
  skills: {
    dev: true,
    devops: false
  }
}

// getFullName(user)

//! Array

// const skills = ['dev', 'devops', 1]

// const skills: string[] = ['dev', 'devops']

// const skills: any[] = ['dev', 'devops', 1, true]

// for (const skill of skills) {
//   console.log(skill.toLowerCase());
// }

// const res = skills
// .filter((s: string) => s !== 'devops')
// .map(s => s + '! ')
// .reduce((a,b)=> a + b)



//! typles(кортеджи)

// const skills: [string, string, number] = ['dev', 'devops', 1]

// const id = skills[2]
// const skillsName: number = skills[1]
// const q = skills[5]

// skills.push('test')

// const [id, skill] = skills

// const arr: [number, string, ...boolean[]] = [1, 'dev', true, false, true]

//! readonly

// let a: number = 1
// a = 2
// a = 3

// const b: number = 1
// b

// const skills: readonly[number, string] = [1, 'dev']
// skills[0] = 123
// skills[0]

////////////////////////////////////////
// const skills: Array<string> = ['devops', 'dev']
// const skills: ReadonlyArray<string> = ['devops', 'dev']
////////////////////////////////////////

//! enum

const res = {
  message: 'Платіж успішний',
  // statusCode: 1,
  statusCode: 'success',
}

// const SUCCESS = 'success'

// if(res.statusCode === SUCCESS)

// enum statusCode {
//   SUCCESS = 1,
//   IN_PROGRESS = 2,
//   FAILED = 3
// }

// enum statusCode {
//   SUCCESS = 1,
//   IN_PROGRESS = 'p',
//   FAILED = 'f'
// }

enum StatusCode {
  SUCCESS = 'success',
  IN_PROGRESS = 'progress',
  FAILED = 'failed'
}

// if(res.statusCode === StatusCode.SUCCESS)
// if(res.statusCode === StatusCode.FAILED)
// if(res.statusCode === StatusCode.IN_PROGRESS)

// function action(status: StatusCode){
//   status
// }
// action('test')
// action('success')
// action(1)

// action(StatusCode.IN_PROGRESS)
// action(StatusCode.FAILED)
// action(StatusCode.SUCCESS)


// function compute(){
//   return 3
// }

// enum Roles {
//   ADMIN = 1,
//   USER = ADMIN * 2,
//   DEV = compute()
// }

///

//? ПРОДВИНУТІ ТИПИ

//! 1 UNION 

// const arr = [1, 'test', true]

// function logId(id: string | number):void{
//   console.log(id);
// }

// logId(1)
// logId('test')
// logId(true)//err
// logId({})//err
// logId([])//err

//! Звуження типів

// function logId(id: string | number | boolean):void{
//   // console.log(id.toLowerCase()); 
//   if(typeof id === 'string'){
//     id.toLowerCase()
//   } else if(typeof id === 'number'){
//     console.log(id);
//   }else{
//     id
//   }
// }


//2

function logError(err: string | string[]):void{
   if(Array.isArray(err)){
    err.push()
   } else {
    err.toLowerCase()
   }
}

//3 

// function logObject(obj: {a: number} | {b: number}):void {
//    if('a' in obj){
//     obj.a
//    } else{
//     obj.b
//    }
// }

//4 

// function logIds(a: string | number, b: string | boolean):void{
//   if(a === b){
//     console.log(a,b);
//   } else {
//     console.log(a,b);
//   }
// }