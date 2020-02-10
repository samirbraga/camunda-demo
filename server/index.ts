require('dotenv').config();
import * as express from 'express';
import * as http from 'http';
import routes from './routes';
import './camunda/client';

const app = express();
const server = http.createServer(app);

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

routes(app);

server.listen(process.env.PORT || 3000, () => {
    console.log('APP Running...');
});