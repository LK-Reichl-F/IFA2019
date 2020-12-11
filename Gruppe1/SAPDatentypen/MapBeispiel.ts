class Telefonbuch {
    private Einträge: Map<string, number>;
    public trageEin(name: string, nummer: number) {
        this.Einträge.set(name, nummer);
    }
    public suche(name: string): number {
        return this.Einträge.get(name);
    }
}

