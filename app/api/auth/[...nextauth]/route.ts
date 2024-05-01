import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
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
      async authorize(credentials): Promise<User | null> {
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
            id: "2",
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
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
