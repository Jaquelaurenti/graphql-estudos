const usuarioArray =[
    {
        id:1,
        nome:'Jaqueline',
        salario_real: 1256.36,
        vip: true,
        idade: 25,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id:2,
        nome:'Thabata',
        salario_real: 1256.36,
        vip: true,
        idade: 25,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id:3,
        nome:'Gabriele',
        salario_real: 1256.36,
        vip: true,
        idade: 25,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
];

// desafio de Perfil
const perfis = [{id: 1, nome: 'Comum'},{id:2,  nome:'Administrador'}];

module.exports = { usuarioArray, perfis}