import { Router } from 'express';

const routes = Router();

routes.use('/', (req, res) => {
  res.json({ message: 'Rota principal' });
});

routes.get('*', (req, res) => {
  res.status(404).send({ message: 'Could not find informed route' });
});

export default routes;
