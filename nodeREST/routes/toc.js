/* GET web pages (not rest calls). */
exports.index = function(req, res) {
	res.render('index.html');
};

exports.about = function(req, res) {
	res.render('about.html');
};

exports.contact = function(req, res) {
	res.render('contact.html');
};