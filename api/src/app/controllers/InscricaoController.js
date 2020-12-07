import User from "../models/User";
import Inscricao from "../models/Inscricao";

class InscricaoController {
  /**
   * Listando 
   */

  async show(req, res) {

    const user = await User.findOne({
      _id: req.userId,
    });

    if (!user) {
      return res.status(401).json({ error: "Usuário sem permissão" });
    }

    const { id } = req.query;

    const inscritos = await Inscricao.find({
      event: id
    }).sort([["createdAt", 'descending']]).populate("inscrito");

    return res.json(inscritos);
  }

  async index(req, res) {
    const user = await User.findOne({
      _id: req.userId,
    });

    if (!user) {
      return res.status(401).json({ error: "Usuário sem permissão" });
    }

    const minhasInscricoes = await Inscricao.find({
      inscrito: user.id
    }).populate("event");

    return res.json(minhasInscricoes);
  }

  /**
   * Adicionando Evento
   */
  async store(req, res) {

    const user = await User.findOne({
      _id: req.userId,
    });

    const { id } = req.query;

    const inscricoes = await Inscricao.find({
      inscrito: user.id
    }).sort([["createdAt", 'descending']]);

    if (inscricoes.length > 0) {
      return res.status(400).json({ error: "Inscrição já realizada neste evento." })
    }

    await Inscricao.create({
      event: id,
      inscrito: user.id
    });

    return res.status(200).json({ message: "Inscrição Confirmada." });
  }

  /**
   * Atualizando Usuário não ativo
   */
  async update(req, res) {}

  /**
   * Removendo usuário
   */
  async delete(req, res) {}
}

export default new InscricaoController();
