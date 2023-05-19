/* Exercises: Level 1

1.

[EN]
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/

// Get user input using prompt
const age = prompt("Enter your age:");

// Convert the input to a number
const ageNumber = Number(age);

// Check if the user is 18 or older
if (ageNumber >= 18) {
  console.log("You are old enough to drive");
} else {
  const remainingYears = 18 - ageNumber;
  console.log(`You need to wait ${remainingYears} more years to drive`);
}

/*
[TR]
"prompt" kullanarak kullanıcı girişi alın (”Yaşınızı girin:"). 
Kullanıcı 18 yaş ve üzerindeyse, geri bildirimde bulunun: 
'Araba kullanacak yaştasınız', ancak 18 değilse, 18 yaşını doldurması gereken yıl sayısını beklediğini belirten başka bir geri bildirimde bulunun. */

// Kullanıcıdan yaş bilgisini prompt ile al
const age = prompt("Yaşınızı girin:");

// Girilen değeri sayıya dönüştür
const ageNumber = Number(age);

// Kullanıcının 18 veya daha büyük olup olmadığını kontrol et
if (ageNumber >= 18) {
  console.log("Sürüş için yeterli yaşa sahipsiniz");
} else {
  const remainingYears = 18 - ageNumber;
  console.log(`18 yaşına gelmek için ${remainingYears} yıl beklemelisiniz`);
}

/* 2. [EN]

Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. */

// Get user's age using prompt
const myAge = prompt("Enter your age:");
const yourAge = prompt("Enter my age:");

// Compare the ages and log the result
if (myAge > yourAge) {
  console.log("I am older");
} else if (myAge < yourAge) {
  console.log("You are older");
} else {
  console.log("We are the same age");
}


/* [TR] if … else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu 
(ben mi yoksa siz mi) belirterek konsola kaydedin. 
Yaşınızı girdi olarak almak için Prompt("Yaşınızı giriniz:") kullanın.*/

// Kullanıcıdan yaş bilgisini prompt ile al
const myAge = prompt("Yaşınızı girin:");
const yourAge = prompt("Benim yaşımı girin:");

// Girilen değerleri sayılara dönüştür
const myAgeNumber = Number(myAge);
const yourAgeNumber = Number(yourAge);

// Yaşları karşılaştır ve sonucu console'a yazdır
if (myAgeNumber > yourAgeNumber) {
  console.log("Ben daha yaşlıyım");
} else if (myAgeNumber < yourAgeNumber) {
  console.log("Siz daha yaşlısınız");
} else {
  console.log("Aynı yaştayız");
}


/* 3. 

[EN]

If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator.*/ 

// Using if-else:

function compareNumbers(a, b) {
    if (a > b) {
      return 'a is greater than b';
    } else {
      return 'a is less than b';
    }
  }
  
  // Example usage
  console.log(compareNumbers(5, 3)); // Output: a is greater than b
  console.log(compareNumbers(2, 8)); // Output: a is less than b
  
// Using ternary operator:

function compareNumbers(a, b) {
  return a > b ? 'a is greater than b' : 'a is less than b';
}

// Example usage
console.log(compareNumbers(5, 3)); // Output: a is greater than b
console.log(compareNumbers(2, 8)); // Output: a is less than b


/* [TR]

a, b'den büyükse, "a b'den büyüktür" aksi takdirde "a, b'den küçüktür" döndürün. şekillerde uygulamaya çalışın

başka if kullanarak
ternary (üçlü) operatör. */ 

// if-else kullanarak:

function sayilariKarsilastir(a, b) {
  if (a > b) {
    return 'a, b\'den büyüktür';
  } else {
    return 'a, b\'den küçüktür';
  }
}

// Örnek kullanım
console.log(sayilariKarsilastir(5, 3)); // Çıktı: a, b'den büyüktür
console.log(sayilariKarsilastir(2, 8)); // Çıktı: a, b'den küçüktür


// ternary kullanarak :

function sayilariKarsilastir(a, b) {
  return a > b ? 'a, b\'den büyüktür' : 'a, b\'den küçüktür';
}

// Örnek kullanım
console.log(sayilariKarsilastir(5, 3)); // Çıktı: a, b'den büyüktür
console.log(sayilariKarsilastir(2, 8)); // Çıktı: a, b'den küçüktür

/* 4.

[EN]

Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? */ 

function isEven(number) {
    return true; // even number
 } else {
  return false; // add number
}
}

/* [TR] 

Çift sayılar 2 ile bölünür ve kalan sıfırdır. Bir sayının çift olup olmadığını JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz? */ 

function isEven(number) {
  if (number % 2 === 0) {
    return true; // Çift sayı
  } else {
    return false; // Tek sayı
  }
}

/* 
[EN]

Exercises: Level 2

1. 

Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

*/ 

