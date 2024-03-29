const express = require('express');
const ErrorHandler = require('./utils/ErrorHandler');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
	require('dotenv').config({
		path:'./config/.env'
	})
}

// Import routes
const user = require('./controller/user');
app.use('/api/v2/user', user);

// Error handling
app.use(ErrorHandler);

module.exports = app;
