//! Class

//? 1 сторення класів

// class User {
//   name: string

//   constructor(name: string){
//     this.name = name
//   }
// }

// const user = new User('Roman')
// user.name = 'Ben'


// class Admin {
//   name!: string
// }

// const admin = new Admin()
// admin.name = 'admin'

//? 2 конструктор оверлоуд, перезагрузку

// class User {
//   name!: string
//   age!: number

//   constructor()
//   constructor(name: string)
//   constructor(age: number)
//   constructor(name: string, age: number)
//   constructor(ageOrName?: string | number){
//      if (typeof ageOrName === 'string') {
//       this.name = ageOrName
//      } else if(typeof ageOrName === 'number'){
//       this.age = ageOrName
//      }
//   }
// }

// const user1 = new User('user')
// const user2 = new User()
// const user3 = new User(33)
// const user4 = new User('user', 33)


//? 3 методи

// enum PaymentStatus{
//   Holded,
//   Processed,
//   Reversed
// }

// class Payment{
//   id: number
//   status: PaymentStatus
//   createAt: Date
//   updateAt!: Date

//   constructor(id:number){
//     this.id = id
//     this.createAt = new Date()
//     this.status = PaymentStatus.Holded
//   }

//   getPaymentLifeTime():number{
//     return new Date().getTime() - this.createAt.getTime()
//   }

  // unholdPayment():void{
  //   if(this.status === PaymentStatus.Processed){
  //     throw new Error('Error')
  //   }
  //   this.status = PaymentStatus.Processed
  //   this.updateAt = new Date()
  // }
// }

// const payment = new Payment(1)
// payment.unholdPayment()
// const time = payment.getPaymentLifeTime()

//? 4 перезагрузку ментодів

// class User {
//   skills!: string[]

//   addSkill(skill: string):void
//   addSkill(skill: string[]):void
//   addSkill(skillOrSkills: string | string[]){
//     if(typeof skillOrSkills ===  'string'){
//       this.skills.push(skillOrSkills)
//     }else {
//       this.skills.concat(skillOrSkills)
//     }
//   }
// }

// new User().addSkill('dev')
// new User().addSkill(['dev', 'devops'])


//? 5 гетенри і сетери

// class User {
//   _login!: string

//   set login(login: string){
//     this._login = 'user-' + login
//   }

//   get login():string | undefined{
//     return this._login.split('-')[1]
//   }
// }

// const user = new User()

// user.login = 'superAdmin'// => set

// user.login //=> get


//?6 Implements extends

// type PaymentStatus = 'new' | 'paid'

// class Payment{
//   id!: number
//   status!: PaymentStatus

//   constructor(id: number){
//     this.id = id
//   }

//   pay():void{
//     this.status = 'paid'
//   }
// }

// class PersistedPayment extends Payment{
//   databaseId: number
//   paidAt: Date
//   constructor(){
//     const id = Math.random()
//     super(id)
//   }

//   save(){
//     //save in database
//   }

//   override pay(date?: Date): void {
//       super.pay()
//       if(date){
//         this.paidAt = date
//       }
//   }
// }

// new PersistedPayment().

//?7 видимість властивостей і методів

// class Vehicle{
//   public make: string //публічна
//   private damages: string[]// приватна властивість
//   private _model: string
//   protected run: number// доступно наслідникам
//   #price: number// приватна властивість
//   readonly brand: string

//   set model(m: string){
//     this._model = m
//   }

//   get model(){
//     return this._model
//   }

//   addDamage(damage: string):void{
//     this.damages.push(damage)
//   }

// }

// class EuroTruck extends Vehicle{
//   setDamage(){
//     this.
//   }
// }

//? 8 static

// class UserService{
//   static db: number

//   static getUser(id: string){
//     // this.db = 'test'
//     return UserService.db.findById(id)
//   }
//   create(){
//     UserService.db
//   }
// }


// UserService.getUser()
// UserService.db
// UserService.create()

// new UserService().create()

