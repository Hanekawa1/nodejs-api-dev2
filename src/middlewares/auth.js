const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    console.log(req.headers);
    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
      return res.status(401).json({ error: "token não fornecido" });
    }

    const [, token] = authHeaders.split(" ");
    // split = array
    // retorno = [bearer, eyvu389weif0ggn29ewirjgf]
    // ocorrencias = [, token]
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded._id;
    req.userName = decoded.NomeUsuario;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "token inválido." + err });
  }
};
