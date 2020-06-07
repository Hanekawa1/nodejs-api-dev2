var Imovel = require("../models/imovel");

class ImovelController {
  async index(req, res) {
    res.send("O controlador de imóveis está funcionado corretamente.");
  }

  async store(req, res) {
    try {
      const imovel = await Imovel.create({ ...req.body, Usuario: req.userId });

      return res.json(imovel);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }

  async findById(req, res) {
    const imovel = await Imovel.findById(req.params.id).populate("Usuario");

    if (!imovel) {
      return res.json({ error: "Imovel inexistente" });
    }

    return res.json(imovel);
  }

  async update(req, res) {
    try {
      const imovel = await Imovel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.json(imovel);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }

  async findAll(req, res) {
    const imoveis = await Imovel.find().populate("Usuario");

    if (!imoveis || imoveis.length === 0) {
      return res.json({ error: "Não foram encontrados imóveis" });
    }

    return res.json(imoveis);
  }

  async delete(req, res) {
    const imovel = await Imovel.findByIdAndDelete(req.params.id);
    return res.send();
  }

  async findPage(req, res) {
    try {
      const filters = {};
      filters.Usuario = req.userId;

      if (req.query.DescricaoImovel) {
        filters.DescricaoImovel = new RegExp(req.query.DescricaoImovel, "i");
      }

      const imoveis = await Imovel.paginate(filters, {
        page: req.query.page || 1,
        limit: 2,
        populate: ["Usuario"],
        sort: "-createdAt",
      });

      return res.json(imoveis);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async findByDescription(req, res) {
    const query = req.params.query;
    const imoveis = await Imovel.find({
      DescricaoImovel: new RegExp(query, "i"),
    }).populate("Usuario");

    if (!imoveis) {
      return res.json({
        error: "Não foi encontrado nenhum imóvel com o pesquisado.",
      });
    }

    return res.json(imoveis);
  }
}

module.exports = new ImovelController();
