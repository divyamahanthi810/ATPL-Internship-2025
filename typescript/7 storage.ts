class Storage <T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        if (index < 0 || index >= this.items.length) {
            throw new Error("Index out of bounds");
        }
        return this.items[index];
    }

    updateItem(index: number, newItem: T): void {
        if (index < 0 || index >= this.items.length) {
            throw new Error("Index out of bounds");
        }
        this.items[index] = newItem;
    }
    clearStorage(): void {
        this.items = [];
    }
    getAllItems(): T[] {
        return [...this.items];
    }
}
