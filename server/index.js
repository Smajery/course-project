require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);

//Error processing, Last Middleware
app.use(errorHandler);

const start = async () => {
    await sequelize.authenticate();
    // await sequelize.sync()
};

start()
    .then(() => {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    })
    .catch(e => {
        console.error(e)
    })
