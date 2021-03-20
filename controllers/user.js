import { createOrUpdateUser } from '../Models/user/index.js';

export const postCreateOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;
  const args = { name, picture, email };
  console.log('args: ', args);
  const user = await createOrUpdateUser(args);
  console.log('user: ', user);
  res.json(user);
};
