
// Строкі: 'Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'

//  1 Вивести числа від 27 до 48

for (let i = 27 ; i < 49; i++ ) {
  console.log(i)
};

// 2 Вивести числа від 0 до твого віку

let age = 21;
for (let x = 0; x <= age; x++) {
  console.log(x)
};

// or 

let a = 0;
while(a <= 21) {
  console.log(a)
  a++
};

// 3 Вивести числа від 4 до 23

let b = 4;
for (; b < 24;) {
  console.log(b++)
};

// 4 Вивести числа від 23 до 27 потів від 28 до 31

let y = 23;
for (; y < 32; y++ ) {
  if ( y == 27) continue;
  console.log (y);
};

// 5 Вивести числа, які ділять на 10 націло (кратні десяти) від 19 до 142

let num = 19;
for ( ; num < 143; num++ ){
  if ( num % 10 == 0)
  console.log(num);
};

// 6 Вивести не парні числа від 10 до 37

let n = 10;
for (; n < 37; n++) {
   if ( n % 2 == 1)
   console.log(n);
};

// 7 Вивести довжину строки

let user = "Dasha - zopa";
console.log(user.length);

// 8 Вивести кожен символ строки із нового рядка

let customer = "Dasha - zopa";
for (let letter of customer){
    console.log(letter);
};

// 9 Вивести кожен символ строки із нового рядка, до того часу, поки символ не буде 'a' (Якщо слово - 'Vlad', то виведеться V, l)

let userName = "Vlad - zopa";
for (let notA of userName) {
  if (notA == "a") {
    break;
  } else {
    console.log(notA);
  }
};

// 10 Вивести кожен символ строки, крім 'a', з нового рядка (Якщо слово - 'Vlad', то виведеться V, l, d)

let userTwo = "Vlad - zopa";
for (let withA of userTwo) {
  if (withA == "a") {
    continue;
  } else {
    console.log(withA);
  }
};

// 11 Аналогічно 10, тільки всі, крім 'a', 'b', 'c', 'd', 'e', 'f,' та 'A', 'B', 'C', 'D', 'E', 'F'

let addLetter = "adsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879";
for (let z of addLetter) {
  if (z == 'a' || z == 'b' || z == 'c' || z == 'd' || z == 'e'|| z == 'f'|| z == 'A' || z == 'B' || z == 'C' || z == 'D'|| z == 'E'|| z == 'F' ) {
    continue;
  } else {
    console.log(z);
  }
};

// 12 Вивести кожен символ строки із нового рядка, але, якщо цей символ 'a', 'b', 'c', 'd', 'f', то вивести його в верхньому реєстрі

let addUpper = "Vlad - zopa";
for (let key of addUpper) {
  if (key == 'a' || key == 'b' || key == 'c' || key == 'd' || key == 'f' ) {
    console.log(key.toUpperCase());
   } else {
    console.log(key);
   }
};


// ASK.
// 1. Чи потрібно було робити перебір символів зі строкb за допоиогою for...of  чи викуористовувати While or for?
// 2. Чи є інші варіанти виводу символів зі строки? Якщо так, то скажи і я ще подумаю над можливими варіантами.
// 3. Задача 11. ЧИ вірно запис через ||? Чи код так вважається занадто довгим? 
// 4. Чи можна ще таких побільше задач, хочу ще порозв'язувати.
// 5. Якщо є помилки, то краще скажи мені, будь ласка, що є помилки і я їх сама пошукаю і виправлю. Якщо не справлюсь, тоді запитаю.


