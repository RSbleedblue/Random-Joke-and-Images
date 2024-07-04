import express, { json } from 'express';
import router from './Routes/basicRoute.js';

const app = express();

app.use(json());

app.use("/api",router);

export default app;