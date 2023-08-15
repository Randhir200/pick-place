const express = require('express');
const app = express();
const logger = require('./logger.js');

logger.log('error', 'Something wrong with request Payload');