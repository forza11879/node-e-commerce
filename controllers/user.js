import { createOrUpdateUser } from '../Models/user/index.js';

export const postCreateOrUpdateUser = (req, res) => {
  const { name, picture, email } = req.user;
  const args = { name, picture, email };
  createOrUpdateUser(args);
};
