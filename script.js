// Bug: Calculation doesn't handle overtime yet
function calculatePay() {
    const name = document.getElementById("employeeName").value;
    const hours = parseFloat(document.getElementById("hoursWorked").value);
    const rate = parseFloat(document.getElementById("ratePerHour").value);

    let pay = 0;
    if (hours > 40) {
        let regularPay = 40 * rate;
        let overtimeHours = hours - 40;
        let overtimePay = overtimeHours * (rate * 1.5);
        pay = regularPay + overtimePay;
    } else {
        pay = hours * rate;
    }

    document.getElementById("result").innerText = 
        name + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;
