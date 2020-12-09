// Übung:
// Erstelle eine Klasse Auto
// Attribute (Variablen):
// Ein Auto hat ein Nummernschild, eine Geschwindigkeit und einen Tankinhalt.
// Methoden (Funktionen):
// Das Auto soll die Methode gasGeben(kmh) bekommen, die das Auto um kmh
// schneller macht und kmh/10 Liter Benzin verbraucht.
// Die Methode info() soll Nummernschild, Geschwindigkeit und Tankinhalt ausgeben.
// Baue zwei Autos und teste sie.

// Übung zum Exception-Handling
// Wirf beim gasGeben() eine Exception bzw. einen Error wenn kein Benzin
// vorhanden ist oder wenn kmh<0 ist.
// Überprüfe in der Probefahrt, ob eine Exception geworfen wurde und
// gib eine Fehlermeldung aus. Schau in den Stack Trace wo der Fehler
// aufgetreten ist.

class Auto {
    private nummernschild: string;
    private geschwindigkeit: number;
    private tankinhalt: number;

    public constructor(nummernschild: string, tankinhalt: number) {
        this.nummernschild = nummernschild;
        this.geschwindigkeit = 0;
        this.tankinhalt = tankinhalt;
    }

    public gasGeben(kmh: number): void {
        this.geschwindigkeit = this.geschwindigkeit + kmh;
        this.tankinhalt = this.tankinhalt - kmh / 10;
    }

    public info(): void {
        document.write(this.nummernschild + ": " + this.geschwindigkeit + " km/h; "
            + this.tankinhalt + " Liter<br>");
    }
}

// Übung:
// Erstelle eine Klasse Cabrio, die von Auto erbt.
// Die Funktion öffneVerdeck soll das Verdeck öffnen.
// Die Funktion info soll zusätzlich anzeigen, ob das Dach offen ist.

class Cabrio extends Auto {
    private verdeckOffen: boolean;

    public constructor(nummernschild:string, t: number) {
        super(nummernschild, t);
        this.verdeckOffen = false;
    }

    public öffneVerdeck(): void {
        this.verdeckOffen = true;
    }

    public info(): void {
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
    einAuto.gasGeben(50);
    if (einAuto instanceof Cabrio) {
        einAuto.öffneVerdeck();
    }
    einAuto.info();
}


const bmw = new Auto("HAS-TS42", 10);
const audi = new Cabrio("SW-CO17", 12);

probefahrt(bmw);
probefahrt(audi);