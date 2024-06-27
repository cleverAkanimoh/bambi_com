import Credentials from "next-auth/providers/credentials";

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

import GoogleProvider from "next-auth/providers/google";

import { getDbUser } from "@/lib/prismaHelpers";
import { prisma } from "@/lib/prisma";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      async authorize(credentials) {
        const { email } = credentials as {
          email: string;
        };

        const userFound = await getDbUser({ email });

        await prisma.user.update({
          where: { email },
          data: {
            last_signed_in: new Date(),
          },
        });

        return userFound;
      },
    }),
  ],
  secret: "wpWcpZBQs0nOON6wL9V3YSjLmsMgeQWXXfjZSThj7Lg=",
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
});
