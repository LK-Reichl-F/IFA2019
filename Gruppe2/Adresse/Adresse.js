// In den USA werden Adressen anders als in Deutschland geschrieben:
// Deutsche Adresse:
//   Heinrich-Thein-Schule
//   Hofheimer Str. 14-18
//   97437 Haßfurt
// US-Adresse:
//   Heinrich-Thein-Schule
//   14-18 Hofheimer Str.
//   Haßfurt 97437
// Schreibe eine Klasse Kunde, die die Adressdaten eines Kunden speichert.
// Schreibe Adressdrucker-Klassen, die die Adressdaten passend für ein Land ausgeben.
// Weise dem Kunden mal einen deutschen und mal einen US-Adressdrucker zu und teste.
class Kunde {
    constructor(name, straße, hausnummer, plz, ort, drucker) {
        this.name = name;
        this.straße = straße;
        this.hausnummer = hausnummer;
        this.plz = plz;
        this.ort = ort;
        this.drucker = drucker;
    }
    druckAdresse() {
        this.drucker.drucke(this.name, this.straße, this.hausnummer, this.plz, this.ort);
    }
    setDrucker(neuerDrucker) {
        this.drucker = neuerDrucker;
    }
}
class deDrucker {
    drucke(name, straße, hausnummer, plz, ort) {
        document.write(name + "<br>");
        document.write(straße + " " + hausnummer + "<br>");
        document.write(plz + " " + ort + "<br>");
    }
}
class usDrucker {
    drucke(name, straße, hausnummer, plz, ort) {
        document.write(name + "<br>");
        document.write(hausnummer + " " + straße + "<br>");
        document.write(ort + " " + plz + "<br>");
    }
}
const meinKunde = new Kunde("HTS", "Hofheimer Str.", "14-18", "97437", "Haßfurt", new deDrucker());
meinKunde.druckAdresse();
meinKunde.setDrucker(new usDrucker());
meinKunde.druckAdresse();
//# sourceMappingURL=Adresse.js.map