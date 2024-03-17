const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err,req,res,next) => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || 'Internal server error'

// 	Wrong mongodb id error
	if (err.name === 'CastError'){
	const message = `Resource with this id not found... Invalid ${err.path}`;
	err = new ErrorHandler(message, 400);
	}

// Duplicate key error
	if (err.code === 11000) {
		const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
		err = new ErrorHandler(message, 400);
	}
// 	Wrong JWT error
	if (err.name === 'JsonWebTokenError') {
		const message = 'URL is invalid. Please try again later';
		err = new ErrorHandler(message, 400);
	}
// 	JWT expired
	if(err.name === 'TokenExpiredError'){
		const message = 'URL is expired. Please try again later';
		err = new ErrorHandler(message, 400);
	}

	res.status(err.statusCode).json({
		success: false,
		message: err.message,
	})

}
