import bcrypt from "bcryptjs";
import { authConfig } from "./../../../../../auth.config";
import Credentials from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";

import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

import { getDbUser } from "@/lib/prismaHelpers";
import { prisma } from "@/lib/prisma";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  //   adapter: PrismaAdapter(prisma) ?? null,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) throw new Error("Invalid Credentials");

        const userFound = await getDbUser({ email });
        if (!userFound)
          throw new Error("No user was found for this credentials");

        const passwordMatched = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!passwordMatched) throw new Error("Invalid credentials");

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
  //   jwt: {
  //     secret: process.env.NEXTAUTH_JWT_SECRET as string,
  //   },
  secret: process.env.NEXTAUTH_SECRET,
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
