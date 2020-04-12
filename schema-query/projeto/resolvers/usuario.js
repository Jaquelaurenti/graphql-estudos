const { perfis } = require('../data/db');

module.exports = {
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
}