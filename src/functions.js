function addToCart(productName) {
    console.log("Sepete Eklendi : " + productName)
}
addToCart()
addToCart("Yumurta")
addToCart("Karpuz")

 let sayHello = ()=>{   // sayHello adında bir değişken tanımladım
     console.log("Hello World")
 }
 sayHello()

 let sayHello2 = function () {
     console.log("Hello World 2")
 }
 sayHello2();

 function addToCart2(productName, quantity,unitPrice) {
     
 }

 addToCart2("Elma",5,10)
 addToCart2("Armut",2,20)
 addToCart2("Limon",3,15)

 let product1 = {productName:"Elma", unitPrice:10, quantity:5}

 function addToCart3(product) {
       console.log("Ürün : "+product.productName)
       console.log("Adet : "+product.quantity)
       console.log("Fiyat : "+product.unitPrice)

 }

 addToCart3(product1)

 let product2 = {productName:"Elma", unitPrice:10, quantity:5}
 let product3 = {productName:"Elma", unitPrice:10, quantity:5}
 product2 = product3
 product2.productName = "KARPUZ"
 console.log(product3.productName)

 // degiskenler verinin turune gore ikiye ayrilir, eger veri sayisalsa deger tiptir. objeler ise referans tiptir.

 