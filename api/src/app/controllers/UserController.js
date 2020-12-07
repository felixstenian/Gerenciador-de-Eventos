import * as Yup from "yup";
import User from "../models/User";

class UserController {
  /**
   * Listando usuários
   */

  async show(req, res) {

    // Verificando se Usuário é Admin

    // const checkAdmin = await User.findOne({
    //   _id: req.userId,
    // });

    // if (!checkAdmin.admin) {
    //   return res.status(401).json({ error: "Usuário sem permissão" });
    // }

    // // Buscando todos os usuário no banco

    // const users = await User.find()
    //   .skip((page - 1) * 10)
    //   .limit(10);

    // // Resposta com usuários

    // return res.json(users);
  }

  async index(req, res) {}

  /**
   * Adicionando Usuário
   */
  async store(req, res) {
    // Validando dados de entrada

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha no cadastro !" });
    }

    // Verificando se email já está cadastrado no banco

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ error: "E-mail Já cadastrado!" });
    }

    // Gravando novo usuário no banco

    const user = await User.create(req.body);

    // Enviando email

    // Resposta de criação empresa

    return res.status(200).json(user);
  }

  /**
   * Atualizando Usuário não ativo
   */
  async update(req, res) {
    // // Buscando Usuário
    // const user = await User.findOne({
    //   _id: req.userId,
    // });

    // if (!user) {
    //   return res.status(400).json({ error: "Usuário não existe" });
    // } else {
    //   await user.updateOne(req.body);
    // }

    // const updateUser = await User.findOne({
    //   _id: req.userId,
    // });

    // return res.json(updateUser);
  }

  /**
   * Removendo usuário
   */
  async delete(req, res) {
    // Verificando se Usuário é Super Admin
    // const checkSuperAdmin = await User.findOne({
    //   _id: req.userId,
    // });

    // if (!checkSuperAdmin.admin) {
    //   return res.status(401).json({ error: "Usuário não existe" });
    // }

    // // Verificando se Usuário existe

    // const userExists = await User.findById(req.params.id);

    // if (!userExists) {
    //   return res.status(400).json({ error: "Usuário não existe" });
    // }

    // // Buscando e removendo usuário do banco

    // const user = await User.findByIdAndDelete(req.params.id);

    // // Resposta de usuário removido

    // return res.json({
    //   sucess: `Usuário ${user.name} removido`,
    // });
  }
}

export default new UserController();
