import bcrypt from "bcryptjs";

import User from "../models/User";

export default async (req, res, next) => {
  // Pegando dados da requisição

  const { email, password } = req.body;

  // Buscando usuário pelo email

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: "Usuário não encontrado" });
  }

  const validate = await bcrypt.compare(password, user.password);

  if (!validate) {
    return res.status(401).json({ error: "Senha Invalida" });
  }

  return next();
};
