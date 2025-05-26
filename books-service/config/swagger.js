const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Books Service',
            version: '1.0.0',
            description: 'API documentation for the books microservice'
        },
    },
    apis: ['./routes/booksRoutes.js'],
};

module.exports = swaggerJsdoc(options);