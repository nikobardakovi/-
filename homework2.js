// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
// let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]
// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
// 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
// "orange"-ის წინ დაამატე "mango"
// ბოლოს დაბეჭდე ახალი მასივი.
// splice-მ არ დაგაბნიოთ splice(საიდან დაიწოს,რამდენი წაშალოს,რითიჩაანაცვლოს)

















// 1)

// let arr = []


// for (let i =5; i<=15; i++) {

//     arr.push(i)
// }

// console.log(arr)


//2)

// let arr = [1,2,3,4,5]

// for(i = arr.length-1;i>=0;i--){
//     console.log(arr1[i])
// }


// let arr = [1,2,3,4,5]

// console.log(arr.reverse())


//3) 

// let arr = [100, 2, 3, 9]

// let min = arr[0]

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i]
//   }
// }

// console.log(min)


//4)

// let arr =[1,2,3,4,5,6,7]

// slicedArr = arr.slice(2,5)
// console.log(slicedArr)


//5)

// let arr1 = [1, 2]
// let arr2 = [3, 4]

// console.log(arr1.concat(arr2))

//6)

// let arr = [1,2,3,4,5,6,6,7,7]



//7) 

// let arr = [1,2,3,4,5,6,7]

// let evenArr = []
// let oddArr = []

// for(let i =0;i<arr.length;i++){
//     (arr[i] % 2 ===0 ? evenArr.push(arr[i]) : oddArr.push(arr[i]))
// }

// console.log(evenArr)
// console.log(oddArr)


//8)

// let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]

// let PositiveNums = []

// let NegativeNums = []

// for(let i=0;i<arr.length;i++){
//     arr[i]>0 ? PositiveNums.push(arr[i]) : NegativeNums.push(arr[i])

// }

// console.log(PositiveNums.length)

// let sum = 0

// for (let i=0;i<NegativeNums.length;i++){
//     sum = sum + NegativeNums[i]
// }


// console.log(sum)




//9)


// let arr = [1, -2, 3, -4]
// let inverted = []

// for (let i = 0; i < arr.length; i++) {
//   inverted.push(-arr[i])
// }

// console.log(inverted)


//10)

// let arr = [1,[2,[3]],[4]]

// console.log(arr.flat(Infinity))


//11)
// let fruits = ["apple", "banana", "orange", "kiwi"]
// fruits.splice(1,1)
// fruits.splice(2,0,"mango")


// console.log(fruits)









