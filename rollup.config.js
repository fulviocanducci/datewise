import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser"; // <- export default

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle/datewise.umd.js",
      format: "umd",
      name: "Datewise",
      sourcemap: true,
    },
    {
      file: "dist/bundle/datewise.umd.min.js",
      format: "umd",
      name: "Datewise",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // resolve node_modules → inclui Luxon
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
};
