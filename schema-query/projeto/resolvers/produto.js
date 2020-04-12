module.exports = {
    precoComDesconto(props){
        if(props.desconto != null || props.desconto > 0){
            var desconto = (props.preco * (1 - props.desconto));
            return desconto;
        }else{
            return props.preco
        }
    }
}