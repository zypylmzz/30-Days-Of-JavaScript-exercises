/*Exercise: Level 1

1- Declare an empty array. [EN] 
1-Boş bir dizi oluşturun. [TR]
*/

const emptyArray = [];

/* 

2-Declare an array with more than 5 number of elements. [EN] 
2-5'ten fazla öğe içeren bir dizi bildirimi yapın. [TR]

*/

const arrayWithMoreThanFiveElements = [1, 2, 3, 4, 5, 6];

/* 

3-Find the length of your array. [EN] 
3-Dizinin uzunluğunu bulun. [TR]

*/ 

const length = arrayWithMoreThanFiveElements.length;
console.log(length); // Output: 6


/* 

4- Get the first item, the middle item and the last item of the array. [EN] 
4-Dizinin ilk öğesini, ortadaki öğesini ve son öğesini alın. [TR]

*/

const firstItem = arrayWithMoreThanFiveElements[0];
const middleItem = arrayWithMoreThanFiveElements[Math.floor(length / 2)];
const lastItem = arrayWithMoreThanFiveElements[length - 1];

console.log(firstItem); // Output: 1
console.log(middleItem); // Output: 4
console.log(lastItem); // Output: 6


/*

5-Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
The array size should be greater than 5. [EN]

5-Karışık veri türlerini içeren bir dizi bildirimi yapın ve dizinin uzunluğunu bulun. Dizi boyutu 5'ten büyük olmalıdır. [TR]

*/ 


const mixedDataTypes = [1, 'two', true, null, undefined, { name: 'John' }];
const mixedDataTypesLength = mixedDataTypes.length;
console.log(mixedDataTypesLength); // Output: 6

/* 

6- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. [EN]
6- itCompanies adında bir dizi bildirin ve başlangıç değerleri olarak Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'u atayın. [TR]

*/ 

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/* 

7-Print the array using console.log(). [EN] 
7-console.log() kullanarak diziyi yazdırın.[TR]

*/ 

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


/* 

8- Print the number of companies in the array. [EN] 
8- Dizideki şirket sayısını yazdırın.[TR]

*/ 

console.log(itCompanies);


/* 

9- Print the first company, middle and last company. [EN]
9-İlk şirketi, ortadaki şirketi ve son şirketi yazdırın. [TR]

*/

console.log(itCompanies.length); // Output: 7


/* 

10-Print out each company.[EN]
10-Her şirketi ayrı ayrı yazdırın. [TR]


*/ 

console.log(itCompanies[0]); // Output: Facebook
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // Output: Apple
console.log(itCompanies[itCompanies.length - 1]); // Output: Amazon


/* 
11-Change each company name to uppercase one by one and print them out. [EN] 
11-Her şirketin adını büyük harflerle değiştirin ve yazdırın. [TR]

*/

for (const company of itCompanies) {
    console.log(company);
  }
  

/* 
12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. [EN] 
12-Diziyi "Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon büyük IT şirketleridir." şeklinde bir cümle gibi yazdırın.[TR]

*/

for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
  }
  

/* 
13-Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found. [EN] 

13-Belirli bir şirketin itCompanies dizisinde olup olmadığını kontrol edin. 
Şirket varsa şirketi döndürün, aksi takdirde "Şirket bulunamadı" şeklinde bir değer döndürün. [TR]

*/

console.log(itCompanies.join(', ') + ' are big IT companies.');

/* 
14-Filter out companies which have more than one 'o' without the filter method. [EN]
14-Filtre yöntemini kullanmadan birden fazla 'o' içeren şirketleri filtreleyin. [TR]

*/

function findCompany(companyName) {
    if (itCompanies.includes(companyName)) {
      return companyName;
    } else {
      return 'Company not found.';
    }
  }
  
  console.log(findCompany('Google')); // Output: Google
  console.log(findCompany('Twitter')); // Output: Company not found.

  

/* 

15-Sort the array using sort() method. [EN] 
15-Diziyi sort() yöntemini kullanarak sıralayın. [TR]

*/ 

const filteredCompanies = [];

for (const company of itCompanies) {
  let count = 0;
  for (const char of company) {
    if (char.toLowerCase() === 'o') {
      count++;
    }
  }
  if (count === 1) {
    filteredCompanies


/* 

16-Reverse the array using reverse() method. [EN]
16-Diziyi reverse() yöntemini kullanarak ters çevirin. [TR]

*/ 

const reversedCountries = countries.reverse();
console.log(reversedCountries);

/* 

17- Slice out the first 3 companies from the array. [EN]
17- Diziden ilk 3 şirketi kesin. [TR]

*/ 

const firstThreeCountries = countries.slice(0, 3);
console.log(firstThreeCountries);



/* 

18-Slice out the last 3 companies from the array. [EN] 
18-Diziden son 3 şirketi kesin. [TR]

*/ 

const lastThreeCountries = countries.slice(-3);
console.log(lastThreeCountries);


/* 

19- Slice out the middle IT company or companies from the array. [EN] 
19- Diziden ortadaki IT şirketini veya şirketlerini kesin. [TR]

*/ 

const middleCountries = countries.slice(6, 8);
console.log(middleCountries);


/* 

20-Remove the first IT company from the array. [EN] 
20-İlk IT şirketini diziden kaldırın. [TR]

*/ 

countries.shift();
console.log(countries);



/*

21-Remove the middle IT company or companies from the array.[EN]
21-Ortadaki IT şirketini veya şirketlerini diziden kaldırın. [TR]

*/

countries.pop();
console.log(countries);


/* 

22-Remove the last IT company from the array. [EN] 
22-Son IT şirketini diziden kaldırın. [TR]

*/ 

countries.pop();
console.log(countries);


/*

23-Remove all IT companies. [EN]
23-Tüm IT şirketlerini kaldırın. [TR]

*/

const filteredCountries = countries.filter(country => !country.includes('IT'));
console.log(filteredCountries);



/* 

Exercise: Level 2

1-Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file.
Access both file in main.js file. [EN]

1-Ayrı bir countries.js dosyası oluşturun ve bu dosyaya countries dizisini yerleştirin. [TR]
Ayrı bir web_techs.js dosyası oluşturun ve bu dosyaya webTechs dizisini yerleştirin. main.js dosyasında her iki dosyaya da erişim sağlayın. */

// countries.js
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  module.exports = countries;


 // web_techs.js
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
  module.exports = webTechs;
  

// main.js
const countries = require('./countries');
const webTechs = require('./web_techs');

console.log(countries);
console.log(webTechs);


// 2-First remove all the punctuations and change the string to array and count the number of words in the array. [EN]

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Remove punctuation from the string

let cleanedText = text.replace(/[^\w\s]/g, ''); 
/*In the code above, we first use the replace() method with a regular expression [^\w\s] to match and remove all punctuation marks from the text string. 
This regular expression matches any character that is not a word character (\w) or a whitespace character (\s). The g flag is used to perform a global search and replace.*/

// Convert the cleaned text into an array of words
let words = cleanedText.split(' ');

console.log(words);
console.log(words.length);

/* 
2-First remove all the punctuations and change the string to array and count the number of words in the array. [EN]
2-Önce tüm noktalama işaretlerini kaldırın ve dizeyi dizi olarak değiştirin ve dizideki sözcük sayısını sayın. [TR]

let text = 'İnsanları eğitmeyi ve güçlendirmeyi seviyorum. HTML, CSS, JS, React, Python öğretiyorum.';
let cleanedText = text.replace(/[^\w\s]/g, ''); 

/* Yukarıdaki kodda, text değişkenindeki dizeden noktalama işaretlerini kaldırmak için replace() yöntemini kullanıyoruz.
 Bu işlem için [^\w\s] düzenli ifadesini kullanıyoruz. Bu düzenli ifade, kelime karakteri (\w) veya boşluk karakteri (\s) olmayan herhangi bir karakteri eşleştirir ve kaldırır. "g global bir arama ve değiştirme işlemi gerçekleştirmek için kullanılır.

Noktalama işaretlerini kaldırdıktan */ 

let words = cleanedText.split(' ');

console.log(words);
console.log(words.length);


//3- In the following shopping cart add, remove, edit items. [EN]
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


// Add 'Meat' to the beginning of the shopping cart if it's not already added  
                                                                                           // we first check if 'Meat' is already in the shoppingCart array using the includes() method. 
                                                                                           // If it's not included, we use the unshift() method to add it to the beginning of the array.
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end of the shopping cart if it's not already added                   // 'Sugar' is already in the shoppingCart array. If it's not included, we use the push() method to add it to the end of the array
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' from the shopping cart if you are allergic to honey
const allergy = 'Honey';
if (shoppingCart.includes(allergy)) {                                                    // 'Honey' is in the shoppingCart array. If it is, we find its index using the indexOf() method and remove it using the splice() method.
  const index = shoppingCart.indexOf(allergy);
  shoppingCart.splice(index, 1);
}

// Modify 'Tea' to 'Green Tea'
const itemToModify = 'Tea';
const modifiedItem = 'Green Tea';                                                       // 'Tea' is in the shoppingCart array. If it is, we find its index using the indexOf() method and modify it to 'Green Tea' by assigning the new value to the corresponding index.
if (shoppingCart.includes(itemToModify)) {
  const index = shoppingCart.indexOf(itemToModify);
  shoppingCart[index] = modifiedItem;
}

console.log(shoppingCart);

// 3- Aşağıdaki alışveriş sepetinde öğeleri ekleyin, kaldırın, düzenleyin. [TR] 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Eğer 'Meat' zaten eklenmemişse, başına 'Meat' ekleyin            //'Meat'ın shoppingCart dizisinde zaten olup olmadığını includes() yöntemiyle kontrol ediyoruz. 
                                                                    // Eğer içermiyorsa, unshift() yöntemini kullanarak başına ekliyoruz.
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
                                                                   // 'Sugar'ın shoppingCart dizisinde zaten olup olmadığını kontrol ediyoruz. 
                                                                   // Eğer içermiyorsa, push() yöntemini kullanarak sonuna ekliyoruz.
// Eğer 'Sugar' zaten eklenmemişse, sonuna 'Sugar' ekleyin
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}                                                                

// Eğer bal allerjiniz varsa, 'Honey'yi kaldırın                 // 'Honey'ın shoppingCart dizisinde olup olmadığını kontrol ediyoruz. 
                                                                 // Eğer varsa, indexOf() yöntemiyle dizideki indisini buluyoruz ve splice() yöntemiyle kaldırıyoruz.
const allergy = 'Honey';
if (shoppingCart.includes(allergy)) {
  const index = shoppingCart.indexOf(allergy);
  shoppingCart.splice(index, 1);
}

// 'Tea'yı 'Green Tea' olarak değiştirin
const itemToModify = 'Tea';                                         // Tea'nın shoppingCart dizisinde olup olmadığını kontrol ediyoruz. 
                                                                    // Eğer varsa, indexOf() yöntemiyle dizideki indisini buluyoruz ve yeni değer olan 'Green Tea'yı ilgili indise atıyoruz.
const modifiedItem = 'Green Tea';
if (shoppingCart.includes(itemToModify)) {
  const index = shoppingCart.indexOf(itemToModify);
  shoppingCart[index] = modifiedItem;
}

console.log(shoppingCart);



/* 

4-In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.[EN]
4-Ülkeler dizisinde, dizide 'Etiyopya' olup olmadığını kontrol edin, varsa 'ETHIOPIA' yazdırın. Eğer yoksa ülkeler listesine ekleyin. [TR]

*/


const countryToCheck = 'Ethiopia';

if (countries.includes(countryToCheck)) {
  console.log('ETHIOPIA');
} else {
  countries.push(countryToCheck);
}

console.log(countries);



/*
5-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.[EN]
5-WebTechs dizisinde dizide Sass olup olmadığını kontrol edin ve varsa 'Sass is a CSS önişlem' yazdırın. Eğer yoksa diziye Sass ekleyin ve diziyi yazdırın. [TR]
*/

const techToCheck = 'Sass';

if (webTechs.includes(techToCheck)) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push(techToCheck);
  console.log(webTechs);
}

