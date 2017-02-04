'use strict';

const express = require('express');
var controller = require('./questions.controller');

var router = express.Router();

var routes = (authenticate) => {
	//api/question
	router.route("/")
		.post(authenticate, controller.create)
		.get(authenticate, controller.list);

	//api/question/4
	router.route("/:id")
		.get(authenticate, controller.question);

	return router;
}

module.exports = { routes };