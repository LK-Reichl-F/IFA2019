const entfernung = {
    "Beschriftung": "km",
    "Typ": "Kommazahl",
    "Minimalwert": 0,
    "Maximalwert": 20000
};
const geschlecht = {
    "Beschriftung": "Geschlecht",
    "Typ": "String",
    "MöglicheWerte": ["männlich", "weiblich", "divers"]
};
const datum = {
    "Beschriftung": "Datum",
    "Typ": "Date",
    "Minimalwert": "1970-01-01",
    "Maximalwert": "2020-12-08"
};
const zustimmung = {
    "Beschriftung": "Sind Sie einverstanden?",
    "Typ": "boolean"
};
// document.write(entfernung.Beschriftung);
// document.write(geschlecht.MöglicheWerte[0]);
// Übung:
// Überlege Dir drei verschiedene Beschreibungen für
// Eingabefelder und wie Du sie im JSON-Format beschreiben würdest:
class Eingabefeld {
    constructor(spezifikation) {
        this.spezifikation = spezifikation;
    }
    // Diese Funktion soll prüfen, ob ein Text der Spezifikation entspricht:
    test(text) {
        switch (this.spezifikation.Typ) {
            case "integer":
                return this.testInteger(text);
            case "string":
                return this.testString(text);
            case "date":
                return this.testDate(text);
            case "boolean":
                return this.testBoolean(text);
            case "float":
                return this.testFloat(text);
            default:
                throw new Error("Ungültiger Typ.");
        }
    }
    testString(text) {
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
    testInteger(text) {
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
    testFloat(text) {
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
    testBoolean(text) {
        if (this.spezifikation.Min === true) {
            if (text === "false") {
                return false;
            }
        }
        if (this.spezifikation.Max === false) {
            if (text === "true") {
                return false;
            }
        }
    }
    testDate(text) {
        const datum = Date.parse(text);
        if (isNaN(datum)) {
            return false;
        }
        return true;
    }
}
document.write("Test von string, Länge 3, Mögliche Werte Er, Sie, Es<br>");
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
});
document.write("2020-12-10: " + meinDatum.test("2020-12-10") + "<br>");
;
document.write("Hugo: " + meinDatum.test("Hugo") + "<br>");
;
document.write("<hr>Test einer E-Mail-Adresse:<br>");
const meineEmail = new Eingabefeld({
    "Typ": "string",
    "RegEx": "[A-Za-z]+[A-Za-z0-9\.\-_]*@[a-z]+[a-z0-9\.\-_]*[0-9a-z]"
});
document.write("reichl.f@bs-hassfurt.de" + meineEmail.test("reichl.f@bs-hassfurt.de") + "<br>");
document.write("reichl.fbs-hassfurt.de." + meineEmail.test("reichl.fbs-hassfurt.de.") + "<br>");
//# sourceMappingURL=SAPDatentypen.js.map