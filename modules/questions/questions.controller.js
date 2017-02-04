var Learnosity = require('learnosity-sdk-nodejs');
const config = require('../../config');
var request = require('request');
/**
 * @api {GET} /questions List questions
 * @apiName List
 * @apiGroup questions
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
function list(req, res) {
	var limit = 20;
	var url = 'https://data.learnosity.com/latest/itembank/items';
	var learnositySdk = new Learnosity();
	const consumer_key = config.consumer_key;
	const secret_key = config.secret_key;
	if (_.isEmpty(req.query.limit)) {
    	limit = 20;
    } else {
    	limit = req.query.limit;
    }
	var signature = learnositySdk.init('data', {
            'consumer_key': consumer_key,
            'domain': domain
        },
        secret_key, {
            "limit": limit
        },
        'get'
    );
    var options = {
        url: url,
        form: signature
    }
    //making the https get call
    request.post(options, function(err, httpResponse1, body1) {
        var result = JSON.parse(body1);
    });
    console.log(result);



}

function item(req, res) {

}

function create(req, res) {

}

module.exports = {list, item, create};