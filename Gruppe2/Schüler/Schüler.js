class Schüler {
    constructor(name, alter) {
        // this.fehlercode = 0;
        this.name = name;
        if (alter >= 0) {
            this.alter = alter;
        }
        else {
            throw Error("Ungültiges Alter " + alter);
        }
    }
    // private fehlercode: number;
    // Methoden (Funktionen):
    vorstellen() {
        document.write("Hallo, ich heiße " + this.name
            + " und bin " + this.alter + " Jahre alt.<br>");
    }
    getAlter() {
        return this.alter;
    }
    setAlter(neuesAlter) {
        if (neuesAlter > this.alter) {
            this.alter = neuesAlter;
            // this.fehlercode = 0;    // alles ok
        }
        else {
            // Fehlermeldung zum Beispiel:
            // document.write("Ungültiges neues Alter für " + this.name + ".<br>");
            // Fehlercode:
            // this.fehlercode = 1;    // ungültiges Alter
            throw Error("Ungültiges Alter " + neuesAlter);
        }
    }
}
class Fachinformatiker extends Schüler {
    constructor(name, programmiersprache, alter) {
        super(name, alter);
        this.programmiersprache = programmiersprache;
    }
    programmiere() {
        document.write("Prima " + this.programmiersprache + "{...}<br>");
    }
    vorstellen() {
        super.vorstellen();
        document.write("Ich programmiere gerne in " + this.programmiersprache + "<br>");
    }
    feuerLöschen() {
        document.write("Wasser marsch...<br>");
    }
}
function vorsteller(einSchüler) {
    einSchüler.vorstellen();
}
function feuer(helfer) {
    helfer.feuerLöschen();
}
try {
    const hugo = new Schüler("Hugo", 18);
    const irene = new Fachinformatiker("Irene", "Rust", 19);
    hugo.setAlter(-3);
    vorsteller(hugo);
    vorsteller(irene);
    feuer(irene);
}
catch (fehler) {
    document.write(fehler.message);
    console.log(fehler);
}
//# sourceMappingURL=Schüler.js.map