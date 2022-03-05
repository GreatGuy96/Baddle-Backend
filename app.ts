import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const listener = app.listen(3100, function () {
	console.log('Listening on port ' + listener.address().port);
});

app.use('', indexRouter);
