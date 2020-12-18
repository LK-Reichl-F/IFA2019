interface AdressAusgabe {
    druckeAdresse(name: string, str: string, hausnr: string, plz: string, ort: string): void;
}

class Adresse {
    private name: string;
    private str: string;
    private hausnr: string;
    private plz: string;
    private ort: string;

    private adressAusgabe: AdressAusgabe;

    public drucke() {
        this.adressAusgabe.druckeAdresse(this.name, this.str, this.hausnr, this.plz, this.ort);
    }
}

class USAdressAusgabe implements AdressAusgabe {
    druckeAdresse(name: string, str: string, hausnr: string, plz: string, ort: string): void {
        document.write(name + "<br>");
        document.write(hausnr + " " + str + "<br>")
        document.write(ort + " " + plz + "<br>");
    }
}

class DEAdressAusgabe implements AdressAusgabe {
    druckeAdresse(name: string, str: string, hausnr: string, plz: string, ort: string): void {
        document.write(name + "<br>");
        document.write(str + " "  + hausnr + "<br>")
        document.write(plz + " " + ort + "<br>");
    }
}