// Überlege, wie man ein Eingabefeld in einem JSON-Objekt
// sinnvoll beschreiben kann:

// Beispiel:
const meinEingabefeld = {
    "Beschriftung" : "Alter",
    "Typ" : "integer",
    "BereichMin" : 0,
    "BereichMax" : 140
};

document.write(meinEingabefeld.Beschriftung);

// Übung:
// Beschreibe etwa drei verschiedene Eingabefelder
// im JSON-Format, so dass sie später von unserem
// Programm ausgewertet werden können:

const meineEmailAdresse = {
    "Beschriftung" :  "E-Mail",
    "Typ" : "string",
    "Mindestlänge" : "1",
    "mussEnthalten" : "@",
    "mussDerRegularExpressionEntsprechen": "[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}"
}

const meinGeburtstag = {
    "Beschriftung" : "Geburtstag",
    "Typ":  "date",
    "Format": "ISO8601",
    "FormatString": "YYYY-MM-DD",
    "Minimum": "1970-01-01",
    "Maximum": "2020-12-07"
}

const meinGeschlecht = {
    "Beschriftung" : "Geschlecht",
    "Typ": "String",
    "MaximalLänge": 8,
    "möglicheWerte": ["männlich", "weiblich", "divers"]
}

const meinName = {
    "Beschriftung": "Name",
    "Typ": "String",
    "mussRegularExpressionEntsprechen" : "..."
}

const meinPreis = {
    "Typ": "Integer",
    "BereichMindestens": 100,
    "BereichMaximum": 1000
}

class Eingabefeld {
    private spezifikation;
    public constructor(spezifikation) {
        this.spezifikation = spezifikation;
    }
    public test(text: string): boolean {
        switch (this.spezifikation.Typ) {
            case "integer":
                return integerTest(text);
            case "string":
                return stringTest(text);
            case "date":
                return dateTest(text);
            case "float":
                return floatTest(text);
            default:
                return false;
        }
    }
}