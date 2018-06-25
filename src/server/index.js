import express from 'express';
import render from './render';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

(async () => {
    const app = express();
    app.get('/', render());
    app.use('/assets', express.static('assets'));
    app.use(express.static('dist/client'));
    app.listen(PORT, HOST);
})();

