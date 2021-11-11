import User from "../models/user.js"
import  UserService  from "../services/userService.js"

console.log("User component yüklendi")

let userService = new UserService ()

let user1 = new User(1,"Gökalp","Avcu","Antalya");
let user2 = new User(2,"Uygar","Süslü","Muğla");
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




userService.getById(1)
userService.list()


let customer = {id:1, firstName:"Gökalp"}

//prototyping
customer.lastName = "Avcu"

console.log(customer.lastName)