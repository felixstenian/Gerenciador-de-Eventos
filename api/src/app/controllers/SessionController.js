import jwt from "jsonwebtoken";
import * as Yup from "yup";

import authConfig from "../../config/auth";

import User from "../models/User";

class SessionController {
  /**
   * criando sessão
   */
  async store(req, res) {
    // Validando dados de entrada

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na validação." });
    }

    const { email } = req.body;

    const user = await User.findOne({ email });

    const { id } = user;

    return res.json({
      user,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  /**
   * Ativando Conta de novo usuário
   */
  async update(req, res) {}
}

export default new SessionController();
