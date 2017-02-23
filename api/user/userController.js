'use strict';

const userController = require('./userController');


exports.get = (req, res, next) => {
  console.log('GETTING USER');
  res.end('hello world');
};

exports.post = (req, res, next) => {
  console.log('POSTING TO USER');
  res.end('hello world');
};