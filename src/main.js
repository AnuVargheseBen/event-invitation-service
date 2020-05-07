import express from 'express';
import bodyParser from 'body-parser';

import { connect as dbConnect } from './db';
import api from './api';
import { getDocument } from './controllers/event';
const app = express();
app.use(bodyParser.json());

const port = 5000;

dbConnect();

app.get('/', (req, res) => res.json({ name: 'Anu' }));
app.use('/api',api);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
