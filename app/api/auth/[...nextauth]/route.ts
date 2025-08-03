import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";
import { Adapter } from "next-auth/adapters";
import { SessionStrategy, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "JohnDoe" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // TODO: Implement database check instead of hardcoded users
        const users = [
          {
            id: "1",
            name: "John Doe",
            username: "JohnDoe",
            email: "spaghet@yahoo.com",
            password: "password",
          },
          {
            id: "663ae5a73f43154a2e1a6007",
            name: "Jane Doe",
            username: "JaneDoe",
            email: "meatball@yahoo.com",
            password: "123",
          },
        ];

        const user = credentials
          ? users.find(
              (user) =>
                user.username === credentials.username &&
                user.password === credentials.password
            )
          : null;
        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  adapter: MongoDBAdapter(clientPromise) as Adapter, // Use the MongoDB adapter
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      // Include the user's ID in the session object
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
