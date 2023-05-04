/* 

Day 2: Exercises 
2.Gün Egzersizleri

Exercise: Level 1
*/

// 1.Declare a variable named "challenge" and assign it to an initial value '30 Days Of JavaScript'. [EN]
let challenge = "30 Days Of JavaScript";

// 1."Challenge " adlı bir değişken tanımlayın ve bunu '30 Günlük JavaScript' başlangıç değerine atayın. [TR]
let challenge = "30 Günlük JavaScript";

// 2.Print the string on the browser console using "console.log()" [EN]
console.log(challenge); // 30 Days Of JavaScript

// 2.Dizeyi tarayıcı konsolunda "console.log()" kullanarak yazdırın. [TR]
console.log(challenge); // 30 Günlük JavaScript

// 3.Print the "length" of the string on the browser console using "console.log()" [EN]
// 3.Dizenin "uzunluğunu" console.log kullanarak yazdırın. [TR]

console.log(challenge.length); // 20

// 4.Change all the string characters to capital letters using "toUpperCase()" method. [EN]
console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT

// 4."toUpperCase()" methodunu kullanarak tüm dize karakterlerini büyük harf olarak değiştirin. [TR]
console.log(challenge.toUpperCase()); // 30 GÜNLÜK JAVASCRIPT

// 5.Change all the string characters to lowercase letters using "toLowerCase()"method. [EN]
// 5."toLowerCase()" methodunu kullanarak tüm dize karakterlerini küçük harf olarak değiştirin. [TR]

console.log(challenge.toLowerCase()); // 30 günlük javascript

// 6.Cut (slice) out the first word of the string using substr() or substring() method. [EN]
console.log(challenge.substr(0, 1)); // 3
// 6.Substr() veya substring() methodunu kullanarak dizenin ilk kelimesini kesin (dilimleyin). [TR]
console.log(challenge.substring(0, 1)); // 3

// 7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.[EN]
console.log(challenge.substring(3, 7)); // Days

// 7.JavaScript'in "Günleri" ifadesini 30 Günlük Javascript'ten kesin. [TR]
console.log(challenge.substring(3, 9)); // Günlük

// 8.Check if the string contains a word Script using includes() method. [EN]
// 8.Dizenin "includes()" methodunu kullanarak bir "word" komutunu içerip içermediğini kontrol edin. [TR]

console.log(challenge.includes("word")); // false

// 9.Split the string into an array using "split()" method. [EN]
console.log(challenge.split()); // [ '30 Days Of JavaScript' ]

// 9.Split() yöntemini kullanarak dizeyi bir diziye bölün.  [TR]
console.log(challenge.split()); // [ '30 Günlük JavaScript' ]

// 10.Split the string 30 Days Of JavaScript at the space using split() method. // [EN]
console.log(challenge.split(" ")); // [ '30', 'Days', 'Of', 'JavaScript' ]

// 10.Split() methodunu kullanarak 30 Günlük JavaScript dizesini boşluğa bölün. // [TR]
console.log(challenge.split(" ")); // [ '30', 'Günlük', 'JavaScript' ]

// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. // [EN]
// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülle ayırıp bir diziye değiştirin. // [TR]

let a = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(a.split(","))[
  //
  ("Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon")
];

// 12.Change 30 Days Of JavaScript to 30 Days Of Python using "replace()" method.[EN]
console.log(challenge.replace("JavaScript", "Python")); // 30 Days Of Python

// 12."Replace()" metodunu kullanarak 30 Günlük JavaScript'i 30 Günlük Python olarak değiştirin.[TR]
console.log(challenge.replace("JavaScript", "Python")); // 30 Günlük Python

// 13.What is character at index 15 in '30 Days Of JavaScript' string? Use "charAt()"" method. [EN]
console.log(challenge.charAt(15)); // S

// 13.'30 Günlük JavaScript' dizesinde dizin 15'teki karakter nedir? "charAt()"" metodunu kullanın. [TR]
console.log(challenge.charAt(15)); // c

// 14.What is the character code of J in '30 Days Of JavaScript' string using "charCodeAt()"[EN]
console.log(challenge.charCodeAt("J")); // 51

// 14."charCodeAt()" kullanarak '30 Günlük JavaScript' dizesindeki "J" karakter kodu nedir? [TR]
console.log(challenge.charCodeAt("J")); // 51

// 15.Use "indexOf" to determine the position of the first occurrence of a in 30 Days Of JavaScript. [EN]
console.log(challenge.indexOf("a")); // 4

