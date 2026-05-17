import officeParser from 'officeparser'
import fs from 'fs'

const productos = new Map<number, string>()

async function main() {
    const ast = await officeParser.parseOffice(__dirname + '/sample.pdf')
    const pages = ast.content.filter((content) => content.type === 'page')
    const contents = pages.map((page) => page.children?.filter((child) => {
        return child.type === 'paragraph' && child.children!.length === 3
    }))

    for (const page of contents) {
        if (!page) continue
        for (const node of page) {
            const id = node.children?.at(0)?.text?.replace('*', '').trim()
            const name = node.children?.at(1)?.text?.trim().split(' ').slice(0, -1).join(' ')

            productos.set(Number(id), name!)
        }
    }
}

main().then(() => {
    const json = [...productos.entries()].map(([id, name]) => ({ id, name }))
    fs.writeFileSync('productos.json', JSON.stringify(json))
    console.log('Archivo productos.json creado exitosamente')
}).catch(err => console.log(err))