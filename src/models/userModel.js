const { getDB } = require('../data/connection');
const { hash } = require('../data/hash');

async function getUserByUsername(username) {
    const db = getDB();
    return await db.collection('users').findOne({ username });
}

async function createUser(username, password) {
    const db = getDB();
    const pass = hash(password);
    await db.collection('users').insertOne({
        username,
        password: pass,
        createdAt: new Date()
    });
}

module.exports = { getUserByUsername, createUser };
