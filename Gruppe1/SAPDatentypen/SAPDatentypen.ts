// Überlege, wie man ein Eingabefeld in einem JSON-Objekt
// sinnvoll beschreiben kann:

// Beispiel:
const meinEingabefeld = {
    "Beschriftung": "Alter",
    "Typ": "integer",
    "BereichMin": 0,
    "BereichMax": 140
};

// console.log(meinEingabefeld.Beschriftung);

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
class TestString implements Test {
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

class TestInteger implements Test {
    test(text: string, spezifikation: any): boolean {
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

class TestFloat implements Test {
    test(text: string, spezifikation: any): boolean {
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

class TestDate implements Test {
    test(text: string, spezifikation: any): boolean {
        if (isNaN(Date.parse(text))) {
            return false;
        }
        return true;
    }
}

class Eingabefeld {
    private testMap: Map<string, Test>;
    private spezifikation: any;
    public constructor(spezifikation: any) {
        this.spezifikation = spezifikation;
        this.testMap = new Map<string, Test>();
    }
    public registriereTest(typ: string, einTest: Test) {
        this.testMap.set(typ, einTest);
    }
    public test(text: string): boolean {
        const testObjekt = this.testMap.get(this.spezifikation.Typ);
        if (testObjekt === undefined) {
            throw new Error("Für den Typ " + this.spezifikation.Typ + " gibt es keinen Test.");
        }
        return testObjekt.test(text, this.spezifikation);
    }
    public platziereDichAufDerHTMLSeite(wohin) {
        const ziel = document.getElementById(wohin);
        // Wir haben hier zwei Alternativen:

        // 1. Möglichkeit: Wir fügen einfach HTML-Text in die Seite ein:
        ziel.innerHTML = '<input type="text" id="info">';

        // 2. Möglichkeit: Wir erzeugen die HTML-Element in JavaScript/TypeScript und fügen sie in die Seite ein:
        const input = document.createElement("input");
        const type = document.createAttribute("type");
        type.value = "text";
        input.setAttributeNode(type);
        const id = document.createAttribute("id");
        id.value = "info";
        input.setAttributeNode(id); // Diese id muss eindeutig sein
        ziel.appendChild(input);
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
textEingabefeld.platziereDichAufDerHTMLSeite("ziel1");

console.log("Sie: " + textEingabefeld.test("Sie"));
console.log("Siehe: " + textEingabefeld.test("Siehe"));
console.log("x: " + textEingabefeld.test("x"));
console.log("xy: " + textEingabefeld.test("xy"));


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

console.log("1: " + integerEingabefeld.test("1"));
console.log("3: " + integerEingabefeld.test("3"));
console.log("13: " + integerEingabefeld.test("13"));
console.log("Hugo: " + integerEingabefeld.test("Hugo"));

const datumsEingabefeld = new Eingabefeld({
    "Typ": "date"
});
datumsEingabefeld.registriereTest("date", new TestDate());
console.log("2020-12-11: " + datumsEingabefeld.test("2020-12-11"));
console.log("Hugo: " + datumsEingabefeld.test("Hugo"));

