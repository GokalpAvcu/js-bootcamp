import User from "../models/user.js"
import  UserService  from "../services/userService.js"

console.log("User component yüklendi")

let userService = new UserService ()

let user1 = new User(1,"Gökalp","Avcu","Antalya");
userService.add(user1)




userService.getById(1)
userService.list()


let customer = {id:1, firstName:"Gökalp"}

//prototyping
customer.lastName = "Avcu"

console.log(customer.lastName)