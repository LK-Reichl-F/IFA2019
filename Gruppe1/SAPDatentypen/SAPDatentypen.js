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
};
const meinGeburtstag = {
    "Beschriftung": "Geburtstag",
    "Typ": "date",
    "Format": "ISO8601",
    "FormatString": "YYYY-MM-DD",
    "Minimum": "1970-01-01",
    "Maximum": "2020-12-07"
};
const meinGeschlecht = {
    "Beschriftung": "Geschlecht",
    "Typ": "String",
    "MaximalLänge": 8,
    "möglicheWerte": ["männlich", "weiblich", "divers"]
};
const meinName = {
    "Beschriftung": "Name",
    "Typ": "String",
    "mussRegularExpressionEntsprechen": "..."
};
const meinPreis = {
    "Typ": "Integer",
    "BereichMindestens": 100,
    "BereichMaximum": 1000
};
// Diese Klasse erfüllt den Vertrag:
class TestString {
    test(text, spezifikation) {
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
class TestInteger {
    test(text, spezifikation) {
        const zahl = parseInt(text, 10);
        if (isNaN(zahl)) {
            return false;
        }
        if (spezifikation.Min) {
            if (zahl < spezifikation.Min) {
                return false;
            }
        }
        if (spezifikation.Max) {
            if (zahl > spezifikation.Max) {
                return false;
            }
        }
        if (spezifikation.MöglicheWerte) {
            if (!spezifikation.MöglicheWerte.includes(zahl)) {
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
class TestFloat {
    test(text, spezifikation) {
        const zahl = parseFloat(text);
        if (isNaN(zahl)) {
            return false;
        }
        if (spezifikation.Min) {
            if (zahl < spezifikation.Min) {
                return false;
            }
        }
        if (spezifikation.Max) {
            if (zahl > spezifikation.Max) {
                return false;
            }
        }
        if (spezifikation.MöglicheWerte) {
            if (!spezifikation.MöglicheWerte.includes(zahl)) {
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
class TestDate {
    test(text, spezifikation) {
        if (isNaN(Date.parse(text))) {
            return false;
        }
        return true;
    }
}
class Eingabefeld {
    constructor(spezifikation) {
        this.spezifikation = spezifikation;
        this.testMap = new Map();
    }
    registriereTest(typ, einTest) {
        this.testMap.set(typ, einTest);
    }
    test(text) {
        const testObjekt = this.testMap.get(this.spezifikation.Typ);
        if (testObjekt === undefined) {
            throw new Error("Für den Typ " + this.spezifikation.Typ + " gibt es keinen Test.");
        }
        return testObjekt.test(text, this.spezifikation);
    }
}
const textEingabefeld = new Eingabefeld({
    "Beschriftung": "Gib einen Text ein",
    "Typ": "string",
    "Mindestlänge": 2,
    "Maximallänge": 3,
    "MöglicheWerte": ["Er", "Sie", "Es"]
});
textEingabefeld.registriereTest("string", new TestString());
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
integerEingabefeld.registriereTest("integer", new TestInteger());
document.write("1: " + integerEingabefeld.test("1") + "<br>");
document.write("3: " + integerEingabefeld.test("3") + "<br>");
document.write("13: " + integerEingabefeld.test("13") + "<br>");
document.write("Hugo: " + integerEingabefeld.test("Hugo") + "<br>");
const datumsEingabefeld = new Eingabefeld({
    "Typ": "date"
});
datumsEingabefeld.registriereTest("date", new TestDate());
document.write("2020-12-11: " + datumsEingabefeld.test("2020-12-11") + "<br>");
document.write("Hugo: " + datumsEingabefeld.test("Hugo") + "<br>");
//# sourceMappingURL=SAPDatentypen.js.map