// Übung Auto:
// Schreibe eine Klasse Auto.
// Ein Auto hat folgende Attribute (Variablen):
// Nummernschild, Geschwindigkeit und Tankinhalt.
// Ein Auto hat folgende Methoden (Funktionen):
// gasGeben(kmh): Damit wird das Auto um kmh schneller und verbraucht dabei kmh/10 Liter Benzin
// info(): Gibt Nummernschild, Geschwindigkeit und Tankinhalt aus.
// Erzeugt mindestens zwei Auto-Objekte und macht eine Probefahrt.

// Übung Getter und Setter
// Mache alle Attribute private und erstelle Getter und Setter soweit sinnvoll:
// * Das Nummernschild soll unveränderlich sein.
// * Die Geschwindigkeit darf nur zwischen 0 und 250 sein.
// * Der Tankinhalt zwischen 0 und 100. Außerdem darf der Tankinhalt nicht weniger werden.

// Übung Fehlerbehandlung mit Exceptions
// Sorge dafür, dass das Auto eine Exception wirft, also ein Error-Objekt,
// wenn kein Bezin mehr da ist um Gas zu geben.
// Orientiere Dich dabei am Beispiel vom Schüler.
// Nutze try-catch um den Fehler anzuzeigen und schaue Dir den Stack-Trace an.

// Übung: Eigene Fehlerklasse
// Erweitere die Klasse Error so, dass beim Werfen der Exception
// das Nummernschild des Autos mit angegeben werden kann.
// Beim Auswerten der Exception in catch soll man das Nummernschild
// abfragen können (getNummernschild).

class AutoError extends Error {
    private nummernschild: string;
    constructor(fehlermeldung: string, nummernschild: string) {
        super(fehlermeldung);
        this.nummernschild = nummernschild;
    }
    public getNummernschild(): string {
        return this.nummernschild;
    }
}

class Auto {
    nummernschild: string;
    geschwindigkeit: number;
    tankinhalt: number;

    constructor(nummernschild: string, tankinhalt: number) {
        this.nummernschild = nummernschild;
        this.geschwindigkeit = 0;
        this.tankinhalt = tankinhalt;
    }

    gasGeben(kmh: number) {
        if (kmh / 10 > this.tankinhalt) {
            throw new AutoError("Kein Benzin mehr im Tank", this.nummernschild);
        }
        this.geschwindigkeit = this.geschwindigkeit + kmh;
        this.tankinhalt = this.tankinhalt - kmh / 10;
    }

    public info() {
        document.write(this.nummernschild + ": " + this.geschwindigkeit + " km/h;"
            + this.tankinhalt + " Liter<br>");
    }
}

// Übung
// Erstelle die Klasse Cabrio, die von Auto erbt bzw. die Auto erweitert.
// Ein Cabrio hat zusätzlich die Methode verdeckÖffnen, mit dem man das Dach öffnet.
// Die info()-Methode soll zusätzlich anzeigen, ob das Verdeck geöffnet ist.

class Cabrio extends Auto {
    private verdeckOffen: boolean;

    public constructor(nummernschild: string) {
        super(nummernschild, 10);
        this.verdeckOffen = false;
    }

    public verdeckÖffnen() {
        this.verdeckOffen = true;
    }

    public info() {
        super.info();
        if (this.verdeckOffen) {
            document.write("Das Verdeck ist geöffnet.<br>");
        } else {
            document.write("Das Verdeck ist geschlossen.<br>");
        }
    }
}




function probefahrt(einAuto: Auto) {
    einAuto.info();
    einAuto.gasGeben(30);
    if (einAuto instanceof Cabrio) {
        einAuto.verdeckÖffnen();
    }
}

try {
    const bmw = new Auto("HAS-TS42", 1);
    const audi = new Cabrio("SW-CO13");
    probefahrt(bmw);
    probefahrt(audi);
} catch (fehler) {
    document.write(fehler.message);
    if (fehler instanceof AutoError) {
        document.write(" im Auto " + fehler.getNummernschild());
    }
    console.log(fehler);
}