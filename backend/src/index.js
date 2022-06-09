const express = require('express');
const cors = require("cors");
const app = express();
const routes = require('./routes');
const constants = require('./constants');

app.use(cors());
app.use(express.json());
app.use('/api/items',routes);

app.listen(constants.PORT,() => {
    console.log(`Server listening on port ${constants.PORT}`);
});