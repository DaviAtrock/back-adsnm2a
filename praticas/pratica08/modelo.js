const conectarDb = require('./database');

class Contato {
    constructor(nome, telefone, email, id) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.id = null;
    }

    async inserir(contato) {
        try {
            const db = await conectarDb();
            const collection = db.collection('contatos');
            const result = await collection.insertOne({
                nome: contato.nome,
                telefone: contato.telefone,
                email: contato.email
            });
            this.id = result.insertedId;
            console.log("Contato inserido com sucesso!");
            return this.id;
        } catch (error) {
            console.log("Erro ao inserir contato:", error);
        }
    }
}
