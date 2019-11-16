import express from 'express';
import 'express-async-errors';

import routes from './routes';

class Server {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.init();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/', routes);
  }

  init() {
    const { PORT } = process.env;

    this.server.listen(PORT, () => {
      console.log(`Server listening on localhost:${PORT}`);
    });
  }
}

export default new Server().server;
