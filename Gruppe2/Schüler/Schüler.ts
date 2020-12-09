class Schüler {
    // Attribute (Variablen):
    private name: string;
    private alter: number;
    // private fehlercode: number;

    // Methoden (Funktionen):
    public vorstellen() {
        document.write("Hallo, ich heiße " + this.name
            + " und bin " + this.alter + " Jahre alt.<br>");
    }

    public constructor(name: string, alter: number) {
        // this.fehlercode = 0;
        this.name = name;
        if (alter >= 0) {
            this.alter = alter;
        } else {
            throw Error("Ungültiges Alter "+ alter);
        }
    }

    public getAlter(): number {
        return this.alter;
    }

    public setAlter(neuesAlter: number) {
        if (neuesAlter > this.alter) {
            this.alter = neuesAlter;
            // this.fehlercode = 0;    // alles ok
        } else {
            // Fehlermeldung zum Beispiel:
            // document.write("Ungültiges neues Alter für " + this.name + ".<br>");
            // Fehlercode:
            // this.fehlercode = 1;    // ungültiges Alter
            throw Error("Ungültiges Alter "+ neuesAlter);
        }
    }

    //public getFehlercode(): number {
    //    return this.fehlercode;
    //}
}

class Fachinformatiker extends Schüler implements Feuerwehrmann {
    private programmiersprache: string;

    public constructor(name: string, programmiersprache: string, alter: number) {
        super(name, alter);
        this.programmiersprache = programmiersprache;
    }

    public programmiere() {
        document.write("Prima " + this.programmiersprache + "{...}<br>");
    }

    public vorstellen() {
        super.vorstellen();
        document.write("Ich programmiere gerne in " + this.programmiersprache + "<br>");
    }

    public feuerLöschen() {
        document.write("Wasser marsch...<br>");
    }
}

interface Feuerwehrmann {
    feuerLöschen(): void;
}

function vorsteller(einSchüler: Schüler) {
    einSchüler.vorstellen();
}

function feuer(helfer: Feuerwehrmann) {
    helfer.feuerLöschen();
}

try {
    const hugo = new Schüler("Hugo", 18);
    const irene = new Fachinformatiker("Irene", "Rust", 19);
    hugo.setAlter(-3);
    vorsteller(hugo);
    vorsteller(irene);
    feuer(irene);
} catch (fehler) {
    document.write(fehler.message);
    console.log(fehler);
}