interface Adressdruck {
    drucke(name: string, str: string, hausnr: string,
        plz: string, ort: string): void;
}

class USAdresse implements Adressdruck {
    drucke(name: string, str: string, hausnr: string,
        plz: string, ort: string): void {
        document.write(name + "<br>");
        document.write(hausnr + " " + str + "<br>");
        document.write(ort + " " + plz + "<br>");
    }
}

class DEAdresse implements Adressdruck {
    drucke(name: string, str: string, hausnr: string,
        plz: string, ort: string): void {
        document.write(name + "<br>");
        document.write(str + " " + hausnr + "<br>");
        document.write(plz + " " + ort + "<br>");
    }
}

class Adresse {
    private name: string;
    private str: string;
    private hausnr: string;
    private plz: string;
    private ort: string;

    private ausgabe: Adressdruck;

    public setAdressdruck(neueAusgabe: Adressdruck): void {
        this.ausgabe = neueAusgabe;
    }

    public drucke(): void {
        this.ausgabe.drucke(this.name, this.str,
            this.hausnr, this.plz, this.ort);
    }

    constructor(name: string, str: string, hausnr: string,
        plz: string, ort: string) {
        this.name = name;
        this.str = str;
        this.hausnr = hausnr;
        this.plz = plz;
        this.ort = ort;
    }
}

const hugo = new Adresse("Hugo", "Hofheimer Str.",
    "14–18", "97437", "Haßfurt");
hugo.setAdressdruck(new USAdresse());
hugo.drucke();
hugo.setAdressdruck(new DEAdresse());
hugo.drucke();