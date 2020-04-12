const { usuarios, proximoId } = require('../data/db')

module.exports = {
    novoUsuario(_, { nome, email, idade }){
        // valida se o e-mail já existe
        const emailExistente = usuarios
        .some(u => u.email === email);

        if(emailExistente){
            throw new Error('Email já cadastrado!')
        }    
        const novo = {
            id: proximoId(),
            nome, 
            email, 
            idade, 
            perfil_id:1,
            status: 'ATIVO'
        }

        usuarios.push(novo);

        return novo;
    },
    excluirUsuario(_, { id }){
        const i = usuarios
        .findIndex(u => u.id ===id);

        if(i < 0) return null
        
        const excluidos = usuarios.splice(i, 1);

        return excluidos ? excluidos[0] : null 
    },
    alterarUsuario(_, args){
        const i = usuarios
        .findIndex(u => u.id === args.id);

        if(i < 0) return null

        usuarios[i].nome = args.nome;
        usuarios[i].email = args.email;
        if(args.idade){
            usuarios[i].idade = args.idade;
        }     

        return usuarios[i];
        // const usuario ={
        //     ...usuarios[i],
        //     ...args
        // }

        // usuarios.splice(i,1, usuario);

        //return usuario;

    }
    
}


/*
Quando houver muitos argumentos podemos passar o args
direto chamando o ... 
exemplo 
novoUsuario(_, args){
    ...args
}
*/