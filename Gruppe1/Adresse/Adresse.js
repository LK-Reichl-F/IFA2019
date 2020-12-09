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
    constructor(name, straße, hausnummer, plz, ort, adressDrucker) {
        this.name = name;
        this.straße = straße;
        this.hausnummer = hausnummer;
        this.plz = plz;
        this.ort = ort;
        this.adressDrucker = adressDrucker;
    }
    druckeAdresse() {
        this.adressDrucker.druckeAdresse(this.name, this.straße, this.hausnummer, this.plz, this.ort);
    }
    setAdressDrucker(adressDrucker) {
        this.adressDrucker = adressDrucker;
    }
}
class deutscherAdressDrucker {
    druckeAdresse(name, straße, hausnummer, plz, ort) {
        document.write(name + "<br>");
        document.write(straße + " " + hausnummer + "<br>");
        document.write(plz + " " + ort + "<br>");
    }
}
class usAdressDrucker {
    druckeAdresse(name, straße, hausnummer, plz, ort) {
        document.write(name + "<br>");
        document.write(hausnummer + " " + straße + "<br>");
        document.write(ort + " " + plz + "<br>");
    }
}
const meinKunde = new Kunde("HTS", "Hofheimer Str.", "14-18", "97437", "Haßfurt", new deutscherAdressDrucker());
meinKunde.druckeAdresse();
meinKunde.setAdressDrucker(new usAdressDrucker());
meinKunde.druckeAdresse();
//# sourceMappingURL=Adresse.js.map