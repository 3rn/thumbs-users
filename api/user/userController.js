'use strict';

const userController = require('./userController');


exports.get = (req, res, next) => {
  res.end('hello world');
};

exports.post = (req, res, next) => {
  res.end('hello world');
};