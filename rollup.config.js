import alias from '@rollup/plugin-alias'
import terser from '@rollup/plugin-terser'
import svgr from '@svgr/rollup'
import fs from 'fs'
import path from 'path'
import { externals } from 'rollup-plugin-node-externals'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'

const SRC_DIR = 'src'
/**
 * entryPoints are the direct child directories under the src dir
 * each entryPoint directory should contain index.ts file containing its exports
 */
const entryPoints = fs.readdirSync(path.join(__dirname, SRC_DIR)).filter((dirName) => {
  return !/^\./.test(dirName) && fs.existsSync(path.join(__dirname, SRC_DIR, dirName, 'index.ts'))
})
const plugins = [
  externals({ deps: true, peerDeps: true }), // define package.json dependencies to be external ones
  typescript({
    typescript: require('ttypescript'), // resolve alias (e.g. @/services --> ../../services) in type declaration files
    tsconfigDefaults: {
      compilerOptions: {
        sourceMap: true, // without this option source map files were generated with empty content
        plugins: [
          { transform: 'typescript-transform-paths', afterDeclarations: true }, // resolve alias in type declaration files
        ],
      },
    },
  }),
  alias({
    resolve: ['.tsx', '.ts', '.scss', '.svg'],
    entries: [
      { find: '@/icons', replacement: path.join(__dirname, 'icons') },
      { find: '@', replacement: path.join(__dirname, SRC_DIR) },
    ],
  }),
  postcss({
    modules: true,
    minimize: true,
    sourceMap: true,
    extract: true,
  }),
  svgr(),
  terser(), // minifies generated bundles
]

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  input: entryPoints.map((_entryPoint) => `src/index.ts`),
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      preserveModules: true, // to maintain the same structure as src and create modules as chunks
      preserveModulesRoot: 'src', // to maintain the same structure as src and create modules as chunks
    },
  ],
  external: ['react', 'react-dom'],
  plugins,
}
