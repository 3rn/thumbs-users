const express = require('express');
const app = express();
const config = require('./server.config.js');


const middleware = require('./middleware.js')(app, express);

const api = require('./api/api');
app.use('/api', api);

app.listen(config.PORT, config.HOST, () => {
  console.log('thumbs-users on at http://%s:%s', config.HOST, config.PORT);
});

