const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers');

const schemaPath = './schema/index.graphql';
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
});

server.listen().then(({ url })=>{
    console.log(`Ouvindo da ${url}`)
});




/*
// se a constante for chamada de a na chamada dentro do ApolloServer devemos chamar
// typeDefs: a
// o mesmo para o resolvers
// resolver: onomequeeudei

// Dentro do resolver precisamos resolver a Query ola (que é uma query que retorna uma String)

Em consultas podemos retornas tipos imposto por nós, exemplo
retorna tipo Produto.
Mas temos os retornos Scalares do graphQL que sao retornos já pré definido
exemplo: int, float, string, boolean e o tipo id(identificador unico dentro do conjuntos de objetos, sereliazado como string
    exemplo o uuid)

podemos criar um scalar próprio

*/