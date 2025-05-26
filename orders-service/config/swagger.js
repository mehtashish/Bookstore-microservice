const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Orders Service',
            version: '1.0.0',
            description: 'API documentation for the orders microservice.'
        },
    },
    apis: ['./routes/orderRoutes.js'],
};

module.exports = swaggerJsdoc(options);