class Rechnung {
    constructor(betrag) {
        this.betrag = betrag;
    }
    drucke() {
        document.write("Hier ist die Standard-Rechnung mit dem Betrag " + this.betrag + "<br>");
    }
}
class PDFRechnung extends Rechnung {
    drucke() {
        document.write("%%PDF%% Rechnungsbetrag " + this.betrag + "<br>");
    }
}
class PapierRechnung extends Rechnung {
    drucke() {
        document.write("Ratter - hier kommt die Papierrechnung über " + this.betrag + "<br>");
    }
}
class ElektronischeRechnung extends Rechnung {
    drucke() {
        document.write('{ "betrag": ' + this.betrag + "}<br>");
    }
}
class Kunde {
    constructor(rechnungsTyp) {
        this.meineRechnung = rechnungsTyp;
    }
    druckeRechnung() {
        this.meineRechnung.drucke();
    }
    setRechnung(neueRechnung) {
        this.meineRechnung = neueRechnung;
    }
}
const hugo = new Kunde(new PDFRechnung(47.11));
hugo.druckeRechnung();
hugo.setRechnung(new ElektronischeRechnung(47.11));
hugo.druckeRechnung();
hugo.setRechnung(new PapierRechnung(47.11));
hugo.druckeRechnung();
//# sourceMappingURL=Rechnung.js.map