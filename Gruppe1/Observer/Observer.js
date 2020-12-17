// Übungsaufgabe
// Programmiert und testet das Observer-Pattern
// Dann programmiert die Klasse Subject:
// Die Methode attach(Observer) speichert einen
// Observer in einem Set ab. Siehe https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set
// Die Methode detach(Observer) löscht den Observer
// aus dem Set.
// Die Methode notify() geht alle Observer in einer
// for-of-Schleife durch und ruft bei ihnen update() auf.
// Siehe auch https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...of
class Subject {
    constructor() {
        this.observerListe = new Set();
    }
    attach(einObserver) {
        this.observerListe.add(einObserver);
    }
    detach(einObserver) {
        this.observerListe.delete(einObserver);
    }
    notify() {
        for (let einObserver of this.observerListe) {
            einObserver.update();
        }
    }
}
// Die Klasse ConcreteSubject erbt von Subject.
// Mit SetState speichert sie einen Wert ab (bei uns einen string).
// und ruft danach notify() auf, damit alle Observer informiert werden.
// Die Methode getState() gibt einfach den string zurück.
class ConcreteSubject extends Subject {
    setState(neuerState) {
        this.state = neuerState;
        this.notify();
    }
    getState() {
        return this.state;
    }
}
// Die Klasse ConcreteObserver speichert das ConcreteSubject,
// für das sie sich interessiert.
// Wenn update() aufgerufen wird, holt sich der ConcreteObserver
// den neuen Wert vom ConcreteSubject mit getState() und zeigt ihn an.
class ConcreteObserver {
    constructor(subject) {
        this.meinSubject = subject;
    }
    update() {
        document.write(this.meinSubject.getState() + "<br>");
    }
}
const concreteSubject = new ConcreteSubject();
const hugo = new ConcreteObserver(concreteSubject);
concreteSubject.attach(hugo);
concreteSubject.setState("Hallo Hugo");
const irene = new ConcreteObserver(concreteSubject);
concreteSubject.attach(irene);
concreteSubject.setState("Hallo Irene");
//# sourceMappingURL=Observer.js.map