function getGrade(score) {
  if (score >= 80 && score <= 100) {
    return 'A';
  } else if (score >= 70 && score <= 89) {
    return 'B';
  } else if (score >= 60 && score <= 69) {
    return 'C';
  } else if (score >= 50 && score <= 59) {
    return 'D';
  } else if (score >= 0 && score <= 49) {
    return 'F';
  } else {
    return 'Invalid score';
  }
}

// Example 
console.log(getGrade(95)); // Output: A
console.log(getGrade(75)); // Output: B
console.log(getGrade(65)); // Output: C
console.log(getGrade(55)); // Output: D
console.log(getGrade(35)); // Output: F
console.log(getGrade(110)); // Output: Invalid score


/* [TR]

Öğrencilere puanlarına göre not veren bir kod yazınız:
80-100, Bir
70-89, B
60-69, C
50-59, D
0-49, K

*/
function notVer(puan) {
  if (puan >= 80 && puan <= 100) {
    return 'A';
  } else if (puan >= 70 && puan <= 89) {
    return 'B';
  } else if (puan >= 60 && puan <= 69) {
    return 'C';
  } else if (puan >= 50 && puan <= 59) {
    return 'D';
  } else if (puan >= 0 && puan <= 49) {
    return 'F';
  } else {
    return 'Geçersiz puan';
  }
}

// Örnek 
console.log(notVer(95)); // Çıktı: A
console.log(notVer(75)); // Çıktı: B
console.log(notVer(65)); // Çıktı: C
console.log(notVer(55)); // Çıktı: D
console.log(notVer(35)); // Çıktı: F
console.log(notVer(110)); // Çıktı: Geçersiz puan

/* 2.

Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */ 

function checkSeason(month) {
  if (month === 'September' || month === 'October' || month === 'November') {
    return 'Autumn';
  } else if (month === 'December' || month === 'January' || month === 'February') {
    return 'Winter';
  } else if (month === 'March' || month === 'April' || month === 'May') {
    return 'Spring';
  } else if (month === 'June' || month === 'July' || month === 'August') {
    return 'Summer';
  } else {
    return 'Invalid input';
  }
}

// Example
console.log(checkSeason('October')); // Output: Autumn
console.log(checkSeason('January')); // Output: Winter
console.log(checkSeason('April')); // Output: Spring
console.log(checkSeason('July')); // Output: Summer
console.log(checkSeason('February')); // Output: Winter
console.log(checkSeason('InvalidMonth')); // Output: Invalid input



/* [TR]

Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Kullanıcı girişi ise :
Eylül, Ekim veya Kasım, mevsim Sonbahardır.
Aralık, Ocak veya Şubat, mevsim kıştır.
Mart, Nisan veya Mayıs, mevsim İlkbahardır
Haziran, Temmuz veya Ağustos, mevsim Yaz 
*/ 


function mevsimiKontrolEt(ay) {
    if (ay === 'Eylül' || ay === 'Ekim' || ay === 'Kasım') {
      return 'Sonbahar';
    } else if (ay === 'Aralık' || ay === 'Ocak' || ay === 'Şubat') {
      return 'Kış';
    } else if (ay === 'Mart' || ay === 'Nisan' || ay === 'Mayıs') {
      return 'İlkbahar';
    } else if (ay === 'Haziran' || ay === 'Temmuz' || ay === 'Ağustos') {
      return 'Yaz';
    } else {
      return 'Geçersiz giriş';
    }
  }
  
  // Örnek 

  console.log(mevsimiKontrolEt('Ekim')); // Çıktı: Sonbahar
  console.log(mevsimiKontrolEt('Ocak')); // Çıktı: Kış
  console.log(mevsimiKontrolEt('Nisan')); // Çıktı: İlkbahar
  console.log(mevsimiKontrolEt('Temmuz')); // Çıktı: Yaz
  console.log(mevsimiKontrolEt('Şubat')); // Çıktı: Kış
  console.log(mevsimiKontrolEt('GeçersizAy')); // Çıktı: Geçersiz giriş


/* 3. 
[EN]

Check if a day is weekend day or a working day.
Your script will take day as an input. */ 


function checkDay(day) {
  // Convert the input to lowercase for case-insensitive comparison
  day = day.toLowerCase();

  if (day === 'saturday' || day === 'sunday') {
    return 'Weekend day';
  } else if (
    day === 'monday' ||
    day === 'tuesday' ||
    day === 'wednesday' ||
    day === 'thursday' ||
    day === 'friday'
  ) {
    return 'Working day';
  } else {
    return 'Invalid input';
  }
}

// Example 
console.log(checkDay('saturday')); // Output: Weekend day
console.log(checkDay('monday')); // Output: Working day
console.log(checkDay('friday')); // Output: Working day
console.log(checkDay('sunday')); // Output: Weekend day
console.log(checkDay('wednesday')); // Output: Working day
console.log(checkDay('invalid')); // Output: Invalid input


/* [TR]

Bir günün hafta sonu günü mü yoksa iş günü mü olduğunu kontrol edin.
*/ 

