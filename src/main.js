import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { connect as dbConnect } from './db';
import api from './api';
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

dbConnect();

app.use('/api', api);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
