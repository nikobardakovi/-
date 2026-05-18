// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]

// let arr1 = [1, 2, 3]
// let numsArr1 = arr1.map((el) => el * 3)
// console.log(numsArr1)


// 2) გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// let numsArr2 = arr2.filter((el) => el % 3 === 0)
// console.log(numsArr2)


// 3) დააბრუნე ყველა დადებითი რიცხვის ჯამი

// let arr3 = [-1, 2, 3, 4, -5, 6, 7, -8, 9, -10, 11, 12]
// let numsArr3 = arr3.reduce((acc, el) => (el > 0 ? acc + el : acc), 0)
// console.log(numsArr3)


// 4) მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო

// let namesArr = ["giorgi", "nika", "mariami"]
// let namesArr4 = namesArr.map((el) => el.slice(0, -1))
// console.log(namesArr4)


// 5) გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე

// let arr5 = [1, 2, 3, 4, 5, 6]
// let numsArr5 = arr5.map((el) => el * 2).filter((el) => el % 3 === 0)
// console.log(numsArr5)


// 6) დაალაგე რიცხვები ზრდადობით

// let numsArr6 = [1, -1, -2, -10, 111, 3, 2, 5]
// numsArr6.sort((a, b) => a - b)
// console.log(numsArr6)


// 7) გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.

// let arr7 = [1, 2, 3, 4, 5, 6, 7]
// let numsArr7 = arr7.map((el) => el * 2).filter((el) => el > 5)
// console.log(numsArr7)


// 8) let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unique = [1,2,3]

// let arr8 = [1, 1, 1, 1, 2, 2, 3, 3, 3]
// let unique = arr8.filter((el, index) => arr8.indexOf(el) === index)
// console.log(unique)


// 9) დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამი

// let arr9 = [-1, 20, 90, 4, 5, 111]
// let sorted9 = [...arr9].sort((a, b) => a - b)
// let sumTwoSmallest = sorted9[0] + sorted9[1]
// console.log(sumTwoSmallest)
