var express = require('express');
var config = require('../../config/config'); // get our config file
var uuid = require('node-uuid'); // needed to generate uuids along with the token generation
var Promise = require("bluebird"); // needed to simulate promises
var winston = require('winston'); // used for logging
var request = require('request'); // used to make http requests
var urlgenerator = require('urlgenerator'); // used to generate url from base url and parameters
var os = require('os'); // used to get OS information during sign up
var React = require('react');
var Handlebars = require('handlebars');
var fs = require('fs');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var ReactDOMServer = require('react-dom/server');
var ReactDOM = require('react-dom');

module.exports.express = express;
module.exports.config = config;
module.exports.uuid = uuid;
module.exports.Promise = Promise;
module.exports.winston = winston;
module.exports.request = request;
module.exports.urlgenerator = urlgenerator;
module.exports.os = os;
module.exports.React = React;
module.exports.Handlebars = Handlebars;
module.exports.fs = fs;
module.exports.Router = Router;
module.exports.Route = Route;
module.exports.ReactDOMServer = ReactDOMServer;
module.exports.ReactDOM = ReactDOM;
