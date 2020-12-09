class Bruch {
    constructor(zähler, nenner) {
        if (nenner === 0) {
            throw new Error("Der Nenner darf nicht 0 werden.");
        }
        const teiler = this.ggT(zähler, nenner);
        this.zähler = zähler / teiler;
        this.nenner = nenner / teiler;
    }
    plus(andererBruch) {
        const neuerZähler = this.zähler * andererBruch.nenner
            + andererBruch.zähler * this.nenner;
        const neuerNenner = this.nenner * andererBruch.nenner;
        return new Bruch(neuerZähler, neuerNenner);
    }
    minus(andererBruch) {
        const neuerZähler = this.zähler * andererBruch.nenner
            - andererBruch.zähler * this.nenner;
        const neuerNenner = this.nenner * andererBruch.nenner;
        return new Bruch(neuerZähler, neuerNenner);
    }
    mal(andererBruch) {
        const neuerZähler = this.zähler * andererBruch.zähler;
        const neuerNenner = this.nenner * andererBruch.nenner;
        return new Bruch(neuerZähler, neuerNenner);
    }
    geteilt(andererBruch) {
        const neuerZähler = this.zähler * andererBruch.nenner;
        const neuerNenner = this.nenner * andererBruch.zähler;
        return new Bruch(neuerZähler, neuerNenner);
    }
    toString() {
        return " " + this.zähler + "/" + this.nenner + " ";
    }
    ggT(a, b) {
        let h;
        if (a === 0) {
            return Math.abs(b);
        }
        if (b === 0) {
            return Math.abs(a);
        }
        do {
            h = a % b;
            a = b;
            b = h;
        } while (b !== 0);
        return Math.abs(a);
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
        this.zähler = besterZähler;
        this.nenner = besterNenner;
    }
}
try {
    const a = new Bruch(1, 2);
    const b = new Bruch(1, 0);
    const c = a.plus(b);
    document.write(a + "+" + b + "=" + c + "<br>");
}
catch (einFehler) {
    document.write("Es ist ein Fehler aufgetreten: "
        + einFehler.message + "<br>");
    console.log(einFehler);
}
//# sourceMappingURL=Bruch.js.map