const connection = require('../database/connection');

//pacote do node para criptografia (usado nesse caso para geracao de id
// aleatorio)
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs)
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        //passando os valores obtidos para a tabela do banco de dados
        //await forca o codigo a terminar o insert dos dados na table ongs
        //antes de continuar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id}); // resposta da rota ao usuario (return)
    }
};