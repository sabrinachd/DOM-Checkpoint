var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var price = document.querySelectorAll(".price");
var numberItem = document.querySelectorAll(".number-item");
var deleteBtn = document.querySelectorAll(".delete");
var items = document.querySelectorAll(".item");
var hearts = document.querySelectorAll(".heart");
var total = document.getElementById("res");
var totalPrice;
console.log(items);
// Incrementation
for (let i = 0; i < plus.length; i++) {
  let defaultPrice = parseInt(price[i].textContent);
  console.log(defaultPrice);
  plus[i].addEventListener("click", function increment() {
    numberItem[i].textContent = parseInt(numberItem[i].textContent) + 1;
    price[i].textContent = defaultPrice * parseInt(numberItem[i].textContent);

    updateTotalPrice();
  });
}
// Decrementation
for (let i = 0; i < minus.length; i++) {
  let defaultPrice = parseInt(price[i].textContent);
  minus[i].addEventListener("click", () => {
    if (numberItem[i].textContent >= 2) {
      numberItem[i].textContent = parseInt(numberItem[i].textContent) - 1;
      price[i].textContent = parseInt(price[i].textContent) - defaultPrice;
    }
    updateTotalPrice();
  });
}

function updateTotalPrice() {
  totalPrice = 0;

  for (let i = 0; i < price.length; i++) {
    totalPrice = totalPrice + parseInt(price[i].textContent);
  }
  total.textContent = totalPrice;
}

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", () => {
    items[i].style.display = "none";
    price[i].textContent = 0;
    updateTotalPrice();
  });
}
// faire un j'aime
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", () => {
    if (hearts[i].src.endsWith("heart.png")) {
      hearts[i].src = "img/heart_red.png";
    } else {
      hearts[i].src = "img/heart.png";
    }
  });
}
// show Total Price
updateTotalPrice();
