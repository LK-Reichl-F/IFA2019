// Eure Aufgabe:
// Nehmt die Spezifikationen, wie sie in SAPDatentypen.ts beschrieben sind und versucht,
// diese Spezifikationen in HTML und JavaScript hier abzuprüfen:

// Diese Funktion ausführen, wenn alle Dateien geladen sind:
window.onload = function () {
    const meinAlter = document.getElementById("meinAlter");
    meinAlter.addEventListener("input", meinAlterInput);
}

function meinAlterInput(ereignis) {
    const meinAlter = ereignis.target;      // const meinAlter = document.getElementById("meinAlter");
    const zustand = meinAlter.validity;
    if (zustand.rangeUnderflow) {
        meinAlter.setCustomValidity("Alter zu klein.");
    } else if (zustand.rangeOverflow) {
        meinAlter.setCustomValidity("Alter zu groß.");
    } else {
        // Wichtig: Wenn alles ok, unbedingt Fehler löschen:
        meinAlter.setCustomValidity("");
    }
    meinAlter.reportValidity();
}