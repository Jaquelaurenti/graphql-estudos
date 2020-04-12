const { usuarioArray, perfis} = require('../data/db.js')

module.exports = {
    ola(){
        return 'Retorno qualquer em formato string'
    },
    desafioHoraAtual(){
        today = new Date;
        
        return today.toString();
    },
    scalarDate(){
        return new Date ;
    },
    usuarioLogado(){
        const usuario = {
            nome: 'Jaqueline',
            id: 1,
            email: 'jaquelinelaurenti@gmail.com',
            // mudando o nome do salario para salario_real definido no schema
            // para ajustar esses automaper, fazemos um resolver para o atributo
            salario_real: 1256.36,
            vip: true,
            idade: 25
        }
        return usuario; 
    },
    desafioProduto(){
        const produto = {
            nome: 'Notebook',
            preco: 4365.99,
            desconto: 0.5

        }
        return produto;
    },
    numerosMegaSena(){
        const crescente = (a,b) => a-b;

        const ar = Array(6).fill(0)
        .map(() => parseInt(Math.random() * 60 + 1))
        .sort(crescente);
        
        return ar;
    },
    retornaArrayUser(){
        return usuarioArray;
    },
    // o primeiro parametro de um resolver é sempre  objeto que foi retornado pelo resolver inicial
    // 2 parametro é os argumentos que eu vou passar 
    usuario(_, { id }){
        const selecionados = usuarioArray.filter(
            u => u.id == id
        );

        return selecionados ? selecionados[0] : null
    },
    desafioPerfis(){
        return perfis;
    },
    perfil(_, { id }){
        const sel = perfis.filter(
            p => p.id == id
        );
        return sel ? sel[0] : null
    }
}