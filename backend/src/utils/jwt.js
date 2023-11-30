import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../settings/config.js';

export const createJWT = async ({ userId }) => {
  return new Promise((res, rej) => {
    jwt.sign(
      { userId },
      JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) rej(err);
        res(token);
      }
    );
  });
};

export const verifyJWT = async ({ token }) => {
  return new Promise((res, rej) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err || !decoded.userId) rej('Invalid token');
      res(decoded);
    });
  });
};
