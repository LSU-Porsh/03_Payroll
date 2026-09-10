// Bug: Calculation doesn’t handle overtime yet
function calculatePay() {
  const nameInput = document.getElementById("employeeName").value.trim();
  const hoursRaw = document.getElementById("hoursWorked").value.trim();
  const rateRaw = document.getElementById("ratePerHour").value.trim();

  const errorDiv = document.getElementById("error");
  const resultDiv = document.getElementById("result");

  // Clear previous output/errors
  errorDiv.innerText = "";
  resultDiv.innerText = "";

  // Prevent empty fields
  if (nameInput === "" || hoursRaw === "" || rateRaw === "") {
    errorDiv.innerText = "Error: All fields are required.";
    return;
  }

  const hours = parseFloat(hoursRaw);
  const rate = parseFloat(rateRaw);

  // Prevent negative numbers
  if (hours < 0 || rate < 0) {
    errorDiv.innerText = "Error: Hours worked and rate per hour cannot be negative numbers.";
    return;
  }

  // Calculate pay if validation passes
  let pay = hours * rate; // Enhancement: add overtime rule (e.g., >40 hours = 1.5x rate)

  resultDiv.innerText = nameInput + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;