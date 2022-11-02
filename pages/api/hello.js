// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from '../../models/User';
import connectMongo from '../../utils/connectMongo';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  await connectMongo();
  const newUser = new User({
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com',
    password: await bcrypt.hash('password', 10),
    isAdmin: false,
  });
  newUser.save();
  return res.json(newUser);
}
