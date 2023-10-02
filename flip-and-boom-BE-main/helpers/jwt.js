const jwt = require("jsonwebtoken");
const sercret_key = process.env.JWT_SECRET || "rahasia";

function signToken(payload) {
  return jwt.sign(payload, sercret_key);
}

function verifyToken(token) {
  return jwt.verify(token, sercret_key);
}

module.exports = { signToken, verifyToken };
