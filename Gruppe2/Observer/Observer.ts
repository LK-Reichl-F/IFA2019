// Übung:
// Teste selbst das Observer Pattern.
// Orientiere Dich dazu am Klassendiagramm:

// Schreibe zuerst das Observer-Interface
// Es hat nur die Methode update(), die nichts zurückgibt.

interface Observer {
    update(): void;
}

// Danach programmiere die Klasse Subject.
// Sie hat die Methoden attach und detach, die
// einen Observer speichern.
// Verwende dazu einen Set. Siehe https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set
// Die Methode notify() geht mit einer for-of-Schleife https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...of
// durch die Werte im Set durch und ruft für jedes Objekt die update-Funktion auf.

class Subject {
    private listeVonObservern = new Set<Observer>();
    public attach(observer: Observer): void {
        this.listeVonObservern.add(observer);
    }
    public detach(observer: Observer): void {
        this.listeVonObservern.delete(observer);
    }
    public notify(): void {
        for (let observer of this.listeVonObservern) {
            observer.update();
        }
    }
}

// Die Klasse ConcreteSubject erbt von Subject.
// Die Methode setState(daten:string) speichert
// einen String ab und ruft danach this.notify() auf,
// so dass alle angemeldeten Observer einen update-Aufruf
// bekommen.
// Die Methode getState():string gibt den gespeicherten
// string zurück.

class ConcreteSubject extends Subject {
    private state: string;
    public setState(neuerWert: string) {
        this.state = neuerWert;
        this.notify();
    }
    public getState(): string {
        return this.state;
    }
}

// Die Klasse ConcreteObserver erfüllt das interface
// Observer.
// Deshalb hat sie eine Methode update().
// Diese Methode holt sich vom ConcreteSubject
// den neuen String und zeigt ihn an.
// Damit sie das kann, muss im Konstruktor von
// ConcreteObserver das ConcreteSubject abgespeichert sein.
// Außerdem muss sich der ConcreteObserver beim
// ConcreteSubject mit attach anmelden.

class ConcreteObserver implements Observer {
    private subject: ConcreteSubject;
    public constructor(subject: ConcreteSubject) {
        this.subject = subject;
    }
    public update() {
        console.log(this.subject.getState());
    }
}

const meinSubject = new ConcreteSubject();
const meinObserver = new ConcreteObserver(meinSubject);
meinSubject.attach(meinObserver);
meinSubject.setState("Hello world");
const zweiterObserver = new ConcreteObserver(meinSubject);
meinSubject.attach(zweiterObserver);
meinSubject.setState("Zweite Nachricht");