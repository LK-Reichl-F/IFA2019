interface Strategie {
    drucke(text: string): void;
}

class PapierDrucker implements Strategie {
    drucke(text: string): void {
        document.write("Ratter, ratter: " + text + "<br>");
    }
}

class PDFDrucker implements Strategie {
    drucke(text: string): void {
        document.write("%%PDF%% " + text + "<br>");
    }
}

class Kontext {
    private meinDrucker: Strategie;
    public setDrucker(einDrucker: Strategie) {
        this.meinDrucker = einDrucker;
    }
    public druckeText(text: string) {
        this.meinDrucker.drucke(text);
    }
}

const Rechnung = new Kontext();
Rechnung.setDrucker(new PapierDrucker());
Rechnung.druckeText("2000 Blatt Papier zu 20 €");
Rechnung.setDrucker(new PDFDrucker());
Rechnung.druckeText("Neue Software zu 1000 Euro");
