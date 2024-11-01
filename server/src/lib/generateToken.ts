import { SignJWT } from 'jose';

export const generateJWT = async (payload: any): Promise<string> => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('22d')
    .sign(secret);
  return token;
};
