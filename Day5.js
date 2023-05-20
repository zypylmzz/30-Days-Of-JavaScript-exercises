/* 💻 Exercise

Exercise: Level 1

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
Ayrı bir web_techs.js dosyası oluşturun ve bu dosyaya webTechs dizisini yerleştirin. main.js dosyasında her iki dosyaya da erişim sağlayın. /* */

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
  

