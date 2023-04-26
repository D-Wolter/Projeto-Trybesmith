import jwt, { Secret } from 'jsonwebtoken';

const algorithm = 'HS256';
const expiresIn = '1d';

const secret: Secret = `${process.env.JWT_SECRET}`;

function generateToken(payload: number): string {
  const token = jwt.sign({ payload }, secret, { algorithm, expiresIn });
  return token;
}

export default { generateToken };