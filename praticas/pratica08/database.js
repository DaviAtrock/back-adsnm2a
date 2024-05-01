const { MongoClient } = require('mongodb');

const url = '';

async function conectarDb() {
    try {
        const mongoClient = await MongoClient.connect(url);
        return mongoClient.db("agenda");
    } catch (error) {
        console.log("Deu ruim!", error);
    }
}

module.exports = conectarDb;