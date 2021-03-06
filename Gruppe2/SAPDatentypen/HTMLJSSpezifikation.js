"use strict";

// Eure Aufgabe:
// Nehmt die Spezifikationen, wie sie in SAP-Datentypen.ts beschrieben sind
// und versucht diese Spezifikationen mit HTML und JavaScript darszustellen.

// Diese Funktion wird erst gestartet, wenn die HTML-Seite fertig geladen ist:
window.onload = function () {
    const meineNumber = document.getElementById("meineNumber");
    meineNumber.addEventListener("input", meineNumberInput);
}

function meineNumberInput(einEvent) {
    console.log(einEvent.target.value);
    const meineNumber = einEvent.target;
    // const zustand = meineNumber.validity;
    // if (zustand.rangeUnderflow) {
    //     meineNumber.setCustomValidity("Bitte ein Zahl größer oder gleich 3 eingeben.");
    // } else {
    //     meineNumber.setCustomValidity("");
    // }
    meineNumber.reportValidity();
}