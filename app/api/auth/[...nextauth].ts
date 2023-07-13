import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
const clientId = process.env.GOOGLE_ID || '';
const clientSecret = process.env.GOOGLE_SECRET || '';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
export default NextAuth(authOptions);
