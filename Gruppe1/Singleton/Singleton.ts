class Singleton {
    private static meinObjekt: Singleton;
    private datenbankVerbindung: string;
    private dbIstBlockiert: boolean;
    private constructor() { 
        this.dbIstBlockiert = false;
        this.datenbankVerbindung = "1.2.3.4";
    }
    public static getSingleton(): Singleton {
        if (Singleton.meinObjekt === undefined) {
            Singleton.meinObjekt = new Singleton();
        }
        return Singleton.meinObjekt;
    }
    public getDBVerbindung(): string {
        if (this.dbIstBlockiert) {
            return "DB ist blockiert";
        } else {
            this.dbIstBlockiert = true;
            return this.datenbankVerbindung;
        }
    }
    public returnDBVerbindung(): void {
        this.dbIstBlockiert = false;
    }
}

const meinObjekt = Singleton.getSingleton();
const zweitesObjekt = Singleton.getSingleton();