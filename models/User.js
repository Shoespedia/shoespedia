import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = models.User || model('User', UserSchema);

module.exports = User;
