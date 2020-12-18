class PDFDrucker {
    drucke(text) {
        document.write("%%PDF% " + text + "<br>");
    }
}
class PapierDrucker {
    drucke(text) {
        document.write("Ratter, ratter: " + text + "<br>");
    }
}
class Kontext {
    setDrucker(neuerDrucker) {
        this.meinDrucker = neuerDrucker;
    }
    druckeRechnung(text) {
        this.meinDrucker.drucke(text);
    }
}
const meineBestellung = new Kontext();
meineBestellung.setDrucker(new PapierDrucker());
meineBestellung.druckeRechnung("2000 Blatt Papier zu 5 Euro");
meineBestellung.setDrucker(new PDFDrucker());
meineBestellung.druckeRechnung("Neue Software zu 1000 Euro");
//# sourceMappingURL=Strategie.js.map