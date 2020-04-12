const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

// se a constante for chamada de a na chamada dentro do ApolloServer devemos chamar
// typeDefs: a
// o mesmo para o resolvers
// resolver: onomequeeudei

const usuarioArray =[
    {
        id:1,
        nome:'Jaqueline',
        salario_real: 1256.36,
        vip: true,
        idade: 25,
        perfil_id: 1 
    },
    {
        id:2,
        nome:'Thabata',
        salario_real: 1256.36,
        vip: true,
        idade: 25,
        perfil_id: 2
    },
    {
        id:3,
        nome:'Gabriele',
        salario_real: 1256.36,
        vip: true,
        idade: 25,
        perfil_id: 1
    }
];

// desafio de Perfil
const perfis = [{id: 1, nome: 'Comum'},{id:2,  nome:'Administrador'}]

// Dentro do resolver precisamos resolver a Query ola (que é uma query que retorna uma String)
const resolvers = {
    // Resolver para o salario_real
    Usuario:{
        salario(props){
            return props.salario_real;
        },
        // criando um resolver para o Perfil do usuario
        perfil({ perfil_id }){
            const sel = perfis.filter(
                p => p.id == perfil_id
            );
            return sel ? sel[0] : null
        }
    },
    Produto:{
        precoComDesconto(props){
            if(props.desconto != null || props.desconto > 0){
                var desconto = (props.preco * (1 - props.desconto));
                return desconto;
            }else{
                return props.preco
            }
        }
    },
    
    // ponto de entrada
    Query:{
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

};

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
});

server.listen().then(({ url })=>{
    console.log(`Ouvindo da ${url}`)
});

/*
Em consultas podemos retornas tipos imposto por nós, exemplo
retorna tipo Produto.
Mas temos os retornos Scalares do graphQL que sao retornos já pré definido
exemplo: int, float, string, boolean e o tipo id(identificador unico dentro do conjuntos de objetos, sereliazado como string
    exemplo o uuid)

podemos criar um scalar próprio

*/