// Übungsaufgabe
// Programmiert und testet das Observer-Pattern

// Macht zuerst ein interface Observer.
// Dies beschreibt eine Methode update(),
// die keine Parameter hat und nichts zurückgibt.

// Dann programmiert die Klasse Subject:
// Die Methode attach(Observer) speichert einen
// Observer in einem Set ab. Siehe https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set
// Die Methode detach(Observer) löscht den Observer
// aus dem Set.
// Die Methode notify() geht alle Observer in einer
// for-of-Schleife durch und ruft bei ihnen update() auf.
// Siehe auch https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...of

// Die Klasse ConcreteSubject erbt von Subject.
// Mit SetState speichert sie einen Wert ab (bei uns einen string).
// und ruft danach notify() auf, damit alle Observer informiert werden.
// Die Methode getState() gibt einfach den string zurück.

// Die Klasse ConcreteObserver speichert das ConcreteSubject,
// für das sie sich interessiert.
// Wenn update() aufgerufen wird, holt sich der ConcreteObserver
// den neuen Wert vom ConcreteSubject mit getState() und zeigt ihn an.

