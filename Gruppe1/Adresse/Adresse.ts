// Übung Adresse
//
// Adressen werden in den USA und in Deutschland unterschiedlich geschrieben:
// Deutschland:
//   Heinrich-Thein-Schule
//   Hofheimer Str. 14-18
//   97437 Haßfurt
// USA:
//   Heinrich-Thein-Schule
//   14-18 Hofheimer Str.
//   Haßfurt 97437
//
// Benutze das Strategie-Pattern (ähnlich wie bei Rechnung)
// um Adressen entweder im deutschen oder im amerikanischen Format auszugeben.

class Kunde {
    private name: string;
    private straße: string;
    private hausnummer: string;
    private plz: string;
    private ort: string;
    private adressDrucker: AdressDrucker;

    constructor(name: string, straße: string, hausnummer: string, plz: string, ort: string,
        adressDrucker: AdressDrucker) {
        this.name = name;
        this.straße = straße;
        this.hausnummer = hausnummer;
        this.plz = plz;
        this.ort = ort;
        this.adressDrucker = adressDrucker;
    }

    public druckeAdresse(): void {
        this.adressDrucker.druckeAdresse(this.name, this.straße, this.hausnummer, this.plz, this.ort);
    }

    public setAdressDrucker(adressDrucker: AdressDrucker) {
        this.adressDrucker = adressDrucker;
    }
}

interface AdressDrucker {
    druckeAdresse(name: string, straße: string, hausnummer: string, plz: string, ort: string): void;
}

class deutscherAdressDrucker implements AdressDrucker {
    public druckeAdresse(name: string, straße: string, hausnummer: string, plz: string, ort: string): void {
        document.write(name + "<br>");
        document.write(straße + " " + hausnummer + "<br>");
        document.write(plz + " " + ort + "<br>");
    }
}

class usAdressDrucker implements AdressDrucker {
    public druckeAdresse(name: string, straße: string, hausnummer: string, plz: string, ort: string): void {
        document.write(name + "<br>");
        document.write(hausnummer + " " + straße + "<br>");
        document.write(ort + " " + plz + "<br>");
    }
}

const meinKunde = new Kunde("HTS", "Hofheimer Str.", "14-18", "97437", "Haßfurt", new deutscherAdressDrucker());
meinKunde.druckeAdresse();
meinKunde.setAdressDrucker(new usAdressDrucker());
meinKunde.druckeAdresse();