const Produto = require('./models/produto'); // Importe o modelo do Produto
const MovimentoProduto = require('./models/movimentacao'); // Importe o modelo de MovimentoProduto


class Logico{    
    async cadastra(id, nome){
        //validações de NOME e ID
        if(validaId(id)){
            console.log("Erro!! Id inválido")
            return
        }
        if(validaNome(nome)){
            console.log("Erro!! Nome do produto deve conter no maximo 10 caracteres")
            return false;
        }
        
        /* Adicionar a função de cadastr/criar querry com os paramentros ID e NOME. Pode ser feito um IF/ELSE ou TRY/CATCH pra fazer o tratamento e excessão da persistencia no banco */
        await Produto.create({ nome })
        console.log("Produto cadastrado com sucesso");
        return true;
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
            return false;
    }

    async movimentaProduto(id, quant, tipo) {
        try {
            // Adicionar a função que fará adição/subtração de um produto com retorno Boolean
            // Isso pode ser implementado usando o modelo MovimentoProduto
            await MovimentoProduto.create({
                qtde_mov: quant,
                tipo: tipo,
                id_produto: id,
            });
            console.log("Registro de movimentação realizado com sucesso");
            return true;
        } catch (error) {
            console.error("Erro ao registrar movimentação:", error);
            return false;
        }
    }

    async consultaQuantidade(id){
        // Aqui deverá ser incluído o metodo que usará o ID do parametro para fazer a SELECT+JOIN das tabelas do banco, trazendo as informações em um objeto que sera impresso
        try {
            const resultado = await MovimentoProduto.findAll({
            where: { id_produto: id },
        });
        console.log("Consulta de quantidade realizada com sucesso:", resultado);
        return resultado;
    } catch (error) {
        console.error("Erro ao consultar quantidade:", error);
        return null;
    }
    
    }

    //Valida se o Id é um inteiro 
    async validaId(id){
        return !Number.isInteger(id) || id == null
    }

    //Verifica se o nome é maior que 10 caracteres
    async validaNome(nome){
        return nome.length > 10 || nome == ""
    }
}

module.exports = new Logico();