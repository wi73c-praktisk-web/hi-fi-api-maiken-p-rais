const restify = require('restify');
const corsmiddleware = require('restify-cors-middleware');
const logger = require('morgan');
const server = restify.createServer({
    'name': 'hifi',
    'version': '1.0.0'
});

server.use(logger('dev'));

server.use(restify.plugins.bodyParser());
const cors = corsmiddleware({ origins: ['*'], "allowHeaders": ['Authorization', 'userID'] });
server.pre(cors.preflight);
server.use(cors.actual);

require('./routes/index')(server);
require('./routes/login')(server);

server.listen(1337);

//gittest