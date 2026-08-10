/**
 * Structured API model extracted from generated JavaDoc HTML (javadoc
 * ClassWriter pages). This is the intermediate representation the ingestion
 * pipeline produces; the renderer converts it into the knowledge base's
 * preferred markdown representation for storage + FTS indexing.
 */

export type JavaDocKind =
  "class" | "interface" | "enum" | "annotation" | "record";

/** One method/constructor/field parameter. */
export interface JavaDocParam {
  name: string;
  /** Best-effort declared type (empty for `var`/untyped). */
  type?: string;
  /** From the `<dt>Parameters</dt>` javadoc block, when present. */
  description?: string;
}

export type JavaDocMemberKind = "field" | "constructor" | "method";

/** A field, constructor, or method declared on the type. */
export interface JavaDocMember {
  kind: JavaDocMemberKind;
  name: string;
  /** Full rendered signature, e.g. `public static void Load()`. */
  signature: string;
  /** Modifier words, e.g. `public static final`. */
  modifiers: string;
  /** Return type text (methods only). */
  returnType?: string;
  parameters: JavaDocParam[];
  /** Free-text javadoc description, when present. */
  description?: string;
  deprecated?: boolean;
}

/** One parsed JavaDoc class page. */
export interface JavaDocClass {
  /** Simple type name, e.g. `IsoObject` or `SandboxOptions.ZombieConfig`. */
  name: string;
  /** Java package, e.g. `zombie.iso`. */
  package: string;
  kind: JavaDocKind;
  /** package.Name (nested types keep the dot, e.g. `zombie.SandboxOptions.ZombieConfig`). */
  fullyQualifiedName: string;
  /** Class-level modifiers, e.g. `public final`. */
  modifiers: string;
  /** Full type signature line, e.g. `public final class IsoObject extends IsoGridSquare implements ...`. */
  signature: string;
  /** Inheritance chain root→leaf (last element is this type). */
  inheritance: string[];
  /** Superclass simple/FQN name, when the type-signature declares one. */
  superclass?: string;
  /** Directly implemented/extended interfaces from the type-signature. */
  interfaces: string[];
  description?: string;
  deprecated?: boolean;
  fields: JavaDocMember[];
  constructors: JavaDocMember[];
  methods: JavaDocMember[];
  /** Source/version tag found on the page (e.g. `Unofficial PZ JavaDocs 42.20.0`). */
  source: string;
  /** Extracted game/docs version (e.g. `42.20.0`), when available. */
  version?: string;
  /** Path of the HTML page this was parsed from (absolute). */
  filePath: string;
}
