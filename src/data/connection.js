const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

async function connectDB() {
    try{
        await client.connect();
        db = await client.db('tasks');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

function getDB() {
    if(!db) throw new Error('Database not connected. Call connectDB first.');
    return db;
}

module.exports = { connectDB, getDB };