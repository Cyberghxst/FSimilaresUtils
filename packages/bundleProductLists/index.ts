import path from 'path'
import fs from 'fs'

/**
 * Representa un producto con un identificador único y nombre.
 */
interface Product {
    id: number
    name: string
}

/**
 * Una lista de rutas a archivos de productos.
 * Los JSON deben de seguir la estructura de la interfaz Product.
 */
const pathsToBundle: string[] = [
    path.join(__dirname, '../productScraperFromSDRList/productos.json'),
    path.join(__dirname, '../productScraperFromInventoryList/productos.json')
]

const allProducts: Map<number, string> = new Map()

for (const path of pathsToBundle) {
    const products = JSON.parse(fs.readFileSync(path, 'utf-8')) as Product[]
    for (const product of products) {
        allProducts.set(product.id, product.name)
    }
}

const json = [...allProducts.entries()].map(([id, name]) => ({ id, name })).sort((a, b) => a.name.localeCompare(b.name))

fs.writeFileSync('bundledProducts.json', JSON.stringify(json))
console.log('Archivo bundledProducts.json creado exitosamente')