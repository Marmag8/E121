const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function getAllTasks() {
    const db = getDB();
    return await db.collection('tasks').find().sort({ createdAt: -1 }).toArray();
}

async function getTaskById(id) {
    const db = getDB();
    return await db.collection('tasks').findOne({ _id: new ObjectId(id) });
}

async function addTask(title, content, status) {
    const db = getDB();
    await db.collection('tasks').insertOne({
        title,
        content,
        status,
        createdAt: new Date()
    });
}

async function updateTask(id, title, content, status) {
    const db = getDB();
    await db.collection('tasks').updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, content, status } }
    );
}

async function deleteTask(id) {
    const db = getDB();
    await db.collection('tasks').deleteOne({ _id: new ObjectId(id) });
}

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };