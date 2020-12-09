class Schüler {
    private name: string;
    private alter: number;
    // private errorCode: number;

    public vorstellen() {
        document.write("Hallo, ich heiße " + this.name
            + " und bin " + this.alter + " Jahre alt.<br>");
    }

    public constructor(name: string, alter: number) {
        this.name = name;
        if (alter >= 0) {
            this.alter = alter;
        } else {
            throw new Error("Ungültiges Alter")
        }
        // this.errorCode = 0;
    }

    // public getErrorCode(): number {
    //     return this.errorCode;
    // }

    public getAlter(): number {
        return this.alter;
    }

    public setAlter(neuesAlter: number): void {
        if (neuesAlter > this.alter && neuesAlter < 130) {
            this.alter = neuesAlter;
            // this.errorCode = 0;
        } else {
            // document.write("Ungültiges Alter angegeben bei setAlter().<br>")
            // this.errorCode = 1; // ungültiges Alter
            throw new Error("Ungültiges Alter bei setAlter");
        }
    }
}

class Fachinformatiker extends Schüler {
    private programmiersprache: string;

    constructor(name: string, programmiersprache: string, alter: number) {
        super(name, alter);     // Rufe den Konstruktor von Schüler auf.
        this.programmiersprache = programmiersprache;
    }

    public programmiere(): void {
        document.write("Prima " + this.programmiersprache + " {...}<br>");
    }

    public vorstellen(): void {
        super.vorstellen();
        document.write("Ich programmiere gerne in " + this.programmiersprache + "<br>");
    }
}

try {
    const hugo = new Schüler("Hugo", 19);
    hugo.setAlter(3);
    document.write("Hugo ist " + hugo.getAlter() + " Jahre alt.<br>");
} catch (fehler) {
    document.write(fehler.message + "<br>");
    console.log(fehler);
    document.write(fehler.stack);
}