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

var toc = require('./routes/toc');
var user = require('./routes/users');

module.exports.setup = function( app ) {
    app.get('/', toc.index);
    app.get('/about', toc.about);
    app.get('/contact', toc.contact);
    app.get('/user', user.getUserList);
    app.post('/user/add', user.addUser);
    //app.delete('/user/delete/:id', user.deleteUser);
};