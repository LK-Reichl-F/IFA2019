class Telefonbuch {
    constructor() {
        this.Einträge = new Map();
    }
    trageEin(name, nummer) {
        this.Einträge.set(name, nummer);
    }
    suche(name) {
        return this.Einträge.get(name);
    }
}
//# sourceMappingURL=MapBeispiel.js.map