import { loginUserAction } from "@/actions/authenticate";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          const user = await loginUserAction({ email, password });

          if (user) {
            return user; // Return user object if authentication is successful
          } else {
            return null; // Return null if authentication fails
          }
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User; // Ensure the user object is correctly typed
      return session;
    },
  },
};
