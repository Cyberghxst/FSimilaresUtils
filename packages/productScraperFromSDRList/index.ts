import * as XLSX from 'xlsx'
import fs from 'fs'
// import test from 'bun:test'
// import assert from 'node:assert'

const workbook = XLSX.readFile('test.xlsx', { type: 'binary' })
const sheetName = workbook.SheetNames[0]!
const worksheet = workbook.Sheets[sheetName]!
const productos = new Map<number, string>()
let min = 7
let max = 863

// Barrido de productos solicitados
for (let i = min; i <= max; i++) {
    const prod = worksheet['C' + i]
    if (prod !== undefined) {
        productos.set(worksheet['B' + i].v, prod.v)
    }
}

// Barrido de productos sugeridos
for (let i = min; i <= max; i++) {
    const prod = worksheet['G' + i]
    if (prod !== undefined) {
        productos.set(worksheet['F' + i].v, prod.v)
    }
}

const json = [...productos.entries()].map(([id, name]) => ({ id, name }))

fs.writeFileSync('productos.json', JSON.stringify(json))
console.log('Archivo productos.json creado exitosamente')

/*
test.describe('Product Scraper', () => {
    test.it('should have unique products', () => {
        const uniqueProducts = new Set(json.map(p => p.name))
        assert.strictEqual(uniqueProducts.size, json.length)
    })

    test.it('should retrieve "DICLOFENACO/B1/B6/B12/1MG 30TAB"', () => {
        const product = productos.get(395)
        assert.strictEqual(product, 'DICLOFENACO/B1/B6/B12/1MG 30TAB')
    })
})
*/