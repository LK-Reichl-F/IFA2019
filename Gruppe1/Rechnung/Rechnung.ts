class Rechnung {
    protected betrag: number;
    public constructor(betrag: number) {
        this.betrag = betrag;
    }
    public drucke(): void {
        document.write("Hier ist die Standard-Rechnung mit dem Betrag " + this.betrag + "<br>");
    }
}

class PDFRechnung extends Rechnung {
    public drucke(): void {
        document.write("%%PDF%% Rechnungsbetrag " + this.betrag + "<br>");
    }
}

class PapierRechnung extends Rechnung {
    public drucke(): void {
        document.write("Ratter - hier kommt die Papierrechnung über " + this.betrag + "<br>");
    }
}

class ElektronischeRechnung extends Rechnung {
    public drucke(): void {
        document.write('{ "betrag": ' + this.betrag + "}<br>");
    }
}

class Kunde {
    private meineRechnung : Rechnung;
    constructor(rechnungsTyp: Rechnung) {
        this.meineRechnung = rechnungsTyp;
    }
    public druckeRechnung() {
        this.meineRechnung.drucke();
    }
    public setRechnung(neueRechnung: Rechnung) {
        this.meineRechnung = neueRechnung;
    }
}

const hugo = new Kunde(new PDFRechnung(47.11));
hugo.druckeRechnung();
hugo.setRechnung(new ElektronischeRechnung(47.11));
hugo.druckeRechnung();
hugo.setRechnung(new PapierRechnung(47.11));
hugo.druckeRechnung();