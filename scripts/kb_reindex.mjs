import { KnowledgeBaseManager } from "../dist/knowledge/KnowledgeBaseManager.js";

const m = new KnowledgeBaseManager();
await m.initialize();
const res = await m.indexDirectory("D:\\PZ-Modding\\Documentation", { overwrite: true });
console.log(JSON.stringify(res, null, 2));
