const express = require('express');
const app = express();
const connectDB = require('./config/db');
const swaggerSpec = require('./config/swagger');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use('/', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Users service is running on port ${PORT}.`);
});