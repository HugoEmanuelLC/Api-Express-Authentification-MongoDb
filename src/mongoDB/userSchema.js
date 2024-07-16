import mongoose from 'mongoose';
import pkg from 'validator';

import bcrypt from 'bcrypt';

const { isEmail } = pkg;

const users = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'invalid email']
    },
    password: {
        type: String,
        require: [true, 'password is required'],
        minlength: [6, 'password must be at least 6 characters']
    }
});

users.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const Users = mongoose.model('users', users);
export default Users;