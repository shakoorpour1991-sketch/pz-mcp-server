/** Name → tool definition for the whole process. */
export class ToolRegistry {
    byName = new Map();
    constructor(tools) {
        for (const tool of tools) {
            this.byName.set(tool.name, tool);
        }
    }
    get(name) {
        return this.byName.get(name);
    }
    list() {
        return [...this.byName.values()];
    }
}
//# sourceMappingURL=registry.js.map