// 15.30 Günlük JavaScript de a'nın ilk konumunu belirlemek için "indexOf" kullanın. [TR]
console.log(challenge.indexOf("a")); // 11

// 16.Use "lastIndexOf" to determine the position of the last occurrence of "a" in 30 Days Of JavaScript. [EN]
console.log(challenge.lastIndexOf("a")); // 14

// 16.'30 Günlük JavaScript' Gününde "a'nın" son konumunu belirlemek için "lastIndexOf" kullanın. [TR]
console.log(challenge.lastIndexOf("a")); // 13

/* 17.Use "indexOf" to find the position of the first occurrence of the word "because" in the following sentence:
'You cannot end a sentence with because because because is a conjunction' [EN] */

let s =
  "You cannot end a sentence with because because because is a conjunction";
console.log(s.indexOf("because")); // 31

/* 17.Aşağıdaki cümlede "çünkü" sözcüğünün ilk geçtiği konumu bulmak için "indexOf" kullanın: 
'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır' [TR] */

let s = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(s.indexOf("çünkü")); // 12

/* 18.Use "lastIndexOf" to find the position of the last occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' [EN] */

let s =
  "You cannot end a sentence with because because because is a conjunction";
console.log(s.lastIndexOf("because")); // 47

/* 18. Aşağıdaki cümlede "çünkü" sözcüğünün son konumunu bulmak için "lastIndexOf" kullanın. 
'Bir cümleyi çünkü çünkü çünkü bir bağlaçtır' ile sonlandıramazsınız. [TR] */

let s = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(s.lastIndexOf("çünkü")); // 43

/* 19. Use "search" to find the position of the first occurrence of the word "because" in the following sentence:
'You cannot end a sentence with because because because is a conjunction'. [EN] */

let s =
  "You cannot end a sentence with because because because is a conjunction";
console.log(s.search("because")); // 31

/* 19.Aşağıdaki cümlede "çünkü" sözcüğünün ilk geçtiği konumu bulmak için "search" kullanın.
'Bir cümleyi çünkü çünkü çünkü bir bağlaçtır' ile sonlandıramazsınız. [TR] */

let s = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(s.search("çünkü")); // 12

// 20.Use "trim()" to remove any trailing whitespace at the beginning and the end of a string. E.g ' 30 Days Of JavaScript '. [EN]
let a = " 30 Days Of JavaScript ";
console.log(a.trim(" ")); // 30 Days Of JavaScript

// 20.Bir dizenin başında ve sonunda kalan boşlukları kaldırmak için "trim()" metodunu kullanın. Örneğin '30 Günlük JavaScript'.[TR]

let a = " 30 Günlük JavaScript ";
console.log(a.trim(" ")); // 30 Günlük JavaScript

// 21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true. [EN]
let a = "30 Days Of JavaScript";
console.log(a.startsWith("30")); // true

// 21.30 Günlük JavaScript dizesiyle "startsWith()" metodunu kullanın ve sonucu doğru yapın. [TR]

let a = "30 Günlük JavaScript";
console.log(a.startsWith("30")); // true

// 22.Use "endsWith()" method with the string 30 Days Of JavaScript and make the result true. [EN]

let a = "30 Days Of JavaScript";
console.log(a.endsWith("pt")); // true

// 22.30 Günlük JavaScript dizesiyle "endsWith()" metodunu kullanın ve sonucu doğru yapın. [TR]

let a = "30 Günlük JavaScript";
console.log(a.endsWith("pt")); // true

// 23.Use "match()" method to find all the "a’s" in 30 Days Of JavaScript. [EN]
console.log(a.match("a")); // [ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]

// 23.JavaScript'in 30 Gününde tüm "a'ları" bulmak için "match ()" yöntemini kullanın.[TR]
console.log(a.match("a")); // [ 'a', index: 11, input: '30 Günlük JavaScript', groups: undefined ]

// 24.Use "concat()" and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'. [EN]

let b = "30 Days of";
console.log(b.concat(" JavaScript")); // 30 Days of JavaScript

// 24."Concat()" kullanın ve '30 Günlük' ve 'JavaScript'i tek bir dizeyle birleştirin, '30 Günlük JavaScript'. [TR]

let b = "30 Günlük";
console.log(b.concat(" JavaScript")); // 30 Günlük JavaScript

// 25.Use repeat() method to print 30 Days Of JavaScript 2 times. [EN]

console.log("30 Days Of JavaScript ".repeat(2)); // 30 Days Of JavaScript 30 Days Of JavaScript

// 25.30 Günlük JavaScript'i 2 kez yazdırmak için "repeat()" yöntemini kullanın. [TR]

