class Kunde {
    constructor(name, drucker) {
        this.name = name;
        this.drucker = drucker;
    }
    druckeRechnung() {
        this.drucker.drucke("Rechnung für " + this.name);
    }
    setDrucker(neuerDrucker) {
        this.drucker = neuerDrucker;
    }
}
class Rechnungsdrucker {
}
class PDFdrucker extends Rechnungsdrucker {
    drucke(text) {
        document.write("%%PDF%% " + text + "<br>");
    }
    eineAndereFunktion() { }
}
class PapierDrucker extends Rechnungsdrucker {
    drucke(text) {
        document.write("Ratter, surr: " + text + "<br>");
    }
}
class ElektronischerDrucker extends Rechnungsdrucker {
    drucke(text) {
        document.write('{ "Rechnungstext": "' + text + '"}<br>');
    }
}
const hugo = new Kunde("Hugo", new PapierDrucker());
hugo.druckeRechnung();
hugo.setDrucker(new ElektronischerDrucker());
hugo.druckeRechnung();
//# sourceMappingURL=Rechnung.js.map