interface Strategie {
    drucke(text: string): void;
}

class PDFDrucker implements Strategie {
    public drucke(text: string): void {
        document.write("%%PDF% " + text + "<br>");
    }
}

class PapierDrucker implements Strategie {
    public drucke(text: string): void {
        document.write("Ratter, ratter: " + text + "<br>");
    }
}

class Kontext {
    private meinDrucker: Strategie;
    public setDrucker(neuerDrucker: Strategie): void {
        this.meinDrucker = neuerDrucker;
    }
    public druckeRechnung(text: string) {
        this.meinDrucker.drucke(text);
    }
}

const meineBestellung = new Kontext();
meineBestellung.setDrucker(new PapierDrucker());
meineBestellung.druckeRechnung("2000 Blatt Papier zu 5 Euro");
meineBestellung.setDrucker(new PDFDrucker());
meineBestellung.druckeRechnung("Neue Software zu 1000 Euro");
