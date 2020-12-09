class Kunde {
    private name: string;
    private drucker: Rechnungsdrucker;

    constructor(name: string, drucker: Rechnungsdrucker) {
        this.name = name;
        this.drucker = drucker;
    }
    
    public druckeRechnung() {
        this.drucker.drucke("Rechnung für " + this.name);
    }

    public setDrucker(neuerDrucker: Rechnungsdrucker) {
        this.drucker = neuerDrucker;
    }
}

abstract class Rechnungsdrucker {
    abstract drucke(text: string);
}

class PDFdrucker extends Rechnungsdrucker {
    public drucke(text: string) {
        document.write("%%PDF%% " + text + "<br>");
    }
    public eineAndereFunktion(){}
}

class PapierDrucker extends Rechnungsdrucker {
    public drucke(text: string) {
        document.write("Ratter, surr: " + text + "<br>");
    }
}

class ElektronischerDrucker extends Rechnungsdrucker {
    public drucke(text: string) {
        document.write('{ "Rechnungstext": "'+ text + '"}<br>');
    }
}

const hugo = new Kunde("Hugo", new PapierDrucker());
hugo.druckeRechnung();
hugo.setDrucker(new ElektronischerDrucker());
hugo.druckeRechnung();