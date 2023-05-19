/* 
💻 Day 3: Exercises 

Exercises: Level 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. [EN]

1. firstName, lastName, country, city, age, isMarried ve year değişkenlerini tanımla ve değer atayarak farklı veri tiplerini typeof operatörüyle kontrol et. [TR] */

let firstName = "Zeynep";
let lastName = "Yilmaz";
let country = "Turkey";
let city = "Bolu";
let age = 22;
let isMarried = false;
let year = 2023;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number


/* 

2. 
Check if type of '10' is equal to 10 [EN]
'10' ifadesinin veri türünün 10 ile eşit olup olmadığını kontrol et. [TR] 

*/

console.log(typeof '10' === typeof 10); // false


/* 

3.
Check if parseInt('9.8') is equal to 10 [EN]
parseInt('9.8') ifadesinin 10 ile eşit olup olmadığını kontrol et. [TR] 

*/

console.log(parseInt('9.8') === 10); // true


/* 

4.
Boolean value is either true or false. [EN]

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.

Truthy values:
1. `true` - This is the literal boolean value `true`.
2. `5 > 3` - This is a comparison statement that evaluates to `true`.
3. `!!"Hello"` - The double negation operator `!!` converts the non-empty string `"Hello"` into its truthy boolean equivalent.

Falsy values:
1. `false` - This is the literal boolean value `false`.
2. `0` - This is the number zero, which is considered falsy.
3. `""` - This is an empty string, which is also considered falsy.

Boolean values in JavaScript are either `true` or `false`. These truthy and falsy values are commonly used in conditional statements, loops, and logical operations.

Boole değeri doğru veya yanlıştır.[TR]

Doğru değer sağlayan üç JavaScript ifadesi yazın.
Hatalı değer sağlayan üç JavaScript ifadesi yazın. 

Truthy değerler:
1. `true` - Bu doğrudan boolean değeri `true`'dur.
2. `5 > 3` - Bu, `true`'ya değerlendirilen bir karşılaştırma ifadesidir.
3. `!!"Merhaba"` - Çift olumsuzlama operatörü `!!`, boş olmayan metin `"Merhaba"`'yı truthy boolean karşılığına dönüştürür.


Falsy değerler:
1. `false` - Bu doğrudan boolean değeri `false`'dır.
2. `0` - Bu, yanlış değer olarak kabul edilen sıfır sayısıdır.
3. `""` - Bu boş bir metindir ve yanlış değer olarak kabul edilir.

JavaScript'te boolean değerler ya `true` ya da `false` olabilir. Bu truthy ve falsy değerler genellikle koşullu ifadelerde, döngülerde ve mantıksal işlemlerde kullanılır.

*/ 


/* 5.
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log().[EN]
Aşağıdaki karşılaştırma ifadesinin sonucunu önce console.log() kullanmadan belirleyin. Sonucu belirledikten sonra console.log() kullanarak doğrulayın.[TR]

1- 4 > 3
2- 4 >= 3
3- 4 < 3
4- 4 <= 3
5- 4 == 4
6- 4 === 4
7- 4 != 4
8- 4 !== 4
9- 4 != '4'
10- 4 == '4'
11- 4 === '4'
12- Find the length of python and jargon and make a falsy comparison statement. */ 


1. `4 > 3` -> Result: `true`
2. `4 >= 3` -> Result: `true`
3. `4 < 3` -> Result: `false`
4. `4 <= 3` -> Result: `false`
5. `4 == 4` -> Result: `true`
6. `4 === 4` -> Result: `true`
7. `4 != 4` -> Result: `false`
8. `4 !== 4` -> Result: `false`
9. `4 != '4'` -> Result: `false`
10. `4 == '4'` -> Result: `true`
11. `4 === '4'` -> Result: `false`

//Now let's confirm these results using `console.log()`:

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false


