# JSBlock

JSBlock is a browser-based JavaScript block editor with a canvas game preview. It combines purpose-built Blockly blocks with source-preserving JavaScript statement blocks, so learners can build games visually or inspect and organize existing JavaScript.

## Run locally

There is no build step or package installation. Serve the project directory with any static HTTP server. For example, with Python:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser. Keep the `vendor/` directory alongside the app files; Blockly and Acorn are loaded locally.

## Use the editor

- Drag blocks from the library into the workspace and connect statement blocks. Connect value blocks to their inputs.
- Select **Starter game** for a working arrow-key movement example.
- Select **Run** to execute generated code in the game preview. Focus the preview to use the arrow keys.
- Use **Restart** to run the last previewed code again.
- Select **Import .js** to parse a `.js`, `.mjs`, or `.cjs` file into connected blocks, one per top-level JavaScript statement. Each imported block retains its source text; the generated-code pane shows the combined program.
- Select **Open** for a JSBlock `.jsblock` or compatible JSON project. Select **Save** to download a `.jsblock` project. Changes are also autosaved in the current browser.
- Use **Edit JS** to run JavaScript directly in the preview, **Copy** to copy generated code, and **Export .js** to download it.

## JavaScript and import notes

The library includes blocks for values, arithmetic, variables, conditions, repeats, async waits, functions, canvas drawing, keyboard input, collision checks, and browser element queries. The **JavaScript statement** block is an escape hatch for syntax that does not have its own visual block.

Import uses Acorn to parse standard modern JavaScript and classic scripts. Imported code is represented at the top-level-statement granularity, not recursively translated into equivalent Blockly expressions. Source text is preserved in each block, including syntax that has no dedicated block. TypeScript and JSX are not supported by this JavaScript parser. Imported ES modules can be displayed and edited, but `import` and `export` statements cannot run inside the preview's function-based runner.

The preview provides `canvas`, `ctx`, `keys`, and `game` globals. `game` includes the canvas `width` and `height`, `random()`, and `clamp(value, min, max)`. The preview runner is for learning and local projects; it is not a hardened security boundary for untrusted code.

## Project files

- `index.html` provides the app markup and loads local dependencies.
- `style.css` contains the interface styles.
- `app.js` defines Blockly blocks, imports source, generates code, and runs the preview.
- `vendor/blockly/` contains Blockly 12.3.1 and its Apache-2.0 license.
- `vendor/acorn/` contains Acorn 8.15.0 and its MIT license.

See [Architecture.md](Architecture.md) for component boundaries and runtime flows. The project license is in [LICENSE](LICENSE).
