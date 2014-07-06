/*
 * GET userlist.
 */
exports.getUserList = function(req, res) {
    var db = req.db;
    db.collection('userlist').find().toArray(function (err, items) {
        res.json(items);
    });
};

/**
 * Creates a user account via a `POST` call. 
 * If the status code is not given, 200 is assumed.
 * 
 * Body:
 *
 * The body of the `POST` call should contain a user's account as a JSON
 * document, as in:
 *
 *     {
 *       'name'  : 'Bob Dog',
 *       'email' : 'bob@dog.com',
 *       'phone' : '534-284-7988'
 *     }
 *
 * Response:
 * 
 *  Returns the added user's information with an additional `id`
 *  value.
 * 
 * Errors:
 *
 *  - `400` if any of the data was invalid.
 *  - `500` with a database error
 *
 * Error Response:
 *
 *  With an status code of 300 or higher, the payload of the response will 
 *  contain a JSON document describing the error or problem, as in:
 *
 *     {
 *       'status' : 'error',
 *       'message': 'The email address was incorrectly formatted.',
 *       'field'  : 'email',
 *       'value'  : 'bob at dog dot com'
 *     }
 *
 * @param request The standard http request
 * @param response The standard http response
 */
exports.addUser = function(req, res) {
    var db = req.db;
    db.collection('userlist').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
};

/*
 * DELETE to deleteuser.
 */
exports.deleteUser = function(req, res) {
    var db = req.db;
    var userToDelete = req.params.id;
    db.collection('userlist').removeById(userToDelete, function(err, result) {
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
};

