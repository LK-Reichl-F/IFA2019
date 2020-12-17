// Übung:
// Teste selbst das Observer Pattern.
// Orientiere Dich dazu am Klassendiagramm:

// Schreibe zuerst das Observer-Interface
// Es hat nur die Methode update(), die nichts zurückgibt.

// Danach programmiere die Klasse Subject.
// Sie hat die Methoden attach und detach, die
// einen Observer speichern.
// Verwende dazu einen Set. Siehe https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set
// Die Methode notify() geht mit einer for-of-Schleife https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...of
// durch die Werte im Set durch und ruft für jedes Objekt die update-Funktion auf.

// Die Klasse ConcreteSubject erbt von Subject.
// Die Methode setState(daten:string) speichert
// einen String ab und ruft danach this.notify() auf,
// so dass alle angemeldeten Observer einen update-Aufruf
// bekommen.
// Die Methode getState():string gibt den gespeicherten
// string zurück.

// Die Klasse ConcreteObserver erfüllt das interface
// Observer.
// Deshalb hat sie eine Methode update().
// Diese Methode holt sich vom ConcreteSubject
// den neuen String und zeigt ihn an.
// Damit sie das kann, muss im Konstruktor von
// ConcreteObserver das ConcreteSubject abgespeichert sein.
// Außerdem muss sich der ConcreteObserver beim
// ConcreteSubject mit attach anmelden.

