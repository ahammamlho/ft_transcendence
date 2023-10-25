import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      email: string;
      name: string;
      avatar: string;
      status: Status;
      lastSee: number;
      isFriends: boolean;
    };
    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

import { JWT } from 'next-auth/jwt';
declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      email: string;
      name: string;
      avatar: string;
      status: Status;
      lastSee: number;
    };

    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