/* 

6-Concatenate the following two variables and store it in a fullStack variable. [EN]
6-Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde saklayın. [TR]*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


/* Exercise: Level 3

The following is an array of 10 students ages: [EN]
Aşağıdakiler, yaşları 10 öğrenci olan bir dizidir: [TR]

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(); // Sort the array in ascending order

const minAge = ages[0]; // Get the minimum age (first element after sorting)
const maxAge = ages[ages.length - 1]; // Get the maximum age (last element after sorting)

console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(); // Sort the array in ascending order

let medianAge;

if (ages.length % 2 === 0) {
  // Array length is even
  const middleIndex = ages.length / 2;
  const middleValue1 = ages[middleIndex - 1];
  const middleValue2 = ages[middleIndex];
  medianAge = (middleValue1 + middleValue2) / 2;
} else {
  // Array length is odd
  const middleIndex = Math.floor(ages.length / 2);
  medianAge = ages[middleIndex];
}

console.log("Median Age:", medianAge);


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sum = ages.reduce((total, age) => total + age, 0); // Sum all ages
const averageAge = sum / ages.length; // Calculate the average

console.log("Average Age:", averageAge);


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(); // Sort the array in ascending order

const minAge = ages[0]; // Get the minimum age (first element after sorting)
const maxAge = ages[ages.length - 1]; // Get the maximum age (last element after sorting)

const ageRange = maxAge - minAge; // Calculate the range

console.log("Age Range:", ageRange);


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sum = ages.reduce((total, age) => total + age, 0); // Sum all ages
const averageAge = sum / ages.length; // Calculate the average

const minAge = Math.min(...ages); // Find the minimum age
const maxAge = Math.max(...ages); // Find the maximum age

const diffMinAverage = Math.abs(minAge - averageAge); // Calculate the absolute difference (min - average)
const diffMaxAverage = Math.abs(maxAge - averageAge); // Calculate the absolute difference (max - average)

if (diffMinAverage > diffMaxAverage) {
  console.log("(min - average) is larger");
} else if (diffMinAverage < diffMaxAverage) {
  console.log("(max - average) is larger");
} else {
  console.log("Both differences are equal");
}




// 3- Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half. [EN]
// 3- Ülkeler dizisini eşitse iki eşit diziye bölün. Ülkeler dizisi eşit değilse, ilk yarı için bir ülke daha. [TR]


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  let firstHalf;
  let secondHalf;
  
  if (countries.length % 2 === 0) {
    // Array length is even
    const middleIndex = countries.length / 2;
    firstHalf = countries.slice(0, middleIndex);
    secondHalf = countries.slice(middleIndex);
  } else {
    // Array length is odd
    const middleIndex = Math.floor(countries.length / 2);
    firstHalf = countries.slice(0, middleIndex + 1);
    secondHalf = countries.slice(middleIndex + 1);
  }
  
  console.log("First Half:", firstHalf);
  console.log("Second Half:", secondHalf);
  

