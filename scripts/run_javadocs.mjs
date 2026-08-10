import { JavaDocIndexer } from "../dist/knowledge/javadocs/JavaDocIndexer.js";
import { javadocsKbDir } from "../dist/utils/config.js";
import { KnowledgeBaseManager } from "../dist/knowledge/KnowledgeBaseManager.js";

const SRC = "C:\\Users\\Administrator\\Desktop\\New folder\\gpt_research\\ProjectZomboidJavaDocs";
const OUT = javadocsKbDir();
const t0 = Date.now();
const ingest = await new JavaDocIndexer().ingest(SRC, OUT);
const kb = new KnowledgeBaseManager();
await kb.initialize();
const index = await kb.indexDirectory(OUT, { overwrite: true });
console.log(JSON.stringify({ seconds: (Date.now() - t0) / 1000, ingest, index }, null, 2));
