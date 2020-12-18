class PapierDrucker {
    drucke(text) {
        document.write("Ratter, ratter: " + text + "<br>");
    }
}
class PDFDrucker {
    drucke(text) {
        document.write("%%PDF%% " + text + "<br>");
    }
}
class Kontext {
    setDrucker(einDrucker) {
        this.meinDrucker = einDrucker;
    }
    druckeText(text) {
        this.meinDrucker.drucke(text);
    }
}
const Rechnung = new Kontext();
Rechnung.setDrucker(new PapierDrucker());
Rechnung.druckeText("2000 Blatt Papier zu 20 €");
Rechnung.setDrucker(new PDFDrucker());
Rechnung.druckeText("Neue Software zu 1000 Euro");
//# sourceMappingURL=Strategie.js.map