const entfernung = {
    "Beschriftung": "km",
    "Typ": "Kommazahl",
    "Minimalwert": 0,
    "Maximalwert": 20000
}

const geschlecht = {
    "Beschriftung": "Geschlecht",
    "Typ": "String",
    "MöglicheWerte": ["männlich", "weiblich", "divers"]
}

const datum = {
    "Beschriftung": "Datum",
    "Typ": "Date",
    "Minimalwert": "1970-01-01",
    "Maximalwert": "2020-12-08"
}

const zustimmung = {
    "Beschriftung": "Sind Sie einverstanden?",
    "Typ": "boolean"
}

// document.write(entfernung.Beschriftung);
// document.write(geschlecht.MöglicheWerte[0]);

// Übung:
// Überlege Dir drei verschiedene Beschreibungen für
// Eingabefelder und wie Du sie im JSON-Format beschreiben würdest:

// Das interface ist so etwas wie ein Vertrag:
interface Test {
    test(text: string, spezifikation: any): boolean;
}

// Die Klasse verspricht (mit implements), dass sie den Vertrag erfüllt:
class stringTest implements Test {
    public test(text: string, spezifikation: any): boolean {
        if (spezifikation.MaxLänge) {
            if (text.length > spezifikation.MaxLänge) {
                return false;
            }
        }
        if (spezifikation.MöglicheWerte) {
            if (!spezifikation.MöglicheWerte.includes(text)) {
                return false;
            }
        }
        if (spezifikation.RegEx) {
            const regex = RegExp(this.spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }
}

// Die Klasse verspricht (mit implements), dass sie den Vertrag erfüllt:
class integerTest implements Test {
    public test(text: string, spezifikation: any): boolean {
        const intWert = parseInt(text, 10);
        if (intWert === NaN) {
            return false;
        }
        if (spezifikation.MaxLänge) {
            if (text.length > this.spezifikation.MaxLänge) {
                return false;
            }
        }
        if (spezifikation.MöglicheWerte) {
            if (!this.spezifikation.MöglicheWerte.includes(intWert)) {
                return false;
            }
        }
        if (spezifikation.Max) {
            if (intWert > this.spezifikation.Max) {
                return false;
            }
        }
        if (spezifikation.Min) {
            if (intWert < this.spezifikation.Min) {
                return false;
            }
        }
        if (spezifikation.RegEx) {
            const regex = RegExp(this.spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }
}

class Eingabefeld {
    private spezifikation: any;
    private testObjekte: Map<string, Test>;
    public constructor(spezifikation:any) {
        this.spezifikation = spezifikation;
    }
    public registriereTest(typ: string, testobjekt: Test) {
        this.testObjekte.set(typ, testobjekt);
    }
    // Diese Funktion soll prüfen, ob ein Text der Spezifikation entspricht:
    public test(text: string): boolean {
        const testObjekt = this.testObjekte.get(this.spezifikation.Typ);
        return testObjekt.test(text, this.spezifikation);
    
        // switch (this.spezifikation.Typ) {
        //     case "integer":
        //         return this.testInteger(text);
        //     case "string":
        //         return this.testString(text);
        //     case "date":
        //         return this.testDate(text);
        //     case "boolean":
        //         return this.testBoolean(text);
        //     case "float":
        //         return this.testFloat(text);
        //     default:
        //         throw new Error("Ungültiger Typ.");
        // }
    }

    private testString(text: string): boolean {
        if (this.spezifikation.MaxLänge) {
            if (text.length > this.spezifikation.MaxLänge) {
                return false;
            }
        }
        if (this.spezifikation.MöglicheWerte) {
            if (!this.spezifikation.MöglicheWerte.includes(text)) {
                return false;
            }
        }
        if (this.spezifikation.RegEx) {
            const regex = RegExp(this.spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }

    // Übung:
    // Probiere die Funktion testInteger(text) zu schreiben:
    private testInteger(text: string): boolean {
        const intWert = parseInt(text, 10);
        if (intWert === NaN) {
            return false;
        }
        if (this.spezifikation.MaxLänge) {
            if (text.length > this.spezifikation.MaxLänge) {
                return false;
            }
        }
        if (this.spezifikation.MöglicheWerte) {
            if (!this.spezifikation.MöglicheWerte.includes(intWert)) {
                return false;
            }
        }
        if (this.spezifikation.Max) {
            if (intWert > this.spezifikation.Max) {
                return false;
            }
        }
        if (this.spezifikation.Min) {
            if (intWert < this.spezifikation.Min) {
                return false;
            }
        }
        if (this.spezifikation.RegEx) {
            const regex = RegExp(this.spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }

    private testFloat(text: string): boolean {
        const floatWert = parseFloat(text);
        if (floatWert === NaN) {
            return false;
        }
        if (this.spezifikation.MaxLänge) {
            if (text.length > this.spezifikation.MaxLänge) {
                return false;
            }
        }
        if (this.spezifikation.MöglicheWerte) {
            if (!this.spezifikation.MöglicheWerte.includes(floatWert)) {
                return false;
            }
        }
        if (this.spezifikation.Max) {
            if (floatWert > this.spezifikation.Max) {
                return false;
            }
        }
        if (this.spezifikation.Min) {
            if (floatWert < this.spezifikation.Min) {
                return false;
            }
        }
        if (this.spezifikation.RegEx) {
            const regex = RegExp(this.spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }
    private testBoolean(text:string) {
        if (this.spezifikation.Min === true) {
            if (text==="false") {
                return false;
            }
        }
        if (this.spezifikation.Max === false) {
            if (text==="true") {
                return false;
            }
        }
    }

    private testDate(text: string): boolean {
        const datum = Date.parse(text);
        if (isNaN(datum)) {
            return false;
        }
        return true;
    } 
}

document.write("Test von string, Länge 3, Mögliche Werte Er, Sie, Es<br>")
const meinEingabefeld = new Eingabefeld({
    "Typ": "string",
    "MaxLänge": 3,
    "MöglicheWerte": ['Er', 'Sie', 'Es']
});

document.write("Sie: " + meinEingabefeld.test('Sie') + "<br>");
document.write("Test: " + meinEingabefeld.test('Test') + "<br>");
document.write("xy: " + meinEingabefeld.test('xy') + "<br>");

document.write("<hr>Test von date:<br>");
const meinDatum = new Eingabefeld({
    "Typ": "date"
})
document.write("2020-12-10: " + meinDatum.test("2020-12-10") + "<br>");;
document.write("Hugo: " + meinDatum.test("Hugo") + "<br>");;

document.write("<hr>Test einer E-Mail-Adresse:<br>");
const meineEmail = new Eingabefeld({
    "Typ": "string",
    "RegEx": "[A-Za-z]+[A-Za-z0-9\.\-_]*@[a-z]+[a-z0-9\.\-_]*[0-9a-z]"
});

document.write("reichl.f@bs-hassfurt.de" + meineEmail.test("reichl.f@bs-hassfurt.de") + "<br>");
document.write("reichl.fbs-hassfurt.de." + meineEmail.test("reichl.fbs-hassfurt.de.") + "<br>");