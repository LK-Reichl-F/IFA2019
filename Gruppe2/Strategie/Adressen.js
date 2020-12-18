class Adresse {
    drucke() {
        this.adressAusgabe.druckeAdresse(this.name, this.str, this.hausnr, this.plz, this.ort);
    }
}
class USAdressAusgabe {
    druckeAdresse(name, str, hausnr, plz, ort) {
        document.write(name + "<br>");
        document.write(hausnr + " " + str + "<br>");
        document.write(ort + " " + plz + "<br>");
    }
}
class DEAdressAusgabe {
    druckeAdresse(name, str, hausnr, plz, ort) {
        document.write(name + "<br>");
        document.write(str + " " + hausnr + "<br>");
        document.write(plz + " " + ort + "<br>");
    }
}
//# sourceMappingURL=Adressen.js.map