/* 12. [EN]

To find the length of "python" and "jargon" and make a falsy comparison statement, you can use the `length` property of strings and compare them using a falsy operator such as `<`:


console.log("python".length < "jargon".length); // false

In this case, the length of "python" is not less than the length of "jargon", so the result is `false`


12. [TR]

"python" ve "jargon" kelimesinin uzunluklarını bulmak ve yanlış (falsy) bir karşılaştırma ifadesi oluşturmak için, dizelerin `length` özelliğini kullanabilir ve bunları yanlış bir operatör olan `<` ile karşılaştırabilirsiniz:

console.log("python".length < "jargon".length); // false

Bu durumda, "python" kelimesinin uzunluğu "jargon" kelimesinin uzunluğundan küçük olmadığı için sonuç `false` olarak çıkar.*/ 


/* 6. 
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log(). [EN]
Aşağıdaki ifadelerin sonuçlarını önce console.log() kullanmadan belirleyin. Sonuçları belirledikten sonra console.log() kullanarak doğrulayın. [TR] 

1. 4 > 3 && 10 < 12
2. 4 > 3 && 10 > 12
3. 4 > 3 || 10 < 12
4. 4 > 3 || 10 > 12
5. !(4 > 3)
6. !(4 < 3)
7. !(false)
8. !(4 > 3 && 10 < 12)
9. !(4 > 3 && 10 > 12)
10. !(4 === '4')
11. 'dragon'.includes('on') && 'python'.includes('on') */

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // true


/* 7.

Use the Date object to do the following activities 

[EN]
1. What is the year today? 
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.

[TR] 
Bugün hangi yıldayız? 
Bugünün ayı hangi numara olarak temsil ediliyor?
Bugün tarih kaç?
Bugün hangi gün, numara olarak kaçıncı gün?
Şu anda saat kaç?
Şu anda kaç dakika geçti?
1970 yılının Ocak 1'inden şu ana kadar kaç saniye geçti?

*/ 

let now = new Date();

1- let year = now.getFullYear();
2- let month = now.getMonth();
3- let date = now.getDate();
4- let day = now.getDay();
5- let hours = now.getHours();
6- let minutes = now.getMinutes();
7- let seconds = Math.floor(now.getTime() / 1000);


[EN]

console.log("Current year: " + year);
console.log("Current month (number): " + month);
console.log("Current date: " + date);
console.log("Current day (number): " + day);
console.log("Current hour: " + hours);
console.log("Current minute: " + minutes);
console.log("Seconds elapsed since January 1, 1970: " + seconds);


[TR]
console.log("Bugünün yılı: " + year);
console.log("Bugünün ayı (numara): " + month);
console.log("Bugünün tarihi: " + date);
console.log("Bugünün günü (numara): " + day);
console.log("Şu anki saat: " + hours);
console.log("Şu anki dakika: " + minutes);
console.log("1970 yılından şimdiye kadar geçen saniyeler: " + seconds);


/* Exercises: Level 2

/* 1.
[EN]
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle .(area = 0.5 x b x h).

[TR]
Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın. (alan = 0,5 x b x y). 

*/ 

[EN]

let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");

let area = 0.5 * base * height;

console.log("The area of the triangle is: " + area);


[TR]

let base = prompt("Üçgenin taban uzunluğunu girin:");
let height = prompt("Üçgenin yüksekliğini girin:");

let area = 0.5 * base * height;

console.log("Üçgenin alanı: " + area);

/* 2.

[EN]
Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c). */ 

let sideA = prompt("Enter side a of the triangle:");
let sideB = prompt("Enter side b of the triangle:");
let sideC = prompt("Enter side c of the triangle:");

let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

console.log("The perimeter of the triangle is: " + perimeter);

/* [TR] 
Kullanıcıdan üçgenin a tarafını, b tarafını ve c tarafını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c). */

let sideA = prompt("Üçgenin a kenarını girin:");
let sideB = prompt("Üçgenin b kenarını girin:");
let sideC = prompt("Üçgenin c kenarını girin:");

