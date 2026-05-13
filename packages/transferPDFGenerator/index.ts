import puppeteer from 'puppeteer'
import ejs from 'ejs'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Representa una traspaso de productos entre dos sucursales.
 */
interface Transfer {
    origin: Branch
    destination: Branch
    products: Product[]
    date: Date
    authorizedBy: string
}

/**
 * Representa una sucursal.
 */
interface Branch {
    id: string
    name: string
}

/**
 * Representa un producto con su unidad correspondiente.
 */
interface Product {
    id: string
    name: string
    amount: number
}

const logoBuffer = fs.readFileSync(
    path.join(
        process.cwd(),
        'fslogo.png'
    )
)

const logoPath = `data:image/png;base64,${logoBuffer.toString('base64')}`

/**
 * Generate a PDF document for a transfer.
 * @param transfer The transfer to generate the PDF for.
 */
async function generateTransferPDF(transfer: Transfer): Promise<void> {
    const ejsTemplatePath = "./src/templates/formato.ejs"
    const html = await ejs.renderFile(ejsTemplatePath, { transfer, logoPath })

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.setContent(html)

    await page.pdf({
        path: "transfer.pdf",
        format: "A4",
        printBackground: true
    })

    await browser.close()
}

/**
 * Test data for generating a transfer PDF.
 */
const testTransfer: Transfer = {
    origin: {
        id: "1",
        name: "Sucursal 1"
    },
    destination: {
        id: "2",
        name: "Sucursal 2"
    },
    products: [
        {
            id: "1",
            name: "Producto 1",
            amount: 1
        },
        {
            id: "2",
            name: "Producto 2",
            amount: 2
        },
        {
            id: "3",
            name: "Producto 3",
            amount: 3
        },
        {
            id: "4",
            name: "Producto 4",
            amount: 4
        },
        {
            id: "5",
            name: "Producto 5",
            amount: 5
        },
        {
            id: "6",
            name: "Producto 6",
            amount: 6
        },
        {
            id: "7",
            name: "Producto 7",
            amount: 7
        },
        {
            id: "8",
            name: "Producto 8",
            amount: 8
        },
        {
            id: "9",
            name: "Producto 9",
            amount: 9
        },
        {
            id: "10",
            name: "Producto 10",
            amount: 10
        },
        {
            id: "11",
            name: "Producto 11",
            amount: 11
        },
        {
            id: "12",
            name: "Producto 12",
            amount: 12
        }
    ],
    date: new Date(),
    authorizedBy: "Melissa Hernandez"
}

generateTransferPDF(testTransfer)
