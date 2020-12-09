class Bruch {
    constructor(zahl1, ...zahl2) {
        if (typeof (zahl1) === "bigint" && typeof (zahl2[0]) === "bigint") {
            this.zähler = zahl1;
            this.nenner = zahl2[0];
        }
        else if (typeof (zahl1) === "number" && zahl2.length === 0) {
            this.sucheBruch(zahl1, 1000);
        }
        else {
            throw new Error("Ungültige Parameter für Konstruktor.");
        }
        if (this.nenner === 0n) {
            throw new Error("Der Nenner darf nicht 0 sein.");
        }
    }
    sucheBruch(kommazahl, maximalerNenner) {
        let zähler = 1;
        let nenner = 1;
        let besterZähler = zähler;
        let besterNenner = nenner;
        let fehler = Math.abs(zähler / nenner - kommazahl);
        while (nenner < maximalerNenner) {
            if (zähler / nenner < kommazahl) {
                zähler++;
            }
            else {
                nenner++;
            }
            let neuerFehler = Math.abs(zähler / nenner - kommazahl);
            if (neuerFehler < fehler) {
                besterZähler = zähler;
                besterNenner = nenner;
                fehler = neuerFehler;
            }
        }
        this.zähler = BigInt(besterZähler);
        this.nenner = BigInt(besterNenner);
    }
    plus(andererBruch) {
        const neuerZähler = this.zähler * andererBruch.nenner + andererBruch.zähler * this.nenner;
        const neuerNenner = this.nenner * andererBruch.nenner;
        return new Bruch(neuerZähler, neuerNenner);
    }
    toString() {
        return this.zähler + "/" + this.nenner;
    }
}
try {
    const a = new Bruch(1n, 2n);
    const b = new Bruch(0.333333333333333);
    document.write(`a = ${a}; b=${b}<br>`);
}
catch (meineException) {
    console.log(meineException);
}
//# sourceMappingURL=Bruch.js.map