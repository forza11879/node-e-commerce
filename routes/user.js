import express from 'express';
import { postCreateOrUpdateUser } from '../controllers/user.js';
import { authCheck } from '../middleware/auth.js';

function getUserRoutes() {
  const router = express.Router();

  router.post('/create-or-update', authCheck, postCreateOrUpdateUser);
  // router.get('/', getList);

  return router;
}
export { getUserRoutes };
