import { SignJWT, jwtVerify } from 'jose';
import { Types } from 'mongoose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const generateToken = async (data: { id: Types.ObjectId; name: string }) => {
  return await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(secret);
};

export const decryptToken = async (token: string) => {
  const { payload } = await jwtVerify(token, secret);
  return payload as { id: string; name: string; exp: number };
};
