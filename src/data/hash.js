const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hash(password) {
    return await bcrypt.hash(password, saltRounds);
}

async function compare(plain, hashed) {
    return await bcrypt.compare(plain, hashed);
}

module.exports = { hash, compare };