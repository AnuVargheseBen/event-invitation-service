import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { connect as dbConnect } from './db';
import api from './api';
<<<<<<< HEAD
=======

>>>>>>> cbab280cd90736cd52b0a28094b5ab110abcc584
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

dbConnect();

<<<<<<< HEAD
=======
app.get('/', (req, res) => res.json({ name: 'Anu' }));
>>>>>>> cbab280cd90736cd52b0a28094b5ab110abcc584
app.use('/api', api);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
