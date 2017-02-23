'use strict';

const router = require('express').Router();
const user = require('./user/userRoutes');

router.use('/u', user);

module.exports = router;
