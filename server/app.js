const express = require('express');
const app = express();

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
	require('dotenv').config({
		path:'server/config/.env'
	})
}

module.exports = app;
