import { createOrUpdateUser } from '../Models/user/index.js';

export const postCreateOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;
  const args = { name, picture, email };
  const user = await createOrUpdateUser(args);
  console.log('user: ', user);
  res.json(user);
};