let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

console.log("Üçgenin çevresi: " + perimeter);

/* 3.

[EN]

Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) 

*/ 

let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");

let area = parseFloat(length) * parseFloat(width);
let perimeter=2*(parseFloat(length) + parseFloat(width));

console.log("Area of the rectangle: " + area);
console.log("The perimeter of the rectangle: " + perimeter);


/* [TR]

Uzunluğu ve genişliği prompt ile alınan dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik) ve çevresini hesaplayın (çevre = 2 x (uzunluk + genişlik)).

*/


let length = prompt("Dikdörtgenin uzunluğunu girin:");
let width = prompt("Dikdörtgenin genişliğini girin:");

let area = parseFloat(length) * parseFloat(width);
let perimeter = 2 * (parseFloat(length) + parseFloat(width));

console.log("Dikdörtgenin alanı: " + area);
console.log("Dikdörtgenin çevresi: " + perimeter);


/* 4.

[EN]

Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */ 

let radius = prompt("Enter the radius of the circle:");
let pi = 3.14;

let area = pi * radius * radius;
let circumference = 2 * pi * radius;

console.log("The area of the circle is: " + area);
console.log("The circumference of the circle is: " + circumference);


/* [TR]

Prompt kullanarak yarıçapı alın ve bir dairenin alanını hesaplayın (alan = pi x r x r) ve çevresini hesaplayın (çevre = 2 x pi x r), burada pi = 3.14. */


let yaricap = prompt("Dairenin yarıçapını girin:");
let pi = 3.14;

let alan = pi * yaricap * yaricap;
let cevre = 2 * pi * yaricap;

console.log("Dairenin alanı: " + alan);
console.log("Dairenin çevresi: " + cevre);


/* 5. 

[EN]

Calculate the slope, x-intercept and y-intercept of y = 2x -2.*/

let slope = 2; // The slope is the coefficient of x
let xIntercept = 2 / slope; // The x-intercept is found by setting y = 0 and solving for x (0 = 2x - 2)
let yIntercept = -2; // The y-intercept is the constant term

console.log("Slope: " + slope);
console.log("x-Intercept: " + xIntercept);
console.log("y-Intercept: " + yIntercept);


/* [TR] 

y = 2x - 2 denklemi için eğimi, x-kesişimini ve y-kesişimini hesaplayın. */

let eğim = 2; // Eğim, x'in katsayısıdır
let xKesişimi = 2 / eğim; // x-kesişimi, y'yi 0 olarak alıp x için çözerek bulunur (0 = 2x - 2)
let yKesişimi = -2; // y-kesişimi, sabit terimdir

console.log("Eğim: " + eğim);
console.log("x-Kesişimi: " + xKesişimi);
console.log("y-Kesişimi: " + yKesişimi);


/* 6.

[EN]

Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) */ 

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let slope = (y2 - y1) / (x2 - x1);

console.log("Slope: " + slope);

/* [TR]

Eğim, m = (y2 - y1) / (x2 - x1) formülü ile hesaplanır. (2, 2) noktası ile (6, 10) noktası arasındaki eğimi bulun. */

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let slope = (y2 - y1) / (x2 - x1);

console.log("Slope: " + slope);

/* 7. 

[EN] 
Compare the slope of above two questions. */

// Slope of first equation y = 2x - 2
let slope1 = 2;

// Slope of second equation calculated from two points
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);

// Comparing the slopes
if (slope1 === slope2) {
  console.log("The slopes are equal.");
} else if (slope1 > slope2) {
  console.log("The slope of the first equation is greater.");
} else {
  console.log("The slope of the second equation is greater.");
}


/* [TR]
Yukarıdaki iki sorunun eğimini karşılaştırın.*/


// İlk denklemin eğimi y = 2x - 2
let eğim1 = 2;

