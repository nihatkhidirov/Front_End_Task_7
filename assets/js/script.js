//1)Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.

let number = 100;
if (number % 21 === 0) {
  console.log("Eded 3-e ve 7-e bolunur");
} else {
  console.log("Eded 3-e ve 7-e bolunmur");
}

//2)Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin sayini tapin.

let n = 1;
let m = 10;
let c = 0;

for (let index = n; index <= m; index++) {
  if (index % 2 !== 0) {
    c++;
  }
}
console.log(c);

//3)Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin cemini tapin.
let n1 = 1;
let m1 = 5;
let c1 = 0;

for (let index = n1; index <= m1; index++) {
  if (index % 2 === 1) {
    c1 = c1 + index;
  }
}
console.log(c1);

//4)Verilmis n tam ededinin sade ve ya murekkeb oldugunu tapin.

let n2 = 3;
let c2 = 0;
for (let index = 1; index <= n2; index++) {
  if (n2 % index === 0) {
    c2++;
  }
}
if (c2 > 2) {
  console.log("Bu Eded Murekkebdir!");
} else {
  console.log("Bu Eded Sadedir!");
}

//5)Verilmish arrayin icindeki cut ededlerin cemini tapin.

let arr = [4, 1, 3, 5, 19, 29, 32, 44];
let c3 = 0;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] % 2 === 0) {
    c3 = c3 + arr[index];
  }
}
console.log(c3);

//6) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

let arr1 = [2, 4, 6, 8, 5, 9];
function squaresum(arr) {
  let c4 = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      c4 = c4 + arr[i] * arr[i];
    }
  }
  console.log(c4);
}
squaresum(arr1);

//7) Elə bir funksiya yazın ki 2 parametr qəbul eləsin - hər 2 parametrin rəqəm olub-olmamağını yoxlamalısınız -
// əgər hər 2si də rəqəmdirsə yazdığınız funksiya həmin
//2 rəqəm arasındakı ədədlərin cəmini return etməlidir (misal üçün parametrlər 10 və 15dirsə 10,11,12,13,14,15 cəmini qaytarmalıdır)
let num2 = "salam";
let num3 = 30;
function IsNumberOrNot(number, number) {
  if (isNaN(num2) || isNaN(num3)) {
    console.log("Reqem Deyil!");
  } else {
    let num4 = num2 * num3;
    console.log(num4);
  }
}
IsNumberOrNot(num2, num3);

//8) HTML-də uzunluğu və hündürlüyü 200px olan element hazırlayın və bir ədəd button hazırlayın - istifadəçi hər dəfə buttona click edəndə uzunluq 50px, hündürlük isə 20px artmalıdır
const myElement = document.getElementById("myElement");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  let currentWidth = myElement.offsetWidth;
  let currentHeight = myElement.offsetHeight;

  myElement.style.width = currentWidth + 50 + "px";
  myElement.style.height = currentHeight + 20 + "px";
});
