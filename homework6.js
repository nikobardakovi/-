// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი



// function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// Promise.resolve().then(() => block())
// console.log("two")









// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

// let promise1 = new Promise((resolve,reject) =>
// {
//     resolve("წარმატებული")


// })


// let promise2 = new Promise((resolve,reject) =>
// {
//     reject("წარუმატებელი")
// })


// promise1.then((data) => {
//     console.log(data);
// }).catch((error) =>{
//     console.log(error,"error");
// })


// promise2.then((data) => {
//     console.log(data);
// }).catch((error) =>{
//     console.log(error,"error");
// })


// Promise.allSettled([promise1,promise2])
//     .then((data) => {
//         console.log(data);
//     })


// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული


// let promise1 = new Promise((resolve,reject) =>{
//     resolve("promise1 წარმატებულია")
// })

// let promise2 = new Promise((resolve,reject) =>{
//     reject("promise2 error")
// })

// let promise3 = new Promise((resolve,reject) => {
//     reject("promise3 error")
// })

// let promise4 = new Promise((resolve,reject) => {
//     resolve("promise4 წარმატებულია")
// })


// Promise.any([promise1,promise2,promise3,promise4])
//     .then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     })

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
// let promise1 = new Promise((resolve,reject) =>{
//     resolve("promise1 წარმატებულია")
// })

// let promise2 = new Promise((resolve,reject) =>{
//     reject("promise2 error")
// })

// let promise3 = new Promise((resolve,reject) => {
//     reject("promise3 error")
// })

// let promise4 = new Promise((resolve,reject) => {
//     resolve("promise4 წარმატებულია")
// })


// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then((data) => {
//     let result = data.reduce((tot, curr) => {

//       if (curr.status === "fulfilled") {
//         tot.carmatebuli.push(curr);
//       } else {
//         tot.carumatebeli.push(curr);
//       }

//       return tot;

//     }, {
//       carmatebuli: [],
//       carumatebeli: []
//     });

//     console.log(result);
//   });
// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
// let promise1 = new Promise((resolve,reject) =>{
//     resolve("promise1 წარმატებულია")
// })

// let promise2 = new Promise((resolve,reject) =>{
//     reject("promise2 error")
// })

// let promise3 = new Promise((resolve,reject) => {
//     reject("promise3 error")
// })

// let promise4 = new Promise((resolve,reject) => {
//     resolve("promise4 წარმატებულია")
// })

// let promise5 = new Promise((res,rej) => {
//     rej("promise5 error")
// })

// Promise.allSettled([promise1,promise2,promise3,promise4,promise5])
//     .then((data) => {
//         let result = data.filter((el) => el.status === 'rejected')
//         console.log(result);
//     })



// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად


// function fetchUsers(API){
//     return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
//     .then((data) =>{
//         return data[0]
//     })
    
    
// }

// function fetchPosts(API){
//     return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
//     .then((data) => {
//         return data[0]
//     })
    
    
// }


// Promise.all([fetchUsers(),fetchPosts()]).then((res) => console.log(res))