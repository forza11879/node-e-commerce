import express from 'express';

import { getUserRoutes } from './user.js';

function getRoutes() {
  // All routes in our Node API are placed on this router
  const router = express.Router();

  // router.use() prefixes our route (i.e. /api/v1/auth)

  router.use('/user', getUserRoutes());

  return router;
}

export { getRoutes };
