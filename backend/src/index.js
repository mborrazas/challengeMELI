const express = require('express');
const app = express();
const routes = require('./routes');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(routes);

app.listen(app.get('port'),() => {
    console.log(`Server listening on port ${app.get('port')}`);
});