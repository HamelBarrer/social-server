import express from 'express';
import morgan from 'morgan';

import userRouter from './routes/user.routes.js';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);

export default app;
