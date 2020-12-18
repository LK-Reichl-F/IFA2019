class Singleton {
    constructor() {
        this.dbIstBlockiert = false;
        this.datenbankVerbindung = "1.2.3.4";
    }
    static getSingleton() {
        if (Singleton.meinObjekt === undefined) {
            Singleton.meinObjekt = new Singleton();
        }
        return Singleton.meinObjekt;
    }
    getDBVerbindung() {
        if (this.dbIstBlockiert) {
            return "DB ist blockiert";
        }
        else {
            this.dbIstBlockiert = true;
            return this.datenbankVerbindung;
        }
    }
    returnDBVerbindung() {
        this.dbIstBlockiert = false;
    }
}
const meinObjekt = Singleton.getSingleton();
const zweitesObjekt = Singleton.getSingleton();
//# sourceMappingURL=Singleton.js.map