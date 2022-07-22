import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';

//DB and authenticateUser
import connectDB from './db/connect.js';

//Routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

//Middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import morgan from 'morgan';
import authenticateUser from './middleware/auth.js';

//Deployment imports
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//Security packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

//Morgan
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
//DEPLOYMENT
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './client/build')));

//JSON
app.use(express.json());

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get('/api/v1', (req, res) => {
  res.send('Welcome!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
