const readline = require('readline-sync');

const contatoControlador = require('./controlador');

function menu() {
    console.log('1. Adicionar Contato');
    console.log('2. Listar Contato');
    console.log('3. Buscar Contato');
    console.log('4. Atualizar Contato');
    console.log('5. Remover Contato');
    console.log('6. Sair');
};

function escolherOpcao(opcao) {
    switch (opcao) {

        case '1': {
            const nome = readline.question("Digite seu nome: ")
            const email = readline.question("Digite seu email: ")
            const telefone = readline.question("Digite seu telefone: ")
            contatoControlador.adicionarContato(nome, email, telefone)
            console.log("Contato adicionado com sucesso!")
            break;
        }

        case '2':
            const contatos = contatoControlador.listarContatos();
            contatos.forEach(contato => console.log(contato))
            break;

        case '3': {
            const nome = readline.question("Digite o nome do contato: ")
            const contato = contatoControlador.buscarContato(nome);
            if (contato) {
                console.log(contato)
            } else {
                console.log("Contato não encontrado")
            }
            break;
        }

        case '4': {
            const nome = readline.question("Digite o nome do Contato: ")
            const email = readline.question("Digite o novo email: ")
            const telefone = readline.question("Digite o novo telefone: ")
            contatoControlador.atualizarContato(nome, email, telefone)
            break;
        }

        case '5': {
            const nome = readline.question("Digite o nome do usuario: ")
            contatoControlador.removerContato(nome)
            console.log("Contato removido com sucesso")
            break;
        }

        case '6':
            process.exit(0);
        default:
            console.log('Opção inválida!')
            break;
    }
}

function main() {
    while (true) {
        menu();
        const opcao = readline.question('Entre com uma opcao: ');
        escolherOpcao(opcao);
    }
}

main();