/**
 * Routes all API requests to particular functions.
 * This file would be referenced by the `app.js` file, as:
 *
 *      var app    = express.createServer();
 *      var routes = require('./router');
 *
 * And called:
 *
 *      routes.setup(app);
 */

var index = require('./routes/index');
var user = require('./routes/users');

module.exports.setup = function( app ) {
    app.get('/',               index.index);
    app.get('/user',       user.getUserList);
    app.post('/user/add',        user.addUser);
    app.delete('/user/delete/:id', user.deleteUser);
};