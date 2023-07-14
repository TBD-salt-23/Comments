import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
const clientId = process.env.GOOGLE_ID || '';
const clientSecret = process.env.GOOGLE_SECRET || '';

console.log('this is out client id', clientId);
console.log('this is our clientSecret', clientSecret);

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        '629586957237-6tdepdh786hh17srbt4li3kt0sc1s3g7.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
export default NextAuth(authOptions);
