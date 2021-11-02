 console.log("Merhaba Kodlama.io")

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
console.log(konutKredileri) 


