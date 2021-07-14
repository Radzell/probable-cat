import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
const morgan = require('morgan');
import { router } from './routes';

export const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', router);
