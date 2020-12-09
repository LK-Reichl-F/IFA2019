// Übung:
// Erstelle eine Klasse Auto
// Attribute (Variablen):
// Ein Auto hat ein Nummernschild, eine Geschwindigkeit und einen Tankinhalt.
// Methoden (Funktionen):
// Das Auto soll die Methode gasGeben(kmh) bekommen, die das Auto um kmh
// schneller macht und kmh/10 Liter Benzin verbraucht.
// Die Methode info() soll Nummernschild, Geschwindigkeit und Tankinhalt ausgeben.
// Baue zwei Autos und teste sie.
class Auto {
    constructor(nummernschild, tankinhalt) {
        this.nummernschild = nummernschild;
        this.geschwindigkeit = 0;
        this.tankinhalt = tankinhalt;
    }
    gasGeben(kmh) {
        this.geschwindigkeit = this.geschwindigkeit + kmh;
        this.tankinhalt = this.tankinhalt - kmh / 10;
    }
    info() {
        document.write(this.nummernschild + ": " + this.geschwindigkeit + " km/h; "
            + this.tankinhalt + " Liter<br>");
    }
}
const bmw = new Auto("HAS-TS42", 10);
const audi = new Auto("SW-CO17", 12);
bmw.info();
audi.info();
bmw.gasGeben(50);
audi.gasGeben(30);
bmw.info();
audi.info();
//# sourceMappingURL=Auto.js.map