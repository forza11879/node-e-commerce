import dotenv from 'dotenv';
import { createServer } from 'http';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import storeFabric from 'connect-mongodb-session';
import cors from 'cors';
// db
import { connectDb } from './startup/db.js';
//
import cookieParser from 'cookie-parser';
// routes
import { getRoutes } from './routes/index.js';
//
dotenv.config({ path: './config/dev.env' });
//
const app = express();
//
// app.use(cors(corsOptionsDelegate));
app.use(cors());
// Dev logging middleware - ONLY in development
app.use(morgan('dev'));
// Takes the raw requests(like forms) and turns them into usable properties on req.body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json({ extended: false })); // Used to parse JSON bodies.
// Mount Rout
app.use('/api/v1', getRoutes());
//
const port = process.env.PORT;
//
const server = createServer(app);
server.listen(port, function () {
  console.log(`Server is up on port ${port}`);
});
// once app is ready connect to DB
connectDb();
