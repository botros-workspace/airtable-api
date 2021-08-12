const items = require("../assets/products")
exports.handler = async (event, context) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify(items)
    }
}