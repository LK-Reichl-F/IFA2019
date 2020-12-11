// Überlege, wie man ein Eingabefeld in einem JSON-Objekt
// sinnvoll beschreiben kann:

// Beispiel:
const meinEingabefeld = {
    "Beschriftung": "Alter",
    "Typ": "integer",
    "BereichMin": 0,
    "BereichMax": 140
};

// document.write(meinEingabefeld.Beschriftung);

// Übung:
// Beschreibe etwa drei verschiedene Eingabefelder
// im JSON-Format, so dass sie später von unserem
// Programm ausgewertet werden können:

const meineEmailAdresse = {
    "Beschriftung": "E-Mail",
    "Typ": "string",
    "Mindestlänge": "1",
    "mussEnthalten": "@",
    "mussDerRegularExpressionEntsprechen": "[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}"
}

const meinGeburtstag = {
    "Beschriftung": "Geburtstag",
    "Typ": "date",
    "Format": "ISO8601",
    "FormatString": "YYYY-MM-DD",
    "Minimum": "1970-01-01",
    "Maximum": "2020-12-07"
}

const meinGeschlecht = {
    "Beschriftung": "Geschlecht",
    "Typ": "String",
    "MaximalLänge": 8,
    "möglicheWerte": ["männlich", "weiblich", "divers"]
}

const meinName = {
    "Beschriftung": "Name",
    "Typ": "String",
    "mussRegularExpressionEntsprechen": "..."
}

const meinPreis = {
    "Typ": "Integer",
    "BereichMindestens": 100,
    "BereichMaximum": 1000
}

// Ein interface ist so etwas wie ein Vertrag:
interface Test {
    test(text: string, spezifikation: any): boolean;
}

// Diese Klasse erfüllt den Vertrag:
class testString implements Test {
    test(text: string, spezifikation: any): boolean {
        const länge = text.length;
        if (spezifikation.Mindestlänge) {
            if (länge < spezifikation.Mindestlänge) {
                return false;
            }
        }
        if (spezifikation.MaximalLänge) {
            if (länge > spezifikation.Maximallänge) {
                return false;
            }
        }
        if (spezifikation.MöglicheWerte) {
            if (!spezifikation.MöglicheWerte.includes(text)) {
                return false;
            }
        }
        if (spezifikation.RegEx) {
            const regExp = new RegExp(spezifikation.RegEx);
            if (!regExp.test(text)) {
                return false;
            }
        }
        return true;
    }
}

class Eingabefeld {
    private testMap: Map<string, Test>;
    private spezifikation: any;
    public constructor(spezifikation: any) {
        this.spezifikation = spezifikation;
    }
    public registriereTest(einTest: Test, typ: string) {
        this.testMap.set(typ, einTest);
    } 
    public test(text: string): boolean {
        const test = this.testMap.get(this.spezifikation.Typ);
        if (test === undefined) {
            throw new Error("Für den Typ " + this.spezifikation.Typ + " gibt es keinen Test.");
        }
        return test.test(text, this.spezifikation);
        // switch (this.spezifikation.Typ) {
        //     case "integer":
        //         return this.integerTest(text);
        //     case "string":
        //         return this.stringTest(text);
        //     case "date":
        //         return this.dateTest(text);
        //     case "float":
        //         return this.floatTest(text);
        //     default:
        //         return false;
        // }
    }
    private stringTest(text: string): boolean {
        const länge = text.length;
        if (this.spezifikation.Mindestlänge) {
            if (länge < this.spezifikation.Mindestlänge) {
                return false;
            }
        }
        if (this.spezifikation.MaximalLänge) {
            if (länge > this.spezifikation.Maximallänge) {
                return false;
            }
        }
        if (this.spezifikation.MöglicheWerte) {
            if (!this.spezifikation.MöglicheWerte.includes(text)) {
                return false;
            }
        }
        if (this.spezifikation.RegEx) {
            const regExp = new RegExp(this.spezifikation.RegEx);
            if (!regExp.test(text)) {
                return false;
            }
        }
        return true;
    }

    private integerTest(text: string): boolean {
        const zahl = parseInt(text, 10);
        if (isNaN(zahl)) {
            return false;
        }
        if (this.spezifikation.Min) {
            if (zahl < this.spezifikation.Min) {
                return false;
            }
        }
        if (this.spezifikation.Max) {
            if (zahl > this.spezifikation.Max) {
                return false;
            }
        }
        if (this.spezifikation.MöglicheWerte) {
            if (!this.spezifikation.MöglicheWerte.includes(zahl)) {
                return false;
            }
        }
        if (this.spezifikation.RegEx) {
            const regExp = new RegExp(this.spezifikation.RegEx);
            if (!regExp.test(text)) {
                return false;
            }
        }
        return true;
    }

    private floatTest(text: string): boolean {
        const zahl = parseFloat(text);
        if (isNaN(zahl)) {
            return false;
        }
        if (this.spezifikation.Min) {
            if (zahl < this.spezifikation.Min) {
                return false;
            }
        }
        if (this.spezifikation.Max) {
            if (zahl > this.spezifikation.Max) {
                return false;
            }
        }
        if (this.spezifikation.MöglicheWerte) {
            if (!this.spezifikation.MöglicheWerte.includes(zahl)) {
                return false;
            }
        }
        if (this.spezifikation.RegEx) {
            const regExp = new RegExp(this.spezifikation.RegEx);
            if (!regExp.test(text)) {
                return false;
            }
        }
        return true;
    }

    private dateTest(text: string): boolean {
        console.log(Date.parse(text));
        if (isNaN(Date.parse(text))) {
            return false;
        }
        return true;
    }
}

const textEingabefeld = new Eingabefeld({
    "Beschriftung": "Gib einen Text ein",
    "Typ": "string",
    "Mindestlänge": 2,
    "Maximallänge": 3,
    "MöglicheWerte": ["Er", "Sie", "Es"]
});

document.write("Sie: " + textEingabefeld.test("Sie") + "<br>");
document.write("Siehe: " + textEingabefeld.test("Siehe") + "<br>");
document.write("x: " + textEingabefeld.test("x") + "<br>");
document.write("xy: " + textEingabefeld.test("xy") + "<br>");


// Übung:
// Programmiere den Test für den Typ integer
// Benutze parseInt

const integerEingabefeld = new Eingabefeld({
    "Typ": "integer",
    "Min": 0,
    "Max": 9,
    "MöglicheWerte": [3, 13]
});

document.write("1: " + integerEingabefeld.test("1") + "<br>");
document.write("3: " + integerEingabefeld.test("3") + "<br>");
document.write("13: " + integerEingabefeld.test("13") + "<br>");
document.write("Hugo: " + integerEingabefeld.test("Hugo") + "<br>");

const datumsEingabefeld = new Eingabefeld({
    "Typ": "date"
});
document.write("2020-12-11: " + datumsEingabefeld.test("2020-12-11") + "<br>");
document.write("Hugo: " + datumsEingabefeld.test("Hugo") + "<br>");

