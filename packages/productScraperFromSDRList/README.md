# Product Scraper from Monthly SDR List
A script to scrape product data from a monthly SDR list.

This script only works for the Excel provided by the "Presidencia Ejecutiva" of "Farmacias Similares"
that is provided and updated month-by-month.

This script is intended to have a JSON database of all the products in Farmacias Similares.
Using this JSON database, other tools could be developed to make other works easier like "traspasos semi-automatizados".

## How to use
1. Obtain the Excel file.
2. Rename the file to "test.xlsx".
3. Run the script.

## How it works
The script reads the Excel file and extracts the product data from the specified columns.
Then, it creates a JSON file with the product data.

## Product Data
The product data is stored in a JSON file with the following structure:
```json
[
    {
        "id": "395",
        "name": "DICLOFENACO/B1/B6/B12/1MG 30TAB"
    }
]
```
