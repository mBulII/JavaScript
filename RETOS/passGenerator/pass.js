const input1 = document.getElementById("length");
const input2 = document.getElementById("uppercase");
const input3 = document.getElementById("lowercase");
const input4 = document.getElementById("numbers");
const input5 = document.getElementById("specialChar");
const Btn = document.getElementById("Btn");
const result = document.getElementById("result");

Btn.addEventListener("click", function (e) {
  e.preventDefault();

  const length = parseInt(input1.value);
  const uppercase = input2.checked;
  const lowercase = input3.checked;
  const numbers = input4.checked;
  const specialChar = input5.checked;

  const charset =
    (uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
    (lowercase ? "abcdefghijklmnopqrstuvwxyz" : "") +
    (numbers ? "0123456789" : "") +
    (specialChar ? "!@#$%^&*()_-+=<>?/[]{}|" : "");

  if (isNaN(length)) {
    alert("Invalid length");
  } else if (charset === "") {
    alert("Please select at least one character set.");
    return;
  } else {
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    result.textContent = password;
  }
});
