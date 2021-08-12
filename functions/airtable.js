require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY}).base('appBD8FmwsEWL1jIA').table('test')

exports.handler = async (event, context) => {
    try {
        const { records } = await airtable.list()
        const products = records.map((product_details) => {
            const { id } = product_details
            const { name, price,desc } = product_details.fields
            return { id, name, desc, price }
        })
        return {
            statusCode: 200,
            body: JSON.stringify(products)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server faced an Error'
        }
    }
}