# Architecture

JSBlock is a static browser application. It has no build pipeline or server-side component; the browser loads the page, local libraries, and application code directly.

## Components

- `index.html` contains the editor layout and loads scripts with `defer`. Blockly core loads first, then the JavaScript generator, Acorn, and finally `app.js`.
- `style.css` owns the responsive arcade-workbench layout and visual styling.
- `app.js` defines custom blocks and generators, owns the Blockly workspace, handles file operations, and manages code preview execution.
- `vendor/blockly/` is the pinned Blockly 12.3.1 browser distribution and license.
- `vendor/acorn/` is the pinned Acorn 8.15.0 parser and license.

## Workspace and generation

The palette creates custom Blockly blocks in the injected `workspace`. Blockly change events regenerate JavaScript through `javascript.javascriptGenerator`. The custom generator covers the app's native blocks, including game canvas operations and keyboard input. A `js_source` block emits its `CODE` field without rewriting it, allowing imported statements and unsupported syntax to remain in the program.

Variable blocks use normalized JavaScript identifiers, and the app declares referenced variables before generated statements. Repeat and animation blocks generate unique internal identifiers from their Blockly block IDs.

## JavaScript import

The **Import .js** control reads `.js`, `.mjs`, and `.cjs` files locally in the browser. `importJavaScript` first asks Acorn to parse the file as an ECMAScript module, then retries as a classic script with CommonJS-style top-level return enabled. If parsing fails, the current workspace is left unchanged.

For a parsed program, the importer takes source slices bounded by top-level AST statement ends. It creates a connected `js_source` Blockly statement block for each statement and labels it with the AST node type. Leading comments and intervening whitespace remain in those source slices. A final trailing comment or whitespace is included in the last block; comment-only input becomes one source block. Blockly serialization stores the source fields, so save/open preserves the imported text.

This is a source-preserving outline, not a full AST-to-Blockly translator: a whole function declaration, for example, appears as one block with its JavaScript source in the field. This avoids losing syntax that lacks a corresponding visual block.

## Project persistence

The workspace is serialized with Blockly's workspace serializer into a versioned object:

```json
{
  "format": "jsblock",
  "version": 1,
  "workspace": {}
}
```

Workspace edits are debounced into browser `localStorage`. **Save** downloads the same project representation as a `.jsblock` file. **Open** validates the format and version, then loads the workspace; if deserialization fails, the previous workspace is restored.

## Preview execution

The **Run** action sends the generated code to an `iframe` using `srcdoc`. The iframe has `sandbox="allow-scripts"` without `allow-same-origin`; a Content Security Policy blocks network connections and external resources. The frame exposes a 640 by 360 canvas, its 2D context as `ctx`, a `keys` set, and a small `game` helper object. Parent and frame exchange code and output through `postMessage`; the parent verifies the message source is the preview frame.

The frame compiles code with an async function so blocks such as `wait` can use `await`. This runner is suited to snippets and generated game programs, not arbitrary module execution. Imported `import`/`export` statements and syntax that is only valid at module top level will not execute in this function wrapper. The iframe isolation is a practical containment measure, not a hardened sandbox: generated code runs with `unsafe-eval` inside the frame and can consume frame resources.

## Supported boundaries

- Acorn parses standard JavaScript syntax supported by version 8.15.0. TypeScript and JSX need a different parser.
- Native Blockly blocks are a learning-oriented subset of JavaScript. The generic source block represents other valid syntax without translating its internal structure.
- The editor and its dependencies are static files; serve the directory over HTTP for reliable browser storage and asset behavior.
