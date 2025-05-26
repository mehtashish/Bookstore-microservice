const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Users Service',
            version: '1.0.0',
            description: 'API documentation for the users microservice'
        },
    },
    apis: ['./routes/userRoutes.js'],
};

module.exports = swaggerJsdoc(options);