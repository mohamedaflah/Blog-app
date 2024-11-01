import { jwtVerify } from 'jose';

export const decodejwtToken = async (token: string) => {
  
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const { payload } = await jwtVerify(token, secret, {
    algorithms: ['HS256'], // Ensures the token is signed with HS256 algorithm
  });
  return payload; // This will contain the decoded token payload
};
