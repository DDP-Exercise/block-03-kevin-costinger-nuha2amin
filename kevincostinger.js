let form = document.querySelector("form");
let table = document.querySelector("#expenses tbody");
let sumField = document.getElementById("expenseSum");

let sum = 0;

// Formular wird abgeschickt
form.addEventListener("submit", function(e) {

    e.preventDefault(); // verhindert Reload

    // Werte holen
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;
    let expense = document.getElementById("expense").value;

    // neue Zeile erstellen
    let row = document.createElement("tr");

    let tdDate = document.createElement("td");
    tdDate.textContent = date;

    let tdAmount = document.createElement("td");
    tdAmount.textContent = amount + " €";

    let tdExpense = document.createElement("td");
    tdExpense.textContent = expense;

    let tdDelete = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = "X";

    // Löschen der Zeile
    btn.addEventListener("click", function() {
        row.remove();

        sum = sum - amount;
        sumField.textContent = sum + " €";
    });

    tdDelete.append(btn);

    row.append(tdDate);
    row.append(tdAmount);
    row.append(tdExpense);
    row.append(tdDelete);

    table.append(row);

    // Summe aktualisieren
    sum = sum + Number(amount);
    sumField.textContent = sum + " €";
});