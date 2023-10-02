import { Backend_URL } from '@/app/lib/constants';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredntialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  providers: [
    CredntialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'jsmith',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;
        const res = await fetch(Backend_URL + 'auth/login', {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret:
    '3cc80b75056bd4ab892c977d6b9f7bd2bab0d52e487254463522a09e6f116c1b69a1d8f31ea5100e2efbffc2840f43d1',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
