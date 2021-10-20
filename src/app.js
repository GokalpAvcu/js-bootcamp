/* console.log("Merhaba Kodlama.io")

// JS type safe değildir
let dolarDun = 9.20
let dolarBugun = 9.30 //değişkenler tanımlandıkları kapsamda geçerlidir.

{
    let dolarDun = 9.10 //KABUL OLMAZ eğer bunu var ile tanımlasaydık bu geçerli olacaktı (scope) olayı
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 // hata bunu yapamayız

console.log(euroDun)

// array (diziler)
// camelCasing (değişken tanımlama ilk harfi küçük diğeri büyük)
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i<3; i++){ // 0'dan başla 3'den küçük olduğu sürece devam et
     console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("<ul>") 





//react
console.log(konutKredileri) */

// -------------------------------------------

//var,let,const

let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}
//console.log(student);


function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : " + puan)
    
}
//save(student,100);

let students = ["Engin Demiroğ","Halit Kalaycı","Gökalp Avcu"]

//console.log(students)

let students2 = [student,{id:2, name:"Halit"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest
let showProducts = function (id,...products){ 
console.log(id)
console.log(products[0])
  
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Çilek","Kiraz"])

//spread(...)
let points = [1,2,3,4,50,60,34,32]
console.log(...points)
console.log(Math.max(...points)) // enbüyüğünü verir
console.log(..."ABC","D",..."EFG","H")

//Destructuring (elimizdeki array'in değerlerini değişkenlere atama yöntemi)
let populations = [10000,20000,30000]
let [Almanya,Turkiye,Çin] = populations
console.log(Almanya)
console.log(Turkiye)
console.log(Çin)
