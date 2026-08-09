import { z } from "zod";
export declare const SearchVanillaSchema: z.ZodObject<{
    query: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle", "all"]>>;
    category: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodString>;
    metalValueMin: z.ZodOptional<z.ZodNumber>;
    metalValueMax: z.ZodOptional<z.ZodNumber>;
    attachmentType: z.ZodOptional<z.ZodString>;
    minWeight: z.ZodOptional<z.ZodNumber>;
    maxWeight: z.ZodOptional<z.ZodNumber>;
    minCalories: z.ZodOptional<z.ZodNumber>;
    maxCalories: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    query: string;
    type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | "all" | undefined;
    tags?: string | undefined;
    category?: string | undefined;
    metalValueMin?: number | undefined;
    metalValueMax?: number | undefined;
    attachmentType?: string | undefined;
    minWeight?: number | undefined;
    maxWeight?: number | undefined;
    minCalories?: number | undefined;
    maxCalories?: number | undefined;
}, {
    query: string;
    type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | "all" | undefined;
    tags?: string | undefined;
    category?: string | undefined;
    limit?: number | undefined;
    metalValueMin?: number | undefined;
    metalValueMax?: number | undefined;
    attachmentType?: string | undefined;
    minWeight?: number | undefined;
    maxWeight?: number | undefined;
    minCalories?: number | undefined;
    maxCalories?: number | undefined;
}>;
export declare const SearchRecipesSchema: z.ZodObject<{
    query: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    skill: z.ZodOptional<z.ZodString>;
    minSkillLevel: z.ZodOptional<z.ZodNumber>;
    maxSkillLevel: z.ZodOptional<z.ZodNumber>;
    ingredient: z.ZodOptional<z.ZodString>;
    tool: z.ZodOptional<z.ZodString>;
    result: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    ingredient?: string | undefined;
    tool?: string | undefined;
    category?: string | undefined;
    skill?: string | undefined;
    result?: string | undefined;
    query?: string | undefined;
    minSkillLevel?: number | undefined;
    maxSkillLevel?: number | undefined;
}, {
    ingredient?: string | undefined;
    tool?: string | undefined;
    category?: string | undefined;
    skill?: string | undefined;
    result?: string | undefined;
    limit?: number | undefined;
    query?: string | undefined;
    minSkillLevel?: number | undefined;
    maxSkillLevel?: number | undefined;
}>;
export declare const GenerateScriptSchema: z.ZodObject<{
    type: z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle"]>;
    name: z.ZodString;
    properties: z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodAny>, Record<string, any>, Record<string, any>>;
    module: z.ZodDefault<z.ZodString>;
    balance: z.ZodOptional<z.ZodEnum<["vanilla", "powerful", "weak", "custom"]>>;
    includeComments: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
    name: string;
    module: string;
    properties: Record<string, any>;
    balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
    includeComments?: boolean | undefined;
}, {
    type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
    name: string;
    properties: Record<string, any>;
    module?: string | undefined;
    balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
    includeComments?: boolean | undefined;
}>;
export declare const ValidateScriptSchema: z.ZodObject<{
    content: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle"]>>;
    strict: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    content: string;
    strict: boolean;
    type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | undefined;
}, {
    content: string;
    type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | undefined;
    strict?: boolean | undefined;
}>;
export declare const CheckReferencesSchema: z.ZodObject<{
    references: z.ZodArray<z.ZodString, "many">;
    type: z.ZodDefault<z.ZodEnum<["item", "sound", "sprite", "all"]>>;
}, "strip", z.ZodTypeAny, {
    type: "item" | "sound" | "all" | "sprite";
    references: string[];
}, {
    references: string[];
    type?: "item" | "sound" | "all" | "sprite" | undefined;
}>;
export declare const AnalyzeModSchema: z.ZodObject<{
    modPath: z.ZodString;
    checkBalance: z.ZodDefault<z.ZodBoolean>;
    checkCompatibility: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    checkBalance: boolean;
    checkCompatibility: boolean;
    modPath: string;
}, {
    modPath: string;
    checkBalance?: boolean | undefined;
    checkCompatibility?: boolean | undefined;
}>;
export declare const ParseGameFilesSchema: z.ZodObject<{
    gamePath: z.ZodOptional<z.ZodString>;
    forceReparse: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    forceReparse: boolean;
    gamePath?: string | undefined;
}, {
    gamePath?: string | undefined;
    forceReparse?: boolean | undefined;
}>;
export declare const IndexKnowledgeBaseSchema: z.ZodObject<{
    path: z.ZodOptional<z.ZodString>;
    overwrite: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    overwrite: boolean;
    path?: string | undefined;
}, {
    path?: string | undefined;
    overwrite?: boolean | undefined;
}>;
export declare const AnalyzeRecipeChainSchema: z.ZodObject<{
    seed: z.ZodString;
    direction: z.ZodDefault<z.ZodEnum<["upstream", "downstream", "both"]>>;
    maxDepth: z.ZodDefault<z.ZodNumber>;
    expandNode: z.ZodOptional<z.ZodString>;
    target: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    seed: string;
    maxDepth: number;
    direction: "upstream" | "downstream" | "both";
    expandNode?: string | undefined;
    target?: string | undefined;
}, {
    seed: string;
    maxDepth?: number | undefined;
    direction?: "upstream" | "downstream" | "both" | undefined;
    expandNode?: string | undefined;
    target?: string | undefined;
}>;
export declare const DetectRecipeConflictsSchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
}, {
    limit?: number | undefined;
}>;
export declare const ExportModScriptSchema: z.ZodObject<{
    modPath: z.ZodString;
    type: z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle"]>;
    name: z.ZodString;
    properties: z.ZodDefault<z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodAny>, Record<string, any>, Record<string, any>>>;
    module: z.ZodDefault<z.ZodString>;
    balance: z.ZodOptional<z.ZodEnum<["vanilla", "powerful", "weak", "custom"]>>;
    includeComments: z.ZodOptional<z.ZodBoolean>;
    dryRun: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
    name: string;
    module: string;
    properties: Record<string, any>;
    modPath: string;
    dryRun: boolean;
    balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
    includeComments?: boolean | undefined;
}, {
    type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
    name: string;
    modPath: string;
    module?: string | undefined;
    properties?: Record<string, any> | undefined;
    balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
    includeComments?: boolean | undefined;
    dryRun?: boolean | undefined;
}>;
export declare const SearchKnowledgeBaseSchema: z.ZodObject<{
    query: z.ZodString;
    topic: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    query: string;
    topic?: string | undefined;
}, {
    query: string;
    limit?: number | undefined;
    topic?: string | undefined;
}>;
export declare const WorkshopSearchSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    query: string;
}, {
    query: string;
    limit?: number | undefined;
}>;
export declare const WorkshopGetDetailsSchema: z.ZodObject<{
    id: z.ZodString;
    forceRefresh: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    forceRefresh: boolean;
}, {
    id: string;
    forceRefresh?: boolean | undefined;
}>;
export declare const WorkshopDownloadSchema: z.ZodObject<{
    id: z.ZodString;
    dryRun: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    dryRun: boolean;
}, {
    id: string;
    dryRun?: boolean | undefined;
}>;
export declare const WorkshopAnalyzeSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const ListKnowledgeTopicsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
/** Workspace / mod project management tools */
export declare const CreateModSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    template: z.ZodOptional<z.ZodEnum<["B42", "B41"]>>;
    targetDir: z.ZodString;
    createLuaFolder: z.ZodDefault<z.ZodBoolean>;
    createSoundFolder: z.ZodDefault<z.ZodBoolean>;
    createTexturesFolder: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    targetDir: string;
    createLuaFolder: boolean;
    createSoundFolder: boolean;
    createTexturesFolder: boolean;
    id?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    version?: string | undefined;
    template?: "B42" | "B41" | undefined;
}, {
    name: string;
    targetDir: string;
    id?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    version?: string | undefined;
    template?: "B42" | "B41" | undefined;
    createLuaFolder?: boolean | undefined;
    createSoundFolder?: boolean | undefined;
    createTexturesFolder?: boolean | undefined;
}>;
export declare const InspectModSchema: z.ZodObject<{
    modPath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    modPath: string;
}, {
    modPath: string;
}>;
export declare const ListModFilesSchema: z.ZodObject<{
    modPath: z.ZodString;
    type: z.ZodDefault<z.ZodEnum<["all", "script", "lua", "asset", "data", "doc", "config", "other"]>>;
    pattern: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "data" | "all" | "lua" | "script" | "asset" | "doc" | "config" | "other";
    modPath: string;
    pattern?: string | undefined;
}, {
    modPath: string;
    type?: "data" | "all" | "lua" | "script" | "asset" | "doc" | "config" | "other" | undefined;
    pattern?: string | undefined;
}>;
export declare const ReadModFileSchema: z.ZodObject<{
    modPath: z.ZodString;
    filePath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    filePath: string;
    modPath: string;
}, {
    filePath: string;
    modPath: string;
}>;
export declare const WriteModFileSchema: z.ZodObject<{
    modPath: z.ZodString;
    filePath: z.ZodString;
    content: z.ZodString;
    overwrite: z.ZodDefault<z.ZodBoolean>;
    createBackup: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    content: string;
    filePath: string;
    modPath: string;
    createBackup: boolean;
    overwrite: boolean;
}, {
    content: string;
    filePath: string;
    modPath: string;
    createBackup?: boolean | undefined;
    overwrite?: boolean | undefined;
}>;
export declare const DeleteModFileSchema: z.ZodObject<{
    modPath: z.ZodString;
    filePath: z.ZodString;
    createBackup: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    filePath: string;
    modPath: string;
    createBackup: boolean;
}, {
    filePath: string;
    modPath: string;
    createBackup?: boolean | undefined;
}>;
export declare const RenameModFileSchema: z.ZodObject<{
    modPath: z.ZodString;
    oldPath: z.ZodString;
    newPath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    modPath: string;
    oldPath: string;
    newPath: string;
}, {
    modPath: string;
    oldPath: string;
    newPath: string;
}>;
export declare const ValidateModSchema: z.ZodObject<{
    modPath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    modPath: string;
}, {
    modPath: string;
}>;
export declare const GetModDependenciesSchema: z.ZodObject<{
    modPath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    modPath: string;
}, {
    modPath: string;
}>;
export declare const GetProjectStatusSchema: z.ZodObject<{
    modPath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    modPath: string;
}, {
    modPath: string;
}>;
/**
 * Tool name → input schema. Imported by admin/bridge.mjs so the dashboard can
 * (1) normalize every tools/list reply into proper JSON Schema from the live
 * schemas, and (2) pre-validate tools/call arguments before relaying them.
 */
