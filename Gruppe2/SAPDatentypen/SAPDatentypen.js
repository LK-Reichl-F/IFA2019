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
// Die Klasse verspricht (mit implements), dass sie den Vertrag erfüllt:
class stringTest {
    test(text, spezifikation) {
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
            const regex = RegExp(spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }
}
class floatTest {
    test(text, spezifikation) {
        const floatWert = parseFloat(text);
        if (floatWert === NaN) {
            return false;
        }
        if (spezifikation.MaxLänge) {
            if (text.length > spezifikation.MaxLänge) {
                return false;
            }
        }
        if (spezifikation.MöglicheWerte) {
            if (!spezifikation.MöglicheWerte.includes(floatWert)) {
                return false;
            }
        }
        if (spezifikation.Max) {
            if (floatWert > spezifikation.Max) {
                return false;
            }
        }
        if (spezifikation.Min) {
            if (floatWert < spezifikation.Min) {
                return false;
            }
        }
        if (spezifikation.RegEx) {
            const regex = RegExp(spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }
}
// Die Klasse verspricht (mit implements), dass sie den Vertrag erfüllt:
class integerTest {
    test(text, spezifikation) {
        const intWert = parseInt(text, 10);
        if (intWert === NaN) {
            return false;
        }
        if (spezifikation.MaxLänge) {
            if (text.length > spezifikation.MaxLänge) {
                return false;
            }
        }
        if (spezifikation.MöglicheWerte) {
            if (!spezifikation.MöglicheWerte.includes(intWert)) {
                return false;
            }
        }
        if (spezifikation.Max) {
            if (intWert > spezifikation.Max) {
                return false;
            }
        }
        if (spezifikation.Min) {
            if (intWert < spezifikation.Min) {
                return false;
            }
        }
        if (spezifikation.RegEx) {
            const regex = RegExp(spezifikation.RegEx);
            if (!regex.test(text)) {
                return false;
            }
        }
        return true;
    }
}
class booleanTest {
    test(text, spezifikation) {
        if (spezifikation.Min === true) {
            if (text === "false") {
                return false;
            }
        }
        if (spezifikation.Max === false) {
            if (text === "true") {
                return false;
            }
        }
    }
}
class dateTest {
    test(text, spezifikation) {
        const datum = Date.parse(text);
        if (isNaN(datum)) {
            return false;
        }
        return true;
    }
}
class Eingabefeld {
    constructor(spezifikation) {
        this.spezifikation = spezifikation;
    }
    registriereTest(typ, testobjekt) {
        this.testObjekte.set(typ, testobjekt);
    }
    // Diese Funktion soll prüfen, ob ein Text der Spezifikation entspricht:
    test(text) {
        const testObjekt = this.testObjekte.get(this.spezifikation.Typ);
        if (testObjekt === undefined) {
            throw new Error("Es gibt einen Test für den Typ " + this.spezifikation.Typ);
        }
        return testObjekt.test(text, this.spezifikation);
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