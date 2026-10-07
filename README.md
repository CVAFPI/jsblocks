# JSBlock

JSBlock is a browser-based JavaScript block editor with a canvas game preview. It combines purpose-built Blockly blocks with source-preserving JavaScript statement blocks, so learners can build games visually or inspect and organize existing JavaScript.

## Run locally

There is no build step or package installation. Serve the project directory with any static HTTP server. For example, with Python:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser. Keep the `vendor/` directory alongside the app files; Blockly and Acorn are loaded locally.

## Use the editor

- Search the block library with **Ctrl+/**. Drag blocks into the workspace and connect statements and values.
- Select a game template in the library to load and run it. Templates include player movement, coin collecting, falling obstacles, and a starfield runner.
- Select **Run** to execute generated code in the game preview. Focus the preview to use the arrow keys.
- Use **Stop code** to replace the preview and interrupt its current run. Console and alert output is rate-limited.
- Keyboard shortcuts: **Ctrl+Enter** runs, **Ctrl+Shift+Enter** stops, **Ctrl+S** saves, **Alt+O** opens a project, and **Alt+I** imports JavaScript.
- Use **Restart** to run the last previewed code again.
- Select **Import .js** to parse `.js`, `.mjs`, `.cjs`, `.jsx`, `.ts`, and `.tsx` files. Parsed JavaScript becomes connected source blocks, one per top-level statement; unrecognized syntax is retained in a single editable source block.
- Select **Open** for a JSBlock `.jsblock` or compatible JSON project. Select **Save** to download a `.jsblock` project. Changes are also autosaved in the current browser.
- Use **Edit JS** to run JavaScript directly in the preview, **Copy** to copy generated code, and **Export .js** to download it.

## JavaScript and import notes

The library includes blocks for values, arithmetic, comparisons, boolean logic, variables, counted and conditional loops, arrays, objects, string operations, async waits, functions, canvas drawing, keyboard input, collision checks, and browser element queries. The **JavaScript statement** block is an escape hatch for syntax that does not have its own visual block.

Import uses Acorn to parse modern JavaScript modules and classic scripts. Imported code is represented at the top-level-statement granularity, not recursively translated into equivalent Blockly expressions. Source text is preserved in each block, including syntax that has no dedicated block. TypeScript, JSX, and other parser extensions are retained as a single source block but are not transpiled, so they cannot run until converted to standard JavaScript. During preview only, static `import` lines are skipped because external dependencies are unavailable in the offline sandbox; `export` wrappers are adapted where possible, and `import.meta.url` points to the local preview document. CommonJS `module.exports` is available, but `require()` reports an error because package dependencies cannot be loaded. Module dependency behavior is therefore not equivalent to a bundler or Node.js.

The preview provides `canvas`, `ctx`, `keys`, and `game` globals. `game` includes the canvas `width` and `height`, `random()`, and `clamp(value, min, max)`. The preview runner is for learning and local projects; it is not a hardened security boundary for untrusted code.

## Project files

- `index.html` provides the app markup and loads local dependencies.
- `style.css` contains the interface styles.
- `app.js` defines Blockly blocks, imports source, generates code, and runs the preview.
- `vendor/blockly/` contains Blockly 12.3.1 and its Apache-2.0 license.
- `vendor/acorn/` contains Acorn 8.15.0 and its MIT license.

See [Architecture.md](Architecture.md) for component boundaries and runtime flows. The project license is in [LICENSE](LICENSE). want to do it on the web? go to [cvasnet](https://cvasnet.dpdns.org/codeblocks/jsblocks/), its the same and hassle free (May be offline in the weekends)