export declare const TOOL_SCHEMAS: {
    search_vanilla: z.ZodObject<{
        query: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle", "all"]>>;
        category: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodString>;
        metalValueMin: z.ZodOptional<z.ZodNumber>;
        metalValueMax: z.ZodOptional<z.ZodNumber>;
        attachmentType: z.ZodOptional<z.ZodString>;
        minWeight: z.ZodOptional<z.ZodNumber>;
        maxWeight: z.ZodOptional<z.ZodNumber>;
        minCalories: z.ZodOptional<z.ZodNumber>;
        maxCalories: z.ZodOptional<z.ZodNumber>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        query: string;
        type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | "all" | undefined;
        tags?: string | undefined;
        category?: string | undefined;
        metalValueMin?: number | undefined;
        metalValueMax?: number | undefined;
        attachmentType?: string | undefined;
        minWeight?: number | undefined;
        maxWeight?: number | undefined;
        minCalories?: number | undefined;
        maxCalories?: number | undefined;
    }, {
        query: string;
        type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | "all" | undefined;
        tags?: string | undefined;
        category?: string | undefined;
        limit?: number | undefined;
        metalValueMin?: number | undefined;
        metalValueMax?: number | undefined;
        attachmentType?: string | undefined;
        minWeight?: number | undefined;
        maxWeight?: number | undefined;
        minCalories?: number | undefined;
        maxCalories?: number | undefined;
    }>;
    search_recipes: z.ZodObject<{
        query: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skill: z.ZodOptional<z.ZodString>;
        minSkillLevel: z.ZodOptional<z.ZodNumber>;
        maxSkillLevel: z.ZodOptional<z.ZodNumber>;
        ingredient: z.ZodOptional<z.ZodString>;
        tool: z.ZodOptional<z.ZodString>;
        result: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        ingredient?: string | undefined;
        tool?: string | undefined;
        category?: string | undefined;
        skill?: string | undefined;
        result?: string | undefined;
        query?: string | undefined;
        minSkillLevel?: number | undefined;
        maxSkillLevel?: number | undefined;
    }, {
        ingredient?: string | undefined;
        tool?: string | undefined;
        category?: string | undefined;
        skill?: string | undefined;
        result?: string | undefined;
        limit?: number | undefined;
        query?: string | undefined;
        minSkillLevel?: number | undefined;
        maxSkillLevel?: number | undefined;
    }>;
    generate_script: z.ZodObject<{
        type: z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle"]>;
        name: z.ZodString;
        properties: z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodAny>, Record<string, any>, Record<string, any>>;
        module: z.ZodDefault<z.ZodString>;
        balance: z.ZodOptional<z.ZodEnum<["vanilla", "powerful", "weak", "custom"]>>;
        includeComments: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
        name: string;
        module: string;
        properties: Record<string, any>;
        balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
        includeComments?: boolean | undefined;
    }, {
        type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
        name: string;
        properties: Record<string, any>;
        module?: string | undefined;
        balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
        includeComments?: boolean | undefined;
    }>;
    validate_script: z.ZodObject<{
        content: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle"]>>;
        strict: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        strict: boolean;
        type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | undefined;
    }, {
        content: string;
        type?: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle" | undefined;
        strict?: boolean | undefined;
    }>;
    check_references: z.ZodObject<{
        references: z.ZodArray<z.ZodString, "many">;
        type: z.ZodDefault<z.ZodEnum<["item", "sound", "sprite", "all"]>>;
    }, "strip", z.ZodTypeAny, {
        type: "item" | "sound" | "all" | "sprite";
        references: string[];
    }, {
        references: string[];
        type?: "item" | "sound" | "all" | "sprite" | undefined;
    }>;
    analyze_mod: z.ZodObject<{
        modPath: z.ZodString;
        checkBalance: z.ZodDefault<z.ZodBoolean>;
        checkCompatibility: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        checkBalance: boolean;
        checkCompatibility: boolean;
        modPath: string;
    }, {
        modPath: string;
        checkBalance?: boolean | undefined;
        checkCompatibility?: boolean | undefined;
    }>;
    parse_game_files: z.ZodObject<{
        gamePath: z.ZodOptional<z.ZodString>;
        forceReparse: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        forceReparse: boolean;
        gamePath?: string | undefined;
    }, {
        gamePath?: string | undefined;
        forceReparse?: boolean | undefined;
    }>;
    index_knowledge_base: z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        overwrite: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        overwrite: boolean;
        path?: string | undefined;
    }, {
        path?: string | undefined;
        overwrite?: boolean | undefined;
    }>;
    analyze_recipe_chain: z.ZodObject<{
        seed: z.ZodString;
        direction: z.ZodDefault<z.ZodEnum<["upstream", "downstream", "both"]>>;
        maxDepth: z.ZodDefault<z.ZodNumber>;
        expandNode: z.ZodOptional<z.ZodString>;
        target: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        seed: string;
        maxDepth: number;
        direction: "upstream" | "downstream" | "both";
        expandNode?: string | undefined;
        target?: string | undefined;
    }, {
        seed: string;
        maxDepth?: number | undefined;
        direction?: "upstream" | "downstream" | "both" | undefined;
        expandNode?: string | undefined;
        target?: string | undefined;
    }>;
    detect_recipe_conflicts: z.ZodObject<{
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
    }, {
        limit?: number | undefined;
    }>;
    export_mod_script: z.ZodObject<{
        modPath: z.ZodString;
        type: z.ZodEnum<["item", "recipe", "evolvedrecipe", "fixing", "sound", "vehicle"]>;
        name: z.ZodString;
        properties: z.ZodDefault<z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodAny>, Record<string, any>, Record<string, any>>>;
        module: z.ZodDefault<z.ZodString>;
        balance: z.ZodOptional<z.ZodEnum<["vanilla", "powerful", "weak", "custom"]>>;
        includeComments: z.ZodOptional<z.ZodBoolean>;
        dryRun: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
        name: string;
        module: string;
        properties: Record<string, any>;
        modPath: string;
        dryRun: boolean;
        balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
        includeComments?: boolean | undefined;
    }, {
        type: "item" | "recipe" | "evolvedrecipe" | "fixing" | "sound" | "vehicle";
        name: string;
        modPath: string;
        module?: string | undefined;
        properties?: Record<string, any> | undefined;
        balance?: "vanilla" | "powerful" | "weak" | "custom" | undefined;
        includeComments?: boolean | undefined;
        dryRun?: boolean | undefined;
    }>;
    search_knowledge_base: z.ZodObject<{
        query: z.ZodString;
        topic: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        query: string;
        topic?: string | undefined;
    }, {
        query: string;
        limit?: number | undefined;
        topic?: string | undefined;
    }>;
    workshop_search: z.ZodObject<{
        query: z.ZodString;
        limit: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        query: string;
    }, {
        query: string;
        limit?: number | undefined;
    }>;
    workshop_get_details: z.ZodObject<{
        id: z.ZodString;
        forceRefresh: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        forceRefresh: boolean;
    }, {
        id: string;
        forceRefresh?: boolean | undefined;
    }>;
    workshop_download: z.ZodObject<{
        id: z.ZodString;
        dryRun: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        dryRun: boolean;
    }, {
        id: string;
        dryRun?: boolean | undefined;
    }>;
    workshop_analyze: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    list_knowledge_topics: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    workspace_create_mod: z.ZodObject<{
        name: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        template: z.ZodOptional<z.ZodEnum<["B42", "B41"]>>;
        targetDir: z.ZodString;
        createLuaFolder: z.ZodDefault<z.ZodBoolean>;
        createSoundFolder: z.ZodDefault<z.ZodBoolean>;
        createTexturesFolder: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        targetDir: string;
        createLuaFolder: boolean;
        createSoundFolder: boolean;
        createTexturesFolder: boolean;
        id?: string | undefined;
        author?: string | undefined;
        description?: string | undefined;
        version?: string | undefined;
        template?: "B42" | "B41" | undefined;
    }, {
        name: string;
        targetDir: string;
        id?: string | undefined;
        author?: string | undefined;
        description?: string | undefined;
        version?: string | undefined;
        template?: "B42" | "B41" | undefined;
        createLuaFolder?: boolean | undefined;
        createSoundFolder?: boolean | undefined;
        createTexturesFolder?: boolean | undefined;
    }>;
    workspace_inspect_mod: z.ZodObject<{
        modPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        modPath: string;
    }, {
        modPath: string;
    }>;
    workspace_list_files: z.ZodObject<{
        modPath: z.ZodString;
        type: z.ZodDefault<z.ZodEnum<["all", "script", "lua", "asset", "data", "doc", "config", "other"]>>;
        pattern: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "data" | "all" | "lua" | "script" | "asset" | "doc" | "config" | "other";
        modPath: string;
        pattern?: string | undefined;
    }, {
        modPath: string;
        type?: "data" | "all" | "lua" | "script" | "asset" | "doc" | "config" | "other" | undefined;
        pattern?: string | undefined;
    }>;
    workspace_read_file: z.ZodObject<{
        modPath: z.ZodString;
        filePath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        filePath: string;
        modPath: string;
    }, {
        filePath: string;
        modPath: string;
    }>;
    workspace_write_file: z.ZodObject<{
        modPath: z.ZodString;
        filePath: z.ZodString;
        content: z.ZodString;
        overwrite: z.ZodDefault<z.ZodBoolean>;
        createBackup: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        filePath: string;
        modPath: string;
        createBackup: boolean;
        overwrite: boolean;
    }, {
        content: string;
        filePath: string;
        modPath: string;
        createBackup?: boolean | undefined;
        overwrite?: boolean | undefined;
    }>;
    workspace_delete_file: z.ZodObject<{
        modPath: z.ZodString;
        filePath: z.ZodString;
        createBackup: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        filePath: string;
        modPath: string;
        createBackup: boolean;
    }, {
        filePath: string;
        modPath: string;
        createBackup?: boolean | undefined;
    }>;
    workspace_rename_file: z.ZodObject<{
        modPath: z.ZodString;
        oldPath: z.ZodString;
        newPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        modPath: string;
        oldPath: string;
        newPath: string;
    }, {
        modPath: string;
        oldPath: string;
        newPath: string;
    }>;
    workspace_validate_mod: z.ZodObject<{
        modPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        modPath: string;
    }, {
        modPath: string;
    }>;
    workspace_get_dependencies: z.ZodObject<{
        modPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        modPath: string;
    }, {
        modPath: string;
    }>;
    workspace_get_status: z.ZodObject<{
        modPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        modPath: string;
    }, {
        modPath: string;
    }>;
};
//# sourceMappingURL=schemas.d.ts.map