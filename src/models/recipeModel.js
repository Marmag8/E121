const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function getAllRecipes() {
    const db = getDB();
    return await db.collection('recipes').find().sort({ createdAt: -1 }).toArray();
}

async function getRecipeById(id) {
    const db = getDB();
    return await db.collection('recipes').findOne({ _id: new ObjectId(id) });
}

async function addRecipe(title, content, status) {
    const db = getDB();
    await db.collection('recipes').insertOne({
        title,
        content,
        status,
        createdAt: new Date()
    });
}

async function updateRecipe(id, title, content, status) {
    const db = getDB();
    await db.collection('recipes').updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, content, status } }
    );
}

async function deleteRecipe(id) {
    const db = getDB();
    await db.collection('recipes').deleteOne({ _id: new ObjectId(id) });
}

module.exports = { getAllRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe };