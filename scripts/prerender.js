import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const { render, schema } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href)

const file = `${root}dist/index.html`
const html = await readFile(file, 'utf8')
for (const mark of ['<!--app-->', '<!--schema-->']) {
  if (!html.includes(mark)) throw new Error(`Missing ${mark} placeholder in dist/index.html`)
}
await writeFile(file, html.replace('<!--schema-->', schema()).replace('<!--app-->', render()))
await rm(`${root}dist-ssr`, { recursive: true, force: true })
console.log('Prerendered dist/index.html')
