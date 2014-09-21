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

var user = require('./routes/users');

module.exports.setup = function( app ) {
	bind(app, '/', 'index');
	bind(app, '/about', 'about');
	bind(app, '/contact', 'contact');
	bind(app, '/oauth2callback', 'oauth2callback');
    
    app.get('/user', user.getUserList);
    app.post('/user/add', user.addUser);
    //app.delete('/user/delete/:id', user.deleteUser);
};

//Bind route to view
function bind(app, path, viewName) {
	exports[viewName] = function(req, res) {
		//res.render("test");
		res.render(viewName + ".html"); 
	};
	app.get(path, exports[viewName]);
}