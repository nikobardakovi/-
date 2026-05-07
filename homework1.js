// -პრაქტიკა-
// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."
// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"
// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად
// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
// თუ იყოფა 5-ზე დააბრუნე - "Bar"
// თუ იყოფა ორივეზე დააბრუნე - "FooBar"
// თუ არა დააბრუნე - უბრალოდ რიცხვი
// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.


// -თეორია-
// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
// 2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
// 3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
// 4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
// 5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)




//1)

let fullName = "Lika Mamaladze";

console.log(fullName.slice(0, 1) + "." + fullName.slice(fullName.indexOf(" ") + 1, fullName.indexOf(" ") + 2) + ".");


//2)

let email = " EXAMPLE@MAIL.COM ";
console.log(email.trim().toLowerCase());
console.log(email.includes("@"));


//3)
let str = "luka";
console.log(str.slice(-1).toUpperCase());


//4)
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Foo");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
    } else {
        console.log(i);
    }
}

//5)
let text = "JS is stupid but sometimes cool";
console.log(text.replace("stupid", "s****d"));  



//-თეორია-
//1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
//პასუხი: ცვლადის გამოცხადების 3 გზა გვაქვს: var, let, const.

//2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
//პასუხი: 8 ტიპი. 7 პრიმიტივი: string, number, bigint, boolean, undefined, symbol, null და 1 არაპრიმიტივი: object.

//3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
//პასუხი: split() — მაგალითად "a,b,c".split(",") ან "luka".split("").

//4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
//პასუხი: კი, string პრიმიტიული ტიპია.

//5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)
//პასუხი: length (property), slice(), indexOf(), includes(), trim(), toLowerCase(), toUpperCase(), replace().