// İki nokta arasındaki ikinci denklemin eğimi
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let eğim2 = (y2 - y1) / (x2 - x1);

// Eğimleri karşılaştırma
if (eğim1 === eğim2) {
  console.log("Eğimler eşittir.");
} else if (eğim1 > eğim2) {
  console.log("İlk denklemin eğimi daha büyüktür.");
} else {
  console.log("İkinci denklemin eğimi daha büyüktür.");
}

/* 8. [EN] 
Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. */ 

for (let x = -10; x <= 10; x++) {
    let y = x ** 2 + 6 * x + 9;
    if (y === 0) {
      console.log("The value of x at which y is 0 is: " + x);
      break;
    }
  }


/* [TR]
y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve hangi x değerinde y'nin 0 olduğunu bulun. */

for (let x = -10; x <= 10; x++) {
    let y = x ** 2 + 6 * x + 9;
    if (y === 0) {
      console.log("y'nin 0 olduğu x değeri: " + x);
      break;
    }
  }
  

/* 9. 

Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person? [EN] */

let hours = prompt("Enter the number of hours worked:");
let ratePerHour = prompt("Enter the rate per hour:");

// Convert the input values to numbers
hours = parseFloat(hours);
ratePerHour = parseFloat(ratePerHour);

// Calculate the pay
let pay = hours * ratePerHour;

console.log("The person's pay is: " + pay);

/* [TR] Kullanıcıdan saat ve saat başına ücret girmesini isteyen bir komut dosyası yazın. Kişinin maaşını hesapla? */

let hours = prompt("Çalışılan saat sayısını girin:");
let ratePerHour = prompt("Saat başına ücreti girin:");

// Girilen değerleri sayıya dönüştür
hours = parseFloat(hours);
ratePerHour = parseFloat(ratePerHour);

// Ödeme miktarını hesapla
let pay = hours * ratePerHour;

console.log("Kişinin ödemesi: " + pay);


/* 10. 

[EN] If the length of your name is greater than 7 say, your name is long else say your name is short. */


let name = prompt("Enter your name:");

if (name.length > 7) {
  console.log("Your name is long.");
} else {
  console.log("Your name is short.");
}

/* [TR]
Adınızın uzunluğu 7'den büyükse, adınız uzun, aksi takdirde adınızın kısa olduğunu söyleyin.*/ 

let name = prompt("İsminizi girin:");

if (name.length > 7) {
  console.log("İsminiz uzun.");
} else {
  console.log("İsminiz kısa.");
}


/* 11. 

[EN] 

Compare your first name length and your family name length and you should get this output. 
*/ 

let firstName = "Zeynep";
let lastName = "Yilmaz";

if (firstName.length > lastName.length) {
  console.log("The length of your first name is greater than the length of your last name.");
} else if (firstName.length < lastName.length) {
  console.log("The length of your last name is greater than the length of your first name.");
} else {
  console.log("The length of your first name is equal to the length of your last name.");
}

/* [TR]
Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız. */ 

let firstName = "Zeynep";
let lastName = "Yilmaz" ;

if (firstName.length > lastName.length) {
  console.log("İlk adınızın uzunluğu soyadınızın uzunluğundan daha büyüktür.");
} else if (firstName.length < lastName.length) {
  console.log("Soyadınızın uzunluğu ilk adınızın uzunluğundan daha büyüktür.");
} else {
  console.log("İlk adınızın uzunluğu soyadınızın uzunluğuna eşittir.");
}

/* 12. 

[EN] Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
[TR] İki değişkeni Yaşım ve Yaşınız olarak bildirin ve onlara başlangıç değerleri, myAge ve yourAge atayın. */ 

let myAge = 22;
let yourAge = 25;

/* 13. 

[EN] Using prompt get the year the user was born and 
if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.*/

let currentYear = new Date().getFullYear(); // Get the current year

let birthYear = prompt("Enter the year you were born:"); // Prompt the user for their birth year

