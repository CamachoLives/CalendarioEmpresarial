const { authRepository } = require("./repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const Login = async (email, password) => {
  const user = await authRepository.findByEmail(email);
  console.log("USER:", user);

  if (!user) throw new Error("Email not found");
  if (!user.password_hash) {
    throw new Error("El usuario no tiene contraseña registrada");
  }
  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw new Error("Password is incorrect");

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return { message: "Login Success", token };
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
