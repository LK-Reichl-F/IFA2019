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
class Eingabefeld {
    constructor(spezifikation) {
        this.spezifikation = spezifikation;
    }
    test(text) {
        switch (this.spezifikation.Typ) {
            // case "integer":
            //     return this.integerTest(text);
            case "string":
                return this.stringTest(text);
            // case "date":
            //     return this.dateTest(text);
            // case "float":
            //     return this.floatTest(text);
            default:
                return false;
        }
    }
    stringTest(text) {
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
//# sourceMappingURL=SAPDatentypen.js.map