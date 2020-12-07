import * as Yup from "yup";
import User from "../models/User";
import Evento from "../models/Evento";

class EventoController {
  /**
   * Listando eventos
   */

  async show(req, res) {

    const user = await User.findOne({
      _id: req.userId,
    });

    if (!user) {
      return res.status(401).json({ error: "Usuário sem permissão" });
    }

    const eventos = await Evento.find().sort([["createdAt", 'descending']]).populate("creator");

    return res.json(eventos);
  }

  async index(req, res) {
    const user = await User.findOne({
      _id: req.userId,
    });

    if (!user) {
      return res.status(401).json({ error: "Usuário sem permissão" });
    }

    const evento = await Evento.findOne({
      _id: req.query.id
    });

    if (toString(user.id) !== toString(evento.creator)) {
      return res.status(401).json({ error: "Usuário sem permissão" });
    }

    return res.json(evento);
  }

  /**
   * Adicionando Evento
   */
  async store(req, res) {
    

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      data: Yup.date().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha no cadastro !" });
    }

    const user = await User.findOne({
      _id: req.userId,
    });

    await Evento.create({...req.body, creator: user._id});

    return res.status(200).json({ message: "Evento Cadastrado" });
  }

  /**
   * Atualizando Usuário não ativo
   */
  async update(req, res) {
    const user = await User.findOne({
      _id: req.userId,
    });

    const event = await Evento.find({
      creator: user._id
    })

    await event.updateOne(req.body);

    // const updateUser = await User.findOne({
    //   _id: req.userId,
    // });

    return res.status(200).json({ message: "Evento atualizado." });
  }

  
  async myevents(req, res) {
    const user = await User.findOne({
      _id: req.userId,
    });

    if (!user) {
      return res.status(401).json({ error: "Usuário sem permissão" });
    }
    
    const eventos = await Evento.find({
      creator: user.id
    }).sort([["createdAt", 'descending']]);

    return res.json(eventos);
  }
}

export default new EventoController();
