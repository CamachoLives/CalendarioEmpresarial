const { authRepository } = require("./repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const Login = async (email, password) => {
  const user = await authRepository.findByEmail(email);
  if (!user) throw new Error("Usuario no encontrado");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Contraseña incorrecta");

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return { message: "Login exitoso", token };
};

const Register = async (nombre, email, password) => {
  const exists = await authRepository.findByEmail(email);
  if (exists) throw new Error("The email is already in use");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await authRepository.create({
    nombre,
    email,
    password: hashedPassword,
  });

  return { message: "Usuario creado", user: newUser };
};

module.exports.AuthServices = {
  Login,
  Register,
};