let age = currentYear - birthYear; // Calculate the user's age

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let remainingYears = 18 - age;
  console.log("You need to wait " + remainingYears + " more years to drive.");
}

/* [TR] "Prompt" kullanıcının doğduğu yılı alın ve kullanıcı 18 yaş ve üzerindeyse, 
kullanıcıya belirli bir süre beklemesini söylemezse kullanıcının araba kullanmasına izin verin.*/ 

let currentYear = new Date().getFullYear(); // Geçerli yılı al

let birthYear = prompt("Doğum yılınızı girin:"); // Kullanıcıdan doğum yılını al

let age = currentYear - birthYear; // Kullanıcının yaşını hesapla

if (age >= 18) {
  console.log("Sürüş için yeterli yaşa sahipsiniz.");
} else {
  let remainingYears = 18 - age;
  console.log("Sürüş için " + remainingYears + " yıl daha beklemeniz gerekiyor.");
}


/* 14. 

[EN]
Write a script that prompt the user to enter number of years. 
Calculate the number of seconds a person can live. Assume some one lives just hundred years. */ 

let years = prompt("Enter the number of years:"); // Prompt the user to enter the number of years

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let yearsInLifetime = 100;

let secondsInLifetime = years * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log("A person can live approximately " + secondsInLifetime + " seconds in " + years + " years, assuming they live just 100 years.");


/* [TR] 

Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. 
Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım*/ 

let years = prompt("Yıl sayısını girin:"); // Kullanıcıdan yıl sayısını girmesini iste

let dakikaBasinaSaniye = 60;
let saatteDakika = 60;
let gundeSaat = 24;
let yildaGun = 365;
let yasamSuresi = 100;

let yasamSuresiSaniye = years * yildaGun * gundeSaat * saatteDakika * dakikaBasinaSaniye;

console.log("Bir kişi, 100 yıl yaşam süresi varsayılarak, yaklaşık olarak " + years + " yılda " + yasamSuresiSaniye + " saniye yaşayabilir.");


/* 

15. 

[EN]
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */ 

let currentDate = new Date();

let currentDate = new Date();

let format1 = currentDate.toISOString().slice(0, 16).replace('T', ' ');
let format2 = currentDate.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
let format3 = currentDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', '');

console.log("Format 1: " + format1);
console.log("Format 2: " + format2);
console.log("Format 3: " + format3);


/* [TR]

Tarih saati nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun

YYYY-AA-GG SS: aa
GG-AA-YYYY SS: aa
GG/AA/YYYY SS: aa */ 

let currentDate = new Date();

let format1 = currentDate.toISOString().slice(0, 16).replace('T', ' ');
let format2 = currentDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', '');
let format3 = currentDate.toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace('.', '/');

console.log("Format 1: " + format1);
console.log("Format 2: " + format2);
console.log("Format 3: " + format3);


/* Exercises: Level 3

[EN] 

Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 

In this code, we use the padStart() method to ensure that the month, day, hour, and minute values are always two digits. 
The padStart() method fills the beginning of a string with a specified character.*/ 

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hour = String(currentDate.getHours()).padStart(2, '0');
const minute = String(currentDate.getMinutes()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(formattedDate);



/* [TR]

Alıştırmalar: Seviye 3

Tarih saati nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır 
(7 saat 07, 5 dakika 05 olmalıdır)
YYY-AA-GG SS: aa ör. 20120-01-02 07:05 

Bu kodda, padStart() metodunu kullanarak ay, gün, saat ve dakika değerlerinin her zaman iki basamaklı olmasını sağlıyoruz. */ 

padStart() metodu, belirli bir karakterle bir dizenin başını doldurur.

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let day = String(currentDate.getDate()).padStart(2, '0');
let hour = String(currentDate.getHours()).padStart(2, '0');
let minute = String(currentDate.getMinutes()).padStart(2, '0');

let formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(formattedDate);
