// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// function timer(sec){
//     console.log(sec);

//     if(sec > 0 ){
//         setTimeout(() => {
//             timer(sec-1)
            
//         }, 1000);
//     }
// }


// timer(10)





// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// function guessNumber(num) {
//     let randomNum = Math.floor(Math.random() *  10) + 1

//     console.log(randomNum);

//     if (randomNum !== num) {
//         setTimeout(() => {
//             guessNumber(num)
//         }, 1000);
//     }else
//     {
//         console.log("დაემთხვა");
//     }



// }

// guessNumber(5)


// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// function num(n,callback){

//     if (n > 27) {
//         callback(n)

//     }else
//     {
//         console.log(`${n} ნაკლებია 27-ზე`);
//     }

// }

// function callbackFN(n){
    
//     console.log(`${n} მეტია 27-ზე `);
// }


// num(5,callbackFN)







// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
// async function getAPI(API){
//     let res = await fetch(API)
//     let data = await res.json()
//     let users = data.slice(0,4)
//     console.log(users);
// }

// getAPI("https://jsonplaceholder.typicode.com/users")


// function getAPI(API){
//     fetch(API).then((res) => res.json()).then((data) => console.log(data)).catch((error) => {console.log(error,"error");})
    
// }


// getAPI("https://jsonplaceholder.typicode.com/users")





// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20


// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];


// let result = people.reduce((tot,curr) => 
// {

//     if (curr.age > 20){
//         tot.uprosi.push(curr)
//     }else
//     {
//         tot.umcrosi.push(curr)
//     }

//     return tot



// } ,{uprosi:[],umcrosi :[]})


// console.log(result.uprosi);
// console.log(result.umcrosi);







// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
// function getNum(a,b,callback){
//     if(a > b){
//         callback(a,b)
        
//     }else
//     {
//         console.log(`${a} ნაკლებია ან ტოლია ${b}-ზე`);
//     }
// }

// function callbackFN(a,b) {
//     console.log(`${a} მეტია ${b}-ზე`);
// }


// getNum(2,3,callbackFN)





// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 }
// ];


// let groupedProducts = products.reduce((tot,curr) =>
//     {
//         if (curr.price > 20){
//             tot.dzviri.push(curr)
//         }else
//         {
//             tot.iapi.push(curr)
//         }

//         return tot



//     },{iapi:[],dzviri:[]})

// console.log(groupedProducts);