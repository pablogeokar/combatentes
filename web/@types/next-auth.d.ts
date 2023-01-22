import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user?: {
      id: string | number;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string | number;
    name: string;
    email: string;
    picture: string;
    sub: string;
    id: string;
    iat: number;
    exp: number;
    jti: string;
  }
}
