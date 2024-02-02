const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt.js');

const SECRET = 'fsaeofn23fr89234hj9f8034hj09gf82h30df89hsdok';

//TODO: Check if user exists
exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {

    //Get user form db
    const user = await User.findOne({email});

    // Check of user exists
    if(!user) {
        throw new Error('Cannot find email or password!');
    }

    //Check if password is valid
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        throw new Error(`Cannot find email or password!`);

    }

    //Generate jwt token
    const payload = {
        _id: user._id,
        email: user.email,
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });
    //return token

    return token;
}