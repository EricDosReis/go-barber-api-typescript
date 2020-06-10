import { Router } from 'express';

import sessionsRouter from './sessions';
import usersRouter from './users';
import appointmentsRouter from './appointments';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;
