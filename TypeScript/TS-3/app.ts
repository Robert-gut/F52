//!1 void

function logId(id: string):void{
  console.log(id);
}

const a = logId('qqwer')

function multiply(a: number, b?: number){
  if(!b){
    return a * a
  }
}

type voidFunc = () => void

const f1: voidFunc = () => {}

const f2: voidFunc = () => {return 'a'}

const q = f2()

//! 2 Unknown 

let inputt: unknown

inputt = 3 
inputt = ['dev', 'devops'] 
inputt = 'dev' 


const res:string = inputt

// const ress:any = inputt

// 1 case

function run(i:unknown){
  if(typeof i === 'number'){
    i++
  }else{
    i
  }
}

run(inputt)

//  2 case

async function getData() {
  try {
    await fetch('')
  } catch (err) {
    // console.log(err.message);
    if(err instanceof Error){
      console.log(err.message);
    } else {
      console.log(err);
    }
  }
}

async function getDateForce() {
  try {
    await fetch('')
  } catch (err) {
    const e = err as Error // костиль
    console.log(e.message);
  }
}


type u1 = unknown | number

type i1 = unknown & string

//! 3 never

// 1 case

function genereateError(message:string):never {
  throw new Error(message)
}

genereateError('err')

// const a = 1
// const b = 2
// a + b


// 2 case
function dumError():never {
  while(true){}
}

// 3 case
function rec():never {
  return rec()
}

//! CASE

type paymentAction = 'refund'|'checkout'|'reject'

function processAction(action:paymentAction){
  switch (action) {
    case 'refund':
      console.log('refund');
      break;
    case 'checkout':
      console.log('checkout');
      break;
    case 'reject':
      console.log('reject');
      break;
    default:
      const _: never = action
  }
}

function isStr(x:string|number):boolean{
  if(typeof x === 'string'){
    return true
  } else if (typeof x === 'number'){
    return false
  }

  genereateError('message')
}


//! NULL

const n: null = null
const n1: any = null
const n2: number = null
const n3: string = null

interface IUser{
  name: string
}

function getUser(){
  if(Math.random() > 0.5){
    return null
  } else {
    return{
      name: 'Riki'
    } as IUser
  }
}

const user1 = getUser()
// const person = user1.name

if(user1){
  const person = user1.name
}

//! 4 перетворення типів

let aa:number = 5
let b:string = aa.toString()

let c:string = 'test'
let d:number = parseInt(c)

interface IUser {
  name: string,
  email: string,
  login: string
}

const user4 = <IUser>{
  name: 'string',
  email: 'string',
  login: 'string'
} as IUser

interface IAdmin{
  name: string,
  role: string
}

const admin: IAdmin = {
  ...user4,
  role: '1'
}

function userToAdmin(user: IUser): IAdmin{
  return{
    name: user.name,
    role: '1'
  }
}

//! 5 type Guard

//? 1

function logId(id: string | number){
  if(isString(id)){
    console.log(id);
  } else if(typeof id === 'number'){
    console.log(id);
  }
  id
}

function isString(x: string | number): x is string{
   return typeof x === 'string'
}


//?2

interface IUser1 {
  name: string,
  email: string,
  login: string
}

const user5 = {
  name: 'string',
  email: 'string',
  login: 'string'
} as IUser


interface IAdmin{
  name: string,
  role: string
}

function isAdmin(user: IUser | IAdmin): user is IAdmin{
  return 'role' in user
}

function setRoleZero(user: IAdmin | IUser){
  if(isAdmin(user)){
    user.role
  } else{
    user
  }
}