const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function getAllRecipes(userId) {
    const db = getDB();
    return await db.collection('recipes').find({ userId }).sort({ createdAt: -1 }).toArray();
}

async function getRecipeById(id, userId) {
    const db = getDB();
    return await db.collection('recipes').findOne({ _id: new ObjectId(id), userId });
}

async function addRecipe(title, description, instructions, userId) {
    const db = getDB();
    await db.collection('recipes').insertOne({
        title,
        description,
        instructions,
        userId,
        createdAt: new Date()
    });
}

async function updateRecipe(id, title, description, instructions, userId) {
    const db = getDB();
    await db.collection('recipes').updateOne(
        { _id: new ObjectId(id), userId },
        { $set: { title, description, instructions } }
    );
}

async function deleteRecipe(id, userId) {
    const db = getDB();
    await db.collection('recipes').deleteOne({ _id: new ObjectId(id), userId });
}

module.exports = { getAllRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe };