class Schüler {
    constructor(name, alter) {
        this.name = name;
        if (alter >= 0) {
            this.alter = alter;
        }
        else {
            throw new Error("Ungültiges Alter");
        }
        // this.errorCode = 0;
    }
    // private errorCode: number;
    vorstellen() {
        document.write("Hallo, ich heiße " + this.name
            + " und bin " + this.alter + " Jahre alt.<br>");
    }
    // public getErrorCode(): number {
    //     return this.errorCode;
    // }
    getAlter() {
        return this.alter;
    }
    setAlter(neuesAlter) {
        if (neuesAlter > this.alter && neuesAlter < 130) {
            this.alter = neuesAlter;
            // this.errorCode = 0;
        }
        else {
            // document.write("Ungültiges Alter angegeben bei setAlter().<br>")
            // this.errorCode = 1; // ungültiges Alter
            throw new Error("Ungültiges Alter bei setAlter");
        }
    }
}
class Fachinformatiker extends Schüler {
    constructor(name, programmiersprache, alter) {
        super(name, alter); // Rufe den Konstruktor von Schüler auf.
        this.programmiersprache = programmiersprache;
    }
    programmiere() {
        document.write("Prima " + this.programmiersprache + " {...}<br>");
    }
    vorstellen() {
        super.vorstellen();
        document.write("Ich programmiere gerne in " + this.programmiersprache + "<br>");
    }
}
try {
    const hugo = new Schüler("Hugo", 19);
    hugo.setAlter(3);
    document.write("Hugo ist " + hugo.getAlter() + " Jahre alt.<br>");
}
catch (fehler) {
    document.write(fehler.message + "<br>");
    console.log(fehler);
    document.write(fehler.stack);
}
//# sourceMappingURL=Schüler.js.map