console.log("30 Günlük JavaScript ".repeat(2)); // 30 Günlük JavaScript 30 Günlük JavaScript

/* Exercise: Level 2 


1.Using console.log() print out the following statement: [EN]
1.console.log()'u kullanarak aşağıdaki ifadeyi yazdırın: [TR]

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

*/

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

/* 2.Using "console.log()" print out the following quote by Mother Teresa: [EN]
/* 2."console.log()" kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın: [TR]

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same 
-- with charity you give love, so don't just give money but reach out your hand instead." */

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal. [EN]
// 3. typeof ile '10'un tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın. [TR]

console.log(typeof "10" == typeof 10); // false
console.log(typeof Number("10") == typeof 10); // true

// 4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. [EN]
// 4. parseFloat('9.8') un 10 a tam olarak eşit olup olmadığını kontrol edin. [TR]

console.log(parseFloat("9.8") == 10); // false
console.log(Math.ceil(parseFloat("9.8")) == 10); // true

// 5. Check if 'on' is found in both python and jargo [EN]
// 5. Hem 'python' hem de 'jargon' da 'on' ifadesinin bulunup bulunmadığını kontrol edin. [TR]

console.log("python".includes("on")); // true
console.log("jargon".includes("on")); // true

// 6. I hope this course is not full of jargon. Check if "jargon" is in the sentence. [EN]

console.log("I hope this course is not full of jargon.".includes("jargon")); // true

// 6. Umarım bu kurs jargonla dolu değildir. Cümlede "jargon" olup olmadığını kontrol edin. [TR]

console.log("Umarım bu kurs jargonla dolu değildir".includes("jargon")); // true

// 7.Generate a random number between "0 and 100" inclusively.[EN]
// 7."0 ile 100" arasında rastgele bir sayı üretin. [TR]

console.log(Math.floor(Math.random() * 100));

// 8.Generate a random number between 50 and 100 inclusively.[EN]
// 8. 50 ile 100 arasında rastgele bir sayı üretin.[TR]

console.log(Math.floor(Math.random() * 50) + 50);

// 9.Generate a random number between 0 and 255 inclusively. [EN]
// 9. 0 ile 255 dahil olmak üzere aralıkta rastgele bir sayı oluşturun. [TR]

console.log(Math.floor(Math.random() * 256));

// 10.Access the 'JavaScript' string characters using a random number. [EN]
// 10. Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin. [TR]

console.log("JavaScript".charAt(Math.floor(Math.random() * 10)));

/* 

11. Use console.log() and escape characters to print the following pattern. [EN]
11. Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın. [TR]

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 

*/

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

/*

12.
Use substr to "slice" out the phrase "because because because" from the following sentence: [EN]
Aşağıdaki cümleden "çünkü çünkü çünkü" ifadesini dilimlemek için substr kullanın: [TR]

'You cannot end a sentence with because because because is a conjunction'

*/

let s =
  "You cannot end a sentence with because because because is a conjunction";
console.log(s.slice(31, 54));

/* Exercise: Level 3

1.

'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word "love" in this sentence. [EN]
'Aşk bu dünyadaki en güzel şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.' Bu cümledeki "aşk" kelimesinin sayısını sayın. [TR]

*/

let l =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(l.match(/love/gi).length); // 3  --/gi regex

let l =
  "Aşk bu dünyadaki en güzel şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.";
console.log(l.match(/aşk/gi).length); // 3  --/gi regex

/*

2.

Use "match()" to count the number of all because in the following sentence: [EN]
'You cannot end a sentence with because because because is a conjunction'

Aşağıdaki cümlede "çünkü" sayılarını tamamını saymak için "match()" metodunu kullanın. : [TR]
'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

*/

let x =
  "You cannot end a sentence with because because because is a conjunction";
console.log(x.match(/because/gi).length); // 3  --/gi regex

let x = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(x.match(/çünkü/gi).length); // 3  --/gi regex

/*

3.
Clean the following text and find the most frequent word (hint, use replace and regular expressions-(regex)).[EN]
Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun ((ipucu, replace ve regex kullanın). [TR]

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

*/

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let regEx = /[^\w\s.]/gi;
console.log(sentence.replace(regEx, ""));

/* 

Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' [EN]


Aşağıdaki metinden sayıları çıkararak kişinin toplam yıllık gelirini hesaplayınız. 
'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurs kazanıyor.' [TR]

*/

const cumle =
  "Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.";
let regEx = /\d+/g;
const maaslar = cumle.match(regEx);
console.log(maaslar[0] * 12 + maaslar[1] + maaslar[2] * 12); // 250000
