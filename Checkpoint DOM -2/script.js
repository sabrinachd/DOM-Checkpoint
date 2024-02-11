let prix = document.querySelectorAll(".prix");
let numberItem = document.querySelectorAll(".number-item");
let plus = document.querySelectorAll(".plus");
let moins = document.querySelectorAll(".moins");
var deleteBtn = document.querySelectorAll(".supprimer");
var items = document.querySelectorAll(".item");
let coeur = document.querySelectorAll(".like");
let total = document.getElementById("conclusion");

var totalPrix;
console.log(items);
// Fonction pour incrémenter

function increment(i) {
  let defaultPrix = parseFloat(prix[i].textContent);
  console.log(defaultPrix);

  return function () {
    numberItem[i].textContent = parseFloat(numberItem[i].textContent) + 1;
    prix[i].textContent = defaultPrix * parseFloat(numberItem[i].textContent);

    updateTotalPrix();
  };
}
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", increment(i));
}

// Decrementation
for (let i = 0; i < moins.length; i++) {
  let defaultPrix = parseInt(prix[i].textContent);
  moins[i].addEventListener("click", () => {
    if (numberItem[i].textContent >= 2) {
      numberItem[i].textContent = parseInt(numberItem[i].textContent) - 1;
      prix[i].textContent = parseInt(price[i].textContent) - defaultPrix;
    }
    updateTotalPrix();
  });
}
// calculate Total price
function updateTotalPrix() {
  totalPrix = 0;

  for (let i = 0; i < prix.length; i++) {
    totalPrix = totalPrix + parseInt(prix[i].textContent);
  }
  total.textContent = totalPrix;
}
//remove function

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", () => {
    items[i].remove();
    prix[i].textContent = 0;
    updateTotalPrix;
  });
}

// faire un j'aime
for (let i = 0; i < coeur.length; i++) {
  coeur[i].addEventListener("click", () => {
    coeur[i].classList.toggle("coeur-actif");
  });
}

// show Total Price
updateTotalPrix();
