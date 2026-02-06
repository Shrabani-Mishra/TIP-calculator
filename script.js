let peopleCount = 1;

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const peopleDisplay = document.getElementById("totalpeople");
const calcBtn = document.getElementById("calculator");
const summaryBox = document.querySelector(".total_per_person");

minusBtn.addEventListener("click", () => {
    if (peopleCount > 1) {
        peopleCount--;
        peopleDisplay.innerText = peopleCount;
    }
});

plusBtn.addEventListener("click", () => {
    peopleCount++;
    peopleDisplay.innerText = peopleCount;
});

calcBtn.addEventListener("click", () => {
    const bill = parseFloat(document.getElementById("totalBill").value);
    const tipPercent = parseFloat(document.getElementById("tipMain").value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        alert("Enter valid numbers");
        return;
    }

    const tipAmount = (bill * tipPercent) / 100;
    const taxAmount = (bill * 5) / 100;
    const finalBill = bill + tipAmount + taxAmount;
    const perPerson = finalBill / peopleCount;

    document.getElementById("finalBill").innerText = finalBill.toFixed(2);
    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
    document.getElementById("tax_amount").innerText = taxAmount.toFixed(2);
    document.getElementById("totalPerson").innerText = perPerson.toFixed(2);

    summaryBox.style.display = "block";
});
