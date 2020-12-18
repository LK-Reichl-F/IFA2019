class USAdresse {
    drucke(name, str, hausnr, plz, ort) {
        document.write(name + "<br>");
        document.write(hausnr + " " + str + "<br>");
        document.write(ort + " " + plz + "<br>");
    }
}
class DEAdresse {
    drucke(name, str, hausnr, plz, ort) {
        document.write(name + "<br>");
        document.write(str + " " + hausnr + "<br>");
        document.write(plz + " " + ort + "<br>");
    }
}
class Adresse {
    constructor(name, str, hausnr, plz, ort) {
        this.name = name;
        this.str = str;
        this.hausnr = hausnr;
        this.plz = plz;
        this.ort = ort;
    }
    setAdressdruck(neueAusgabe) {
        this.ausgabe = neueAusgabe;
    }
    drucke() {
        this.ausgabe.drucke(this.name, this.str, this.hausnr, this.plz, this.ort);
    }
}
const hugo = new Adresse("Hugo", "Hofheimer Str.", "14–18", "97437", "Haßfurt");
hugo.setAdressdruck(new USAdresse());
hugo.drucke();
hugo.setAdressdruck(new DEAdresse());
hugo.drucke();
//# sourceMappingURL=Adressen.js.map