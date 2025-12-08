const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
key = Buffer.alloc(32);
iv = Buffer.alloc(16);

function hash(password) {
    const encrypter = crypto.createCipheriv(algorithm, key, iv);
    let hashed = encrypter.update(password, 'utf8', 'hex');
    hashed += encrypter.final('hex');
    return hashed;
}

function unhash(hashedPassword) {
    const decrypter = crypto.createDecipheriv(algorithm, key, iv);
    let password = decrypter.update(hashedPassword, 'hex', 'utf8');
    password += decrypter.final('utf8');
    return password;
}

module.exports = { hash, unhash };