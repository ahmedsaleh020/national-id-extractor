let dataEle = document.querySelector(".data");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let birthDateEle = document.querySelector(".birth-date");
let birthTownEle = document.querySelector(".birth-town");
let birthOrderEle = document.querySelector(".birth-order");
let birthGenderEle = document.querySelector(".gender");
let century, birthYear, birthMonth, birthDay, birthTown, birthOrder, gender;

let Towns = {
  "01": "القاهرة",
  "02": "الاسكندرية",
  "03": "بورسعيد",
  "04": "السويس",
  11: "دمياط",
  12: "الدقهلية",
  13: "الشرقية",
  14: "القليوبية",
  15: "كفر الشيخ",
  16: "الغربية",
  17: "المنوفية",
  18: "البحيرة",
  19: "الاسماعيلية",
  21: "الجيزة",
  22: "بنى سويف",
  23: "الفيوم",
  24: "المنيا",
  25: "اسيوط",
  26: "سوهاج",
  27: "قنا",
  28: "اسوان",
  29: "الاقصر",
  31: "البحر الاحمر",
  32: "الوادى الجديد",
  33: "مطروح",
  34: "شمال سيناء",
  35: "جنوب سيناء",
  88: "خارج الجمهورية",
};

birthDateEle.textContent = "";
birthTownEle.textContent = "";
birthGenderEle.textContent = "";
birthOrderEle.textContent = "";

btn.addEventListener("click", function () {
  dataEle.classList.remove("show");
  validation(input);

  displayData();
});

function validation(id) {
  if (
    Number(id.value[id.value.length - 1]) > 9 ||
    Number(id.value[id.value.length - 1]) < 1 ||
    id.value.length != 14
  ) {
    alert("رقم غير صحيح .. الرجاء ادخال رقم قومى صحيح");
  } else {
    dataEle.classList.add("show");
    extractData(input);
  }
}

function extractData(id) {
  // store the input value
  let value = id.value;
  century = value.slice(0, 1) == 3 ? 20 : 19;
  birthYear = century + value.slice(1, 3);
  birthMonth = value.slice(3, 5);
  birthDay = value.slice(5, 7);
  birthTown = Towns[`${value.slice(7, 9)}`];
  birthOrder =
    value.slice(9, 12) < 10
      ? value.slice(9, 12).slice(-1)
      : value.slice(9, 12) >= 11 && value.slice(9, 12) <= 99
      ? value.slice(9, 12).slice(-2)
      : value.slice(9, 12);

  gender = Number(value[value.length - 2]) % 2 == 0 ? "أنثى" : "ذكر";
}

function displayData() {
  birthDateEle.textContent = "";
  birthDateEle.textContent = `${birthDay}/${birthMonth}/${birthYear}`;
  birthTownEle.textContent = "";
  birthTownEle.textContent = birthTown;
  birthGenderEle.textContent = "";
  birthGenderEle.textContent = gender;
  birthOrderEle.textContent = "";
  birthOrderEle.textContent = birthOrder;
}
