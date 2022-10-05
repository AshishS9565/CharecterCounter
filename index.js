const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-conter");
let remainingCoutn = document.getElementById("remaining-counter");

let userChar = 0;

// to update the character on screen
const updateCounter = () => {
  userChar = charval.value.length;

  totalCount.innerText = userChar;

  remainingCoutn.innerText = 200 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());

// to copy the text
const copyText = () => {
  charval.select();
  charval.setSelectionRange(0, 99999);
  // here api are called for copy text
  navigator.clipboard.writeText(charval.value);
  alert("Text Copied");
};