function gunuKontrolEt(gun) {
  // Karşılaştırma yapmak için girişi küçük harfe çevirin (büyük/küçük harf duyarlılığı olmadan)
  gun = gun.toLowerCase();

  if (gun === 'cumartesi' || gun === 'pazar') {
    return 'Hafta sonu günü';
  } else if (
    gun === 'pazartesi' ||
    gun === 'salı' ||
    gun === 'çarşamba' ||
    gun === 'perşembe' ||
    gun === 'cuma'
  ) {
    return 'Çalışma günü';
  } else {
    return 'Geçersiz giriş';
  }
}

// Örnek
console.log(gunuKontrolEt('cumartesi')); // Çıktı: Hafta sonu günü
console.log(gunuKontrolEt('pazartesi')); // Çıktı: Çalışma günü
console.log(gunuKontrolEt('cuma')); // Çıktı: Çalışma günü
console.log(gunuKontrolEt('pazar')); // Çıktı: Hafta sonu günü
console.log(gunuKontrolEt('çarşamba')); // Çıktı: Çalışma günü
console.log(gunuKontrolEt('geçersiz')); // Çıktı: Geçersiz giriş


/* 
[EN]

Exercises: Level 3
Write a program which tells the number of days in a month. 
*/ 

function getDaysInMonth(month, year) {
  // Create a new Date object with the given month and year
  // Set the date to the last day of the month (0th day of the next month)
  const date = new Date(year, month, 0);

  // Get the day component of the date, which gives the number of days in the month
  return date.getDate();
}

// Example usage
console.log(getDaysInMonth(1, 2023)); // Output: 28 (February has 28 days in 2023)
console.log(getDaysInMonth(6, 2022)); // Output: 30 (July has 30 days in 2022)
console.log(getDaysInMonth(11, 2021)); // Output: 31 (December has 31 days in 2021)


/* 
[TR] 

Bir aydaki gün sayısını bulan programı yazınız.


function getDaysInMonth(ay, yil) {
  // Verilen ay ve yıl ile yeni bir Date nesnesi oluşturun
  // Tarihi ayın son gününe ayarlayın (bir sonraki ayın 0. günü)
  const tarih = new Date(yil, ay, 0);

  // Tarihin gün bileşenini alarak, ayın kaç gün olduğunu elde edin
  return tarih.getDate();
}

// Örnek 
console.log(getDaysInMonth(1, 2023)); // Çıktı: 28 (2023 yılında Şubat ayı 28 gün)
console.log(getDaysInMonth(6, 2022)); // Çıktı: 30 (2022 yılında Temmuz ayı 30 gün)
console.log(getDaysInMonth(11, 2021)); // Çıktı: 31 (2021 yılında Aralık ayı 31 gün)


/* [EN]

1. Write a program which tells the number of days in a month, now consider leap year.*/ 

function getDaysInMonth(month, year) {
    // Array to store the number of days in each month
    const daysInMonth = [
      31, // January
      28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31  // December
    ];
  
    // Check if it's a leap year (divisible by 4 and not divisible by 100, unless divisible by 400)
    if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
      return 29; // February in a leap year has 29 days
    }
  
    return daysInMonth[month - 1]; // Return the number of days for the given month
  }
  
  // Example 
  console.log(getDaysInMonth(2, 2024)); // Output: 29 (February 2024 is a leap year)
  console.log(getDaysInMonth(2, 2023)); // Output: 28 (February 2023 is not a leap year)
  console.log(getDaysInMonth(12, 2021)); // Output: 31 (December always has 31 days)
  
/* [TR]

Bir aydaki gün sayısını söyleyen bir program yazın, şimdi artık yılı düşünün.*/ 

function getDaysInMonth(month, year) {
    // Her ayın gün sayısını saklamak için bir dizi
    const daysInMonth = [
      31, // Ocak
      28, // Şubat
      31, // Mart
      30, // Nisan
      31, // Mayıs
      30, // Haziran
      31, // Temmuz
      31, // Ağustos
      30, // Eylül
      31, // Ekim
      30, // Kasım
      31  // Aralık
    ];
  
    // Artık yıl olup olmadığını kontrol et (4'e bölünebilen ve 100'e bölünemeyen veya 400'e bölünebilen yıllar)
    if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
      return 29; // Artık yıl olan Şubat ayı 29 gün içerir
    }
  
    return daysInMonth[month - 1]; // Verilen ayın gün sayısını döndür
  }
  
  // Örnek kullanım
  console.log(getDaysInMonth(2, 2024)); // Çıktı: 29 (2024 Şubat ayı artık yıldır)
  console.log(getDaysInMonth(2, 2023)); // Çıktı: 28 (2023 Şubat ayı artık yıl değildir)
  console.log(getDaysInMonth(12, 2021)); // Çıktı: 31 (Aralık her zaman 31 gün içerir)
  