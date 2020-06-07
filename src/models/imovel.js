const mongoose = require("mongoose");
const paginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

let ImovelSchema = new Schema({
  DescricaoImovel: {
    type: String,
    required: true,
    max: 200,
  },
  Email: {
    type: String,
    required: true,
    max: 200,
  },
  LogradouroImovel: {
    type: String,
    required: true,
    max: 200,
  },
  Numero: {
    type: String,
    required: true,
  },
  Complemento: {
    type: String,
    max: 30,
  },
  Cep: {
    type: String,
    required: true,
    max: 8,
  },
  Bairro: {
    type: String,
    required: true,
    max: 20,
  },
  Cidade: {
    type: String,
    required: true,
    max: 50,
  },
  Uf: {
    type: String,
    required: true,
    max: 2,
  },
  SituacaoImovel: {
    type: String,
    required: true,
    max: 1,
  },
  Usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

ImovelSchema.plugin(paginate);

module.exports = mongoose.model("Imovel", ImovelSchema);
