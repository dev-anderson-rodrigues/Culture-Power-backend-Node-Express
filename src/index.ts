import 'dotenv/config';
import express from 'express';

import { mongoose } from './configs/connection';
import routes from './server/routes/index';

mongoose;

const server = express();

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT, () => console.log('Server